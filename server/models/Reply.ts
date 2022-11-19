import { InferType } from "yup";
import { Model } from "objection";

import { ServerModel } from "./ServerModel";
import { replySchema } from "../../shared/schemas/reply";

export type ReplyType = InferType<typeof replySchema>;

export class Reply extends ServerModel implements ReplyType {
    static tableName = "replies";
    static sharedSchema = replySchema;

    commentId: number | undefined;
    responderName?: string;
    replyContent?: string;
    status?: string;
    static get relationMappings(): any {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { Comment } = require("./Comment");
        return {
            comment: {
                relation: Model.BelongsToOneRelation,
                modelClass: Comment,
                join: {
                    from: "reply.commentId",
                    to: "comment.id"
                }
            }
        };
    }
}
