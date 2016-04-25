var knex = require('./knex');

function Students() {
  return knex('students');
}

module.exports = {
  getStudents: function(){
    return Students().select();
  },
  getStudent: function(id){
    return Students().where('user_id', id);
  },
  createStudent: function(student){
    return Students().insert(student).catch(function(err){
      console.log(err);
    });
  },
  getStudentbyClass: function(mfc_id){
    return Students().select()
            .join('classes', 'classid', 'classes.id')
            .where({'classesid': classesid});
  },
}