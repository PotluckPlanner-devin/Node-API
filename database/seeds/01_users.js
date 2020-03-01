
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {username: "Connor Angelis", email: "email1@email.com", password: "password1"},
        {username: "Michael Bailar", email: "email2@email.com",  password: "password2"},
        {username: "Steven Wang", email: "email3@email.com",  password: "password3"},
        {username: "Amos Rose", email: "email4@email.com",  password: "password4"},
        {username: "Lisa Maskovich", email: "email5@email.com",  password: "password5"},
        {username: "Devin Dias", email: "email6@email.com",  password: "password6"}
      ]);
    });
};
