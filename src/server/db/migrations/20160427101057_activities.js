exports.up = function(knex, Promise) {
  
  return knex.schema.createTable('activities', function(table){
    
    table.increments('id').primary();
  
    table.string('name');
    
    table.time('startTime');
  
    table.time('finishTime');
  
    table.text('description');
  
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