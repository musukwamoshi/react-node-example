import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('email').nullable();
    table.string('phoneNumber').nullable();
    table.string('hash').nullable();
    table.string('salt').nullable();
    table.boolean('is_admin').nullable().defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

