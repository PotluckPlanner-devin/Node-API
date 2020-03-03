exports.up = function(knex) {
  return knex.schema.createTable('foods', foods => {
    foods.increments();

    foods
      .string('foodName', 255)
      .notNullable()
      .unique();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('foods')
};
