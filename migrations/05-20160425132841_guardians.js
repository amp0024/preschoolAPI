exports.up = function(knex, Promise) {
  return knex.schema.createTable('guardians', function(table){
    
    table.increments().primary();

    table.string('firstName');
    
    table.string('lastName');

    table.string('phone');

    table.string('email');

    table.string('username').unique();

    table.string('password');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('guardians');
};

