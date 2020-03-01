
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {username: "Test1", email: "email1@email.com", password: "password1"},
        {username: "Test2", email: "email2@email.com",  password: "password2"},
        {username: "Test3", email: "email3@email.com",  password: "password3"},
        {username: "Test4", email: "email4@email.com",  password: "password4"},
        {username: "Test5", email: "email5@email.com",  password: "password5"},
        {username: "Test6", email: "email6@email.com",  password: "password6"},
        {username: "Test7", email: "email7@email.com",  password: "password7"},
        {username: "Test8", email: "email8@email.com",  password: "password8"},
        {username: "Test9", email: "email9@email.com",  password: "password9"},
        {username: "Test10", email: "email10@email.com", password: "password10"},

      ]);
    });
};
