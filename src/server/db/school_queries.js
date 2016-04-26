var knex = require('./knex.js');

function Schools() {
  return knex('schools');
}

// *** queries *** //

function getAll() {
  return Schools().select();
}

function getSingle(id) {
  return Schools().where('id', id).first();
}

function add(schools) {
  return Schools().insert(schools, 'id');
}

function update(id, updates) {
  return Schools().where('id', id).update(updates);
}

function deleteItem(id) {
  return Schools().where('id', id).del();
}


module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteItem: deleteItem
};