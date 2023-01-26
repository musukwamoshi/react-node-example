import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('articles', function (table) {
        table.increments();
        table.string('user_id').nullable();
        table.string('title').nullable();
        table.string('content').nullable();
        table.string('platform').nullable;//or platform
        table.boolean('status').nullable();
        table.timestamps(true, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("articles");
}

