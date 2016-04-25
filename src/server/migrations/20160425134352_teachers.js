exports.up = function(knex, Promise) {
  return knex.schema.createTable('teachers', function(table){
    
    table.increments().primary();
    table.string('username').unique();
    table.string('password');
    
    table.string('firstName');
    
    table.string('lastName');
    
    table.string('email');
    table.string('image');
    table.integer('schoolid').unsigned();
    table.foreign('schoolid')
      .references('id')
      .inTable('schools');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teachers');
};