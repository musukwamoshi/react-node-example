import { config } from "dotenv";

config({ path: `${__dirname}/../.env` });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL not specified. Check your .env file.");
}

// this is what knex cli uses when running migrations
module.exports = {
  client: "pg",
  connection: process.env.DATABASE_URL
};