var knex = require('./knex');

function Classes() {
  return knex('classes');
}

module.exports = {
  getClasses: function(){
    return Classes().select().join('teachers', 'teacherid', 'teachers.id');
  },
  getClass: function(id){
    return Classes().where('id', id);
  },
  getClassesbyTeacher: function(mfc_id){
    return Products().select()
            .join('teachers', 'teacherid', 'teachers.id')
            .where({'teacherid': teacherid});
  },
  createClass: function(class){
    return Products().insert(class, 'id');
  },
  updateClass: function(class, id){
    return Classes().where('id', id).update(class);
  },
  deleteClass: function(id){
    console.log('id');
    return Classes().where('id', id).delete();
  }
}