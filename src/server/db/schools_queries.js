var knex = require('./knex');

function Schools() {
  return knex('schools');
}

module.exports = {
  getSchools: function(){
    return Schools().select();
  },
  getSchool: function(id){
    return Schools().where('id', id);
  },
  createSchool: function(school){
    return Schools().insert(school, 'id');
  },
  editSchool: function(school, id){
    return Schools().where('id', id).update(school);
  },
  deleteSchool: function(id){
    console.log('id');
    return Schools().where('id', id).delete();
  }
}