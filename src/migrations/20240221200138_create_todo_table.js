exports.up = function(knex) {
    return knex.schema.createTable('todos', function(table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('description');
      table.boolean('is_completed').defaultTo(false);
      table.timestamps(true, true); // Adds created_at and updated_at columns
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('todos');
  };
  