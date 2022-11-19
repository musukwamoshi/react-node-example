import { array, boolean, date, InferType, number, string } from "yup";

import { sharedDBSchema } from "./shared";

export const commentSchema = sharedDBSchema
    .clone()
    .shape({
        // inherits id, createdAt, updatedAt
        article_id: number().notRequired(),
        commenterName: string().max(255).nullable().required(),
        commentContent: string().nullable().required(),
        status: string().max(10).nullable().required(),
    })
    .required();

export type CommentType = InferType<typeof commentSchema>;