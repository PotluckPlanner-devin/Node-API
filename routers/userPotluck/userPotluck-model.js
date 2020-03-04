const db = require('../../database/dbConfig')

module.exports = {
  findAttendeesByPotluckID,
  findPotlucksByUserID,
  findUserByName,
  addUserToPotluck,
  removeUserFromPotluck
}

function findAttendeesByPotluckID(id) {
  return db('potluck_users')
    .join('potlucks', 'potlucks.id', 'potluck_users.potluck_id')
    .join('users', 'users.id', 'potluck_users.user_id')
    .select('potlucks.id', 'users.id', 'users.username')
    .where('potluck_users.potluck_id', id);
  }

function findPotlucksByUserID(id) {
  return db('potluck_users')
  .join('potlucks', 'potlucks.id', 'potluck_users.potluck_id')
  .join('users', 'users.id', 'potluck_users.user_id')
  .select('potlucks.potluckName', 'potlucks.location', 'potlucks.date', 'potlucks.time')
  .where('potluck_users.user_id', id);
}

function findUserByName(username) {
  return db('users')
    .where({ username })
    .first();
}

function addUserToPotluck(potluckUser) {
  return db('potluck_users')
    .insert(potluckUser)
}

function removeUserFromPotluck(potluckID, userID) {
  return db('potluck_users')
    .where('potluck_id', potluckID)
    .where('user_id', userID)
    .del();
}