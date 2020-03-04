const router = require('express').Router()

const UsersPotluck = require('./userPotluck-model')

router.get('/:potluckID/attending', (req, res) => {
  const { potluckID } = req.params
  UsersPotluck.findAttendeesByPotluckID(potluckID)
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
})

router.get('/:userID/user', (req, res) => {
  const { userID } = req.params
  UsersPotluck.findPotlucksByUserID(userID)
    .then(potlucks => {
      res.status(200).json(potlucks)
    })
    .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
})

router.post('/:potluckID', (req, res) => {
  const { potluckID } = req.params

  const user = req.body.username

  if(potluckID && user && user.length > 0){
    UsersPotluck.findUserByName(user)
      .then(user => {
        if(user){
          const potluckUser = { potluck_id: Number(potluckID), user_id: user.id}
          UsersPotluck.addUserToPotluck(potluckUser)
            .then(e => {
              res.status(201).json({message: "Succesfully added user to potluck"})
            })
            .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
          } else {
          res.status(401).json({message: "Could not find that user"})
        }
      })
      .catch(err => res.status(500).json({message: `Server Error: ${err}`}))

  } else {
    res.status(400).json({message: "Please provide both a potluck id and a foodName"})
  }
})

router.delete('/:potluckID', (req, res) => {
  const { potluckID } = req.params

  const username = req.body.username

  if(req.body.username && req.body.username.length > 0){
    UsersPotluck.findUserByName(username)
      .then(user => {
        if(user){
          const userID = user.id
          UsersPotluck.removeUserFromPotluck(Number(potluckID), userID)
            .then(e => {
              res.status(200).json({message: "Succesfully removed user from potluck"})
            })
            .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
          } else {
          res.status(401).json({message: "Can not find that user"})
        }
      })
  } else {
    res.status(400).json({message: "Please enter both a potluck ID and a username"})
  }
})

module.exports = router