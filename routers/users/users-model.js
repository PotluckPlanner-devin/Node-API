const db = require('../../database/dbConfig');

module.exports = {
  findAll,
  findById,
  editUser,
  removeUser
}

function findAll() {
  return db('users');
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function editUser(user, id) {
  return db('users')
    .where('id', id)
    .update(user);
}

function removeUser(id) {
  return db('users')
    .where('id', id)
    .del();
}