var knex = require('./knex.js');

function Teachers() {
  return knex('teachers');
}

// *** queries *** //

function getAll() {
  return Teachers().select();
}

function getSingle(id) {
  return Teachers().where('id', id).first();
}

function add(teachers) {
  return Teachers().insert(teachers, 'id');
}

function update(id, updates) {
  return Teachers().where('id', id).update(updates);
}

function deleteItem(id) {
  return Teachers().where('id', id).del();
}


module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteItem: deleteItem
};