exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', function(table){
    
    table.increments().primary();
    
    table.string('firstName');
    
    table.string('lastName');
    
    table.string('email');
    table.string('image');
    table.integer('classid').unsigned();
    table.foreign('classid')
      .references('id')
      .inTable('classes');
    table.integer('guardianid').unsigned();
    table.foreign('guardianid')
      .references('id')
      .inTable('guardians');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students');
};