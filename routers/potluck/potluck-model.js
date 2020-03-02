const db = require('../../database/dbConfig')

module.exports = {
  findPotlucks,
  findPotluckById,
  addPotluck,
  editPotluck,
  removePotluck
}

  function findPotlucks() {
    return db('potlucks');
  }

  function findPotluckById(id) {
    return db('potlucks')
      .where({ id })
      .first();
  }

  function addPotluck(potluck) {
    return db('potlucks')
      .insert(potluck);
  }

  function editPotluck(potluck, id) {
    return db('potlucks')
      .where('id', id)
      .update(potluck);
  }

  function removePotluck(id) {
    return db('potlucks')
      .where('id', id)
      .del();
  }