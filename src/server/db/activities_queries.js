var knex = require('./knex.js');

function Activities() {
  return knex('activities');
}

// *** queries *** //

function getAll() {
  return Activities().select();
}

function getSingle(id) {
  return Activities().where('id', id).first();
}

function add(activity) {
  return Activities().insert(activity, 'id');
}

function update(id, updates) {
  return Activities().where('id', id).update(updates);
}

function deleteItem(id) {
  return Activities().where('id', id).del();
}


module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteItem: deleteItem
};