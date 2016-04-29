exports.up = function(knex, Promise) {
  
  return knex.schema.createTable('activities', function(table){
    
    table.increments('id').primary();
  
    table.string('name');
    
    table.string('startTime');
  
    table.string('finishTime');
  
    table.string('description');
  
    table.string('type');
  
    table.integer('studentid').unsigned();
    table.foreign('studentid')
      .references('id')
      .inTable('students');
  
  });

};

exports.down = function(knex, Promise) {

  return knex.schema.dropTable('activities');

};