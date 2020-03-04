
exports.up = function(knex) {
  return knex.schema.table('potlucks', column => {
    column
    .string('potluckName', 255)
    .defaultTo('')
    .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.table('potlucks', column => {
    column.dropColumn('potluckName')
  })
};
