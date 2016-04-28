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
  return Activities().insert({
      name: activity.name,
      startTime: activity.startTime,
      finishTime: activity.finishTime,
      description: activity.description,
      type: activity.type,
      studentid: activity.studentid


  });
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