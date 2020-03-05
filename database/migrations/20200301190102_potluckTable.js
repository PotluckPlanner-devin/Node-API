exports.up = function(knex) {
  return knex.schema.createTable('potlucks', potlucks => {
    potlucks.increments();
    
    potlucks
    .integer('user_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

    potlucks
      .string('location', 255)
      .notNullable();

    potlucks
      .date('date')
      .notNullable();

    potlucks
      .time('time', 255)
      .notNullable();

  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('potlucks')
};
