const db = require('../../database/dbConfig')

module.exports = {
  findFoodsById,
  findFoodByName,
  addFood,
  addFoodToPotluck,
  editFoodName
}

  function findFoodsById(id) {
    return db('potluck_food')
      .join('potlucks', 'potlucks.id', 'potluck_food.potluck_id')
      .join('foods', 'foods.id', 'potluck_food.food_id')
      .select('foods.foodName', 'isTaken')
      .where('potluck_food.potluck_id', id)
  }

  function findFoodByName(foodName) {
    return db('foods')
      .where({ foodName })
      .first();
  }

  function addFood(food) {
    return db('foods')
      .insert(food)
  }

  function addFoodToPotluck(foodPotluck) {
    return db('potluck_food')
      .insert(foodPotluck)
  }

  function editFoodName(food, id) {
    return db('foods')
    .where('id', id)
    .update(food)
  }