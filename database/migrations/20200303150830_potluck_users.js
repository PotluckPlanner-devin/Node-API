
exports.up = function(knex) {
  return knex.schema.createTable('potluck_users', potluck_users => {
    potluck_users.primary(['potluck_id', 'user_id'])

    potluck_users
      .integer('potluck_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('potlucks')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

      potluck_users
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('potluck_users')
};
