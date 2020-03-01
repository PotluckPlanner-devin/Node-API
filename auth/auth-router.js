const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./auth-model');

router.post('/register', (req, res) => {
  let user = req.body

  const hash = bcrypt.hashSync(user.password, 10);

  user.password = hash

  if(user.password && user.username && user.email){
  Users.addUser(user)
    .then(newUser => {
      res.status(200).json({message: `User succesfully created`})
    })
    .catch(err => res.status(500).json({message: err}))
  } else {
    res.status(401).json({message: 'Make sure you are providing a username, email, and password'})
  }
})

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findUserBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compare(password, user.password)){
        console.log(bcrypt.compare(password, user.password))
        const token = generateToken(user)

        res.status(200).json({message: `Succesfully logged in`, token})
      } else {
        res.status(400).json({message: 'Wrong username or password'})
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Server login error'})
    })
})

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role || "user"
  }

  const secret = "potluck planner is the best"

  const options = {
    expiresIn: "1h",
  }
  return jwt.sign(payload, secret, options)
}

module.exports = router