import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('replies', function (table) {
        table.increments();
        table.string('comment_id').nullable();
        table.string('responder_name').nullable();
        table.string('reply_content').nullable();
        table.boolean('status').nullable();
        table.timestamps(true, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("replies");
}

