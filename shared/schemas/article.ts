import { array, boolean, date, InferType, number, string } from "yup";

import { sharedDBSchema } from "./shared";

export const articleSchema = sharedDBSchema
  .clone()
  .shape({
    // inherits id, createdAt, updatedAt
    userId: number().notRequired(),
    title: string().max(255).nullable().notRequired(),
    content: string().nullable().notRequired(),
    status: string().max(10).nullable().notRequired(),
  })
  .required();

export type ArticleType = InferType<typeof articleSchema>;