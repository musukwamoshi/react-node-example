// import { config } from "dotenv";
// import { knexSnakeCaseMappers } from "objection";
// import knex from "knex";

// config({ path: `${__dirname}/../.env` })

// const db = knex({
//     debug: process.env.KNEX_DEBUG === "true",
//     client: "pg",
//     connection: process.env.DATABASE_URL,
//     ...knexSnakeCaseMappers()
// });

// export default db;
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export { prisma as dbClient };
