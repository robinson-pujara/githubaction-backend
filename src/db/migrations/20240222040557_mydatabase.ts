import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('todos', (table) => {
        table.increments('id').primary();
        table.string('title', 255).notNullable();
        table.text('description').nullable();
        table.boolean('is_completed').defaultTo(false);
        table.timestamps(true, true); // Adds created_at and updated_at columns
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('todos');
}

