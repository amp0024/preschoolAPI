var knex = require('./knex');

function Guardians() {
  return knex('guardians');
}

module.exports = {
  getGuardians: function(){
    return Guardians().select();
  },
  getGuardian: function(id){
    return Guardians().where('id', id);
  }
}