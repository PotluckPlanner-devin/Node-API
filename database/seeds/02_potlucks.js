
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('potlucks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('potlucks').insert([
        {user_id: 1, location: "12345 Street Ave", date: "2018-7-22", time: "10:30"},
        {user_id: 2, location: "54321 Road Terrace", date: "2019-10-2", time: "15:00"},
        {user_id: 1, location: "789 Potluck lane" , date: "2020-9-1", time: "19:00"},
        {user_id: 4, location: "09876 ranOutOfStreetNames Road", date: "2017-2-1", time: "12:00"}
      ]);
    });
};
