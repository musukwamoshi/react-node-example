import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('comments', function (table) {
        table.increments();
        table.string('article_id').nullable();
        table.string('commenter_name').nullable();
        table.string('comment_content').nullable();
        table.boolean('status').nullable();
        table.timestamps(true, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("comments");
}

