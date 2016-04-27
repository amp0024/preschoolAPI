var knex = require('./knex.js');

function Guardians() {
  return knex('guardians');
}

// *** queries *** //

function getAll() {
  return Guardians().select();
}

function getSingle(id) {
  return Guardians().where('id', id).first();
}

function add(guardians) {
  return Guardians().insert(guardians, 'id');
}

function update(id, updates) {
  return Guardians().where('id', id).update(updates);
}

function deleteItem(id) {
  return Guardians().where('id', id).del();
}


module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteItem: deleteItem
};