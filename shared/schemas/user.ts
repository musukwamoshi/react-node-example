import { array, boolean, date, InferType, number, string } from "yup";

import { sharedDBSchema } from "./shared";

export const userSchema = sharedDBSchema
  .clone()
  .shape({
    // inherits id, createdAt, updatedAt
    email: string().max(100).nullable().notRequired(),
    firstName: string().max(50).nullable().required(),
    lastName: string().max(50).nullable().required(),
    phoneNumber: string().max(10).nullable().required(),
    nrc: string().max(15).required(),
    isAdmin: boolean().nullable().notRequired().default(false),
    hash: string().notRequired(),
    salt: string().notRequired()
  })
  .required();

export type UserType = InferType<typeof userSchema>;


