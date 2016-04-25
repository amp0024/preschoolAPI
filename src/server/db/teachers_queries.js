var knex = require('./knex');

function Teachers() {
  return knex('teachers');
}

module.exports = {
  getTeachers: function(){
    return Teachers().select();
  },
  getTeacher: function(id){
    return Teachers().where('id', id);
  },
  createTeacher: function(teacher){
    return Teachers().insert(teacher, 'id');
  },
  editTeacher: function(teacher, id){
    return Teachers().where('id', id).update(teacher);
  },
  deleteTeacher: function(id){
    console.log('id');
    return Teachers().where('id', id).delete();
  }
}