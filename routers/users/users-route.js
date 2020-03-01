const router = require('express').Router();

const Users = require('./users-model')

router.get('/', (req, res) => {
  Users.findAll()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  Users.findById(id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const user = req.body

  console.log(req.body)

  Users.editUser(user, id)
    .then(user => {
      res.status(200).json({message: "User succesfully editted"})
    })
    .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  Users.removeUser(id)
    .then(user => {
      res.status(200).json({message: "User succesfully deleted"})
    })
    .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
})

module.exports = router