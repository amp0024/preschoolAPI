
exports.up = function(knex, Promise) {
  return knex.schema.createTable('schools', function(table){
    
    table.increments().primary();
    table.string('name').unique();
    table.string('street');
    
    table.string('unit');
    
    table.string('city');
    
    table.string('state');
    
    table.integer('zip');
    
    table.text('info');
    
    table.integer('adminid').unsigned();
    table.foreign('adminid')
      .references('id')
      .inTable('admins');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('schools');
};