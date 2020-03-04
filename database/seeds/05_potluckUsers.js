
exports.seed = function(knex) {
  return knex('potluck_users').truncate()
    .then(function () {
      return knex('potluck_users').insert([
        {potluck_id: 1, user_id: 1},
        {potluck_id: 1, user_id: 2},
        {potluck_id: 1, user_id: 3},
        {potluck_id: 1, user_id: 4},
        {potluck_id: 1, user_id: 5},
        {potluck_id: 1, user_id: 6},
        {potluck_id: 2, user_id: 2},
        {potluck_id: 2, user_id: 4},
        {potluck_id: 2, user_id: 3},
        {potluck_id: 2, user_id: 1},
        {potluck_id: 3, user_id: 6},
        {potluck_id: 4, user_id: 3},
      ]);
    });
};
