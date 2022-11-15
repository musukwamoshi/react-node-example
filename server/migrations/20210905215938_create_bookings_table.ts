import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('bookings', function(table) {
    table.increments();
    table.string('client_name').nullable();
    table.string('phone_number').nullable();
    table.string('email').nullable();
    table.string('address').nullable();
    table.string('booking_date').nullable();
    table.string('booking_time').nullable();
    table.string('additional_instructions');
    table.string('property_size');
    table.boolean('status').nullable().defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('bookings');
}

