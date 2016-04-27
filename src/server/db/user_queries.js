var knex = require('./knex.js');

function Users() {
  return knex('users');
}

// *** queries *** //

function getAll() {
  return Users().select();
}

function getSingle(id) {
  return Users().where('id', id).first();
}

function add(user) {
  return Users().insert(user, 'id');
}

function update(id, updates) {
  return Users().where('id', id).update(updates);
}

function deleteItem(id) {
  return Users().where('id', id).del();
}


module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteItem: deleteItem
};