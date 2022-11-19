import { array, boolean, date, InferType, number, string } from "yup";

import { sharedDBSchema } from "./shared";

export const replySchema = sharedDBSchema
    .clone()
    .shape({
        // inherits id, createdAt, updatedAt
        commentId: number().notRequired(),
        responderName: string().max(255).nullable().required(),
        replyContent: string().nullable().required(),
        status: string().max(10).nullable().required(),
    })
    .required();

export type ReplyType = InferType<typeof replySchema>;