exports.up = function(knex, Promise) {
  
  return knex.schema.createTable('users', function(table){
    
    table.increments('id').primary();
    
    table.string('password');
    
    table.string('email').unique();
    
    table.string('firstName');
    
    table.string('lastName');

    table.string('phone');

    table.string('street');

    table.string('unit');

    table.string('city');

    table.string('state');

    table.string('zip');
    
    table.integer('schoolid').unsigned();
    
    table.foreign('schoolid')
      .references('id')
      .inTable('schools');
    
    table.string('role').notNullable();

    table.string('image');
  });
};

exports.down = function(knex, Promise) {
  
  return knex.schema.dropTable('users');

};