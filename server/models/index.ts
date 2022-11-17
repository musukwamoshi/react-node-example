import db from "../db";
import { Article } from "./Article";
import { User } from "./User";

export const Models: { [key: string]: any } = {
    User,
    Article
};

//associate classes with database connection
Object.keys(Models).forEach(k => Models[k].knex(db))
