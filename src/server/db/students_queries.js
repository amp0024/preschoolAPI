var knex = require('./knex.js');

function Students() {
  return knex('students');
}

// *** queries *** //

function getAll() {
  return Students().select();
}

function getSingle(id) {
  return Students().where('id', id).first();
}

function add(student) {
  return Students().insert({
    firstName: student.firstName,
    lastName: student.lastName,
    email: student.email,
    image: student.image,
    classid: student.classid,
    guardianid: student.guardianid

  });
}
 

function update(id, updates) {
  return Students().where('id', id).update(updates);
}

function deleteItem(id) {
  return Students().where('id', id).del();
}


module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteItem: deleteItem
};