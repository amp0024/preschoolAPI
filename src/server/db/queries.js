var knex = require('./knex.js');

function Admins() {
  return knex('admins');
}

// *** queries *** //

function getAll() {
  return Admins().select();
}

function getSingle(id) {
  return Admins().where('id', id).first();
}

function add(admins) {
  return Admins().insert(admins, 'id');
}

function update(id, updates) {
  return Admins().where('id', id).update(updates);
}

function deleteItem(id) {
  return Admins().where('id', id).del();
}


module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteItem: deleteItem
};