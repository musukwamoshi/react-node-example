import { array, boolean, date, InferType, number, string } from "yup";

import { sharedDBSchema } from "./shared";

export const commentSchema = sharedDBSchema
    .clone()
    .shape({
        // inherits id, createdAt, updatedAt
        articleId: number().notRequired(),
        commenterName: string().max(255).nullable().notRequired(),
        commentContent: string().nullable().notRequired(),
        status: string().max(10).nullable().notRequired(),
    })
    .required();

export type CommentType = InferType<typeof commentSchema>;