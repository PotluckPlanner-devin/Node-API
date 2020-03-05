
exports.seed = function(knex) {
  return knex('potluck_food').truncate()
    .then(function () {
      return knex('potluck_food').insert([
        {potluck_id: 1, food_id: 1},
        {potluck_id: 1, food_id: 2},
        {potluck_id: 1, food_id: 3},
        {potluck_id: 1, food_id: 4},
        {potluck_id: 1, food_id: 5},
        {potluck_id: 1, food_id: 7},
        {potluck_id: 2, food_id: 8},
        {potluck_id: 3, food_id: 10},
        {potluck_id: 2, food_id: 15},
        {potluck_id: 3, food_id: 12},
        {potluck_id: 3, food_id: 9},
        {potluck_id: 3, food_id: 8},
        {potluck_id: 2, food_id: 14},
      ]);
    });
};
