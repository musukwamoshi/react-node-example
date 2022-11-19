import { InferType } from "yup";
import { Model } from "objection";

import { ServerModel } from "./ServerModel";
import { commentSchema } from "../../shared/schemas/Comment";

export type CommentType = InferType<typeof commentSchema>;

export class Comment extends ServerModel implements CommentType {
    static tableName = "comments";
    static sharedSchema = commentSchema;

    articleId: number | undefined;
    commenterName?: string;
    commentContent?: string;
    status?: string;
    static get relationMappings(): any {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { Article } = require("./Article");
        return {
            article: {
                relation: Model.BelongsToOneRelation,
                modelClass: Article,
                join: {
                    from: "comments.articleId",
                    to: "article.id"
                }
            }
        };
    }
}
