
exports.up = function(knex) {
  return knex.schema.createTable('clients', function(table){
      table.string('account').notNullable();
      table.string('name').notNullable();
      table.decimal('balance').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('clients');
};