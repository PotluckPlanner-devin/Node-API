
exports.up = function(knex) {
  return knex.schema.createTable('potluck_food', potluck_food => {
    potluck_food.primary(['potluck_id', 'food_id'])

    potluck_food
      .integer('potluck_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('potlucks')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    potluck_food
      .integer('food_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('foods')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    potluck_food
      .boolean('isTaken')
      .defaultTo(false)

  })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('potluck_food')
};
