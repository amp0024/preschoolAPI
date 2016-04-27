
exports.up = function(knex, Promise) {
  
  return knex.schema.createTable('classes', function(table){
    
    table.increments('id').primary();
    
    table.string('name');
    
    table.integer('userid').unsigned();
    
    table.foreign('userid')
      .references('id')
      .inTable('users');
  
  });

};

exports.down = function(knex, Promise) {

  return knex.schema.dropTable('classes');

};