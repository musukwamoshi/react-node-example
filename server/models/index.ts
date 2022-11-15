import db from "../db";
import { Appointment } from "./Appointment";
import {User} from "./User";

export const Models: {[key:string]: any} = {
    User,
    Appointment
};

//associate classes with database connection
Object.keys(Models).forEach(k=>Models[k].knex(db))
