var knex = require('./knex.js');

function Classes() {
  return knex('classes');
}

// *** queries *** //

function getAll() {
  return Classes().select();
}

function getSingle(id) {
  return Classes().where('id', id).first();
}

function add(classes) {
  return Classes().insert(classes, 'id');
}

function update(id, updates) {
  return Classes().where('id', id).update(updates);
}

function deleteItem(id) {
  return Classes().where('id', id).del();
}


module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteItem: deleteItem
};