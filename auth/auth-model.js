const db = require('../database/dbConfig')

module.exports = {
  addUser,
  findUserBy,
  findById
}

function addUser(user) {
  return db('users')
  .insert(user)
}

function findUserBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}