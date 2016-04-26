exports.up = function(knex, Promise) {
  return knex.schema.createTable('classes', function(table){
    
    table.increments('id').primary();
    table.string('name');
    table.integer('teacherid').unsigned();
    table.foreign('teacherid')
      .references('id')
      .inTable('teachers');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('classes');
};