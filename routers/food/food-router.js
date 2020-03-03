const router = require('express').Router()

const Foods = require('./food-model')

router.get('/:id', (req, res) => {
  const { id } = req.params
  Foods.findFoodsById(id)
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

module.exports = router