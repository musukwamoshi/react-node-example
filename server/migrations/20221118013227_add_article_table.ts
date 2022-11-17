import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('articles', function (table) {
        table.increments();
        table.string('email').nullable();
        table.string('hash').nullable();
        table.string('salt').nullable();
        table.boolean('is_admin').nullable().defaultTo(false);
        table.timestamps(true, true);
        table.string("password_reset_token").nullable();
        table.timestamp("password_reset_expiration").nullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("articles");
}

