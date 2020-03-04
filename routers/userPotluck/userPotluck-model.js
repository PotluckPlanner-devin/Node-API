const db = require('../../database/dbConfig')

module.exports = {
  findUsersByPotluckId,
  findUserByName,
  addUserToPotluck,
  removeUserFromPotluck
}

function findUsersByPotluckId(id) {
  return db('potluck_users')
    .join('potlucks', 'potlucks.id', 'potluck_users.potluck_id')
    .join('users', 'users.id', 'potluck_users.user_id')
    .select('potlucks.id', 'users.id', 'users.username')
    .where('potluck_users.potluck_id', id);
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