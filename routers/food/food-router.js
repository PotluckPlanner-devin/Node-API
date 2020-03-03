const router = require('express').Router()

const Foods = require('./food-model')

router.get('/:potluckID', (req, res) => {
  const { potluckID } = req.params
  Foods.findFoodsById(potluckID)
    .then(foods => {
      res.status(200).json(foods)
    })
    .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
})

router.post('/:potluckID', (req, res) => {
  const { potluckID } = req.params

  const food = req.body.foodName

  if(potluckID && food && food.length > 0){ 
    Foods.findFoodByName(food)
    .then(food => {
        if(food){
          const foodPotluck = {potluck_id: Number(potluckID), food_id: food.id}
          Foods.addFoodToPotluck(foodPotluck)
          .then(food => {
            res.status(201).json({message: "Succesfully added food to potluck!"})
          })
          .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
        } else {
          Foods.addFood(req.body)            
          .then(foodID => {
          const foodPotluck = {potluck_id: Number(potluckID), food_id: foodID[0]}
          Foods.addFoodToPotluck(foodPotluck)
          .then(food => {
            res.status(200).json({message: "Successfully added food to potluck!"})
          })
          .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
        })
          }
      })
  .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
  } else {
    res.status(400).json({message: "Please provide a potluck id and a foodName"})
  }

})

router.post('/:potluckID/isTaken', (req, res) => {
  const { potluckID } = req.params

  const foodName = req.body.foodName

  if(req.body.foodName && req.body.foodName.length > 0){
    Foods.findFoodByName(foodName)
    .then(food => {
      if(food){
      const foodID = food.id
      
      Foods.findFoodById(potluckID, foodID)
        .then(food => {
          const setIsTaken = {potluck_id: Number(potluckID), food_id: foodID, isTaken: (!food.isTaken)}
          Foods.switchIsTaken(setIsTaken, potluckID, foodID)
            .then(e => {
              res.status(201).json({message: 'Successfully set the isTaken value'})
            })
            .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
        })
        .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
      } else {
        res.status(401).json({message: "Can not find that food"})
      }
    })
  } else {
    res.status(400).json({message: "Please enter both an ID and a foodName"})
  }
})

router.put('/:foodID', (req, res) => {
  const { id } = req.params

  if(req.body.foodName && req.body.foodName.length > 0){
  Foods.editFoodName(req.body, id)
    .then(food => {
      res.status(200).json({message: "Succesfully editted food"})
    })
    .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
  } else {
    res.status(400).json({message: "Please enter both an ID and a foodName"})
  }
  })

  router.delete('/:potluckID', (req, res) => {
    const { potluckID } = req.params
    
    const foodName = req.body.foodName

    if(req.body.foodName && req.body.foodName.length > 0){
    Foods.findFoodByName(foodName)
      .then(food => {
        if(food){
        const foodID = food.id
        Foods.deleteFoodByFoodName(potluckID, foodID)
          .then(food => {
            res.status(200).json({message: "Succesfully deleted food"})
          })
          .catch(err => res.status(500).json({message: `Server Error: ${err}`}))
        } else {
          res.status(401).json({message: "Can not find that food"})
        }
      })
    } else {
      res.status(400).json({message: "Please enter both an ID and a foodName"})
    }
  })

module.exports = router