const router = require('express').Router();

const Potluck = require('./potluck-model')

router.get('/', (req, res) => {
  Potluck.findPotlucks()
    .then(potlucks => {
      res.status(200).json(potlucks)
    })
})

router.get('/:id', potluckIdChecker, (req, res) => {
  const { id } = req.params

  Potluck.findPotluckById(id)
    .then(potluck => {
      res.status(200).json(potluck)
    })
    .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
})

router.post('/', (req, res) => {
  const potluck = req.body
  const { user_id, location, date, time } = req.body

  if(user_id && location && date && time){
  Potluck.addPotluck(potluck)
    .then(potluck => {
      res.status(201).json({message: "Successfully created potluck"})
    })
    .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
  } else {
    res.status(400).json({message: "Please make sure there is a user_id, location, date, and time provided"})
  }
})

router.put('/:id', potluckIdChecker, (req, res) => {
  const potluck = req.body
  const { id } = req.params

  Potluck.editPotluck(potluck, id)
    .then(potluck => {
      res.status(201).json({message: "Successfully editted potluck"})
    })
    .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
})

  router.delete('/:id', potluckIdChecker, (req, res) => {
    const { id } = req.params

    Potluck.removePotluck(id)
    .then(potluck => {
      res.status(201).json({message: "Successfully deleted potluck"})
    })
    .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
})

module.exports = router

  function potluckIdChecker(req, res, next){
    const { id } = req.params
  
    Potluck.findPotluckById(id)
      .then(potluck => {
        if(potluck){
          next();
        } else {
          res.status(400).json({message: "Error finding that potluck ID"})
        }
      })
      .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
  }