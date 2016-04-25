exports.up = function(knex, Promise) {
  return knex.schema.createTable('admins', function(table){
    table.increments();
    table.string('brewery');
    table.string('name');
    table.float('abv');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admins');
};
