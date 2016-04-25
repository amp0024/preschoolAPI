var knex = require('./knex');

function Activities() {
  return knex('activities');
}

module.exports = {
  getActivities: function(){
    return Activities().select().join('students', 'studentid', 'students.id');
  },
  getActivity: function(id){
    return Activities().where('id', id);
  },
  getActivitybyStudent: function(mfc_id){
    return Activities().select()
            .join('students', 'studentid', 'students.id')
            .where({'studentid': studentid});
  },
  createActivity: function(activity){
    return Activities().insert(activity, 'id');
  },
  updateActivity: function(activity, id){
    return Activities().where('id', id).update(activity);
  },
  deleteActivity: function(id){
    console.log('id');
    return Activities().where('id', id).delete();
  }
}