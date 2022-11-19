import { InferType } from "yup";
import { Model } from "objection";

import { ServerModel } from "./ServerModel";
import { articleSchema } from "../../shared/schemas/article";

export type ArticleType = InferType<typeof articleSchema>;

export class Article extends ServerModel implements ArticleType {
  static tableName = "articles";
  static sharedSchema = articleSchema;

  userId?: number;
  title!: string;
  content!: string;
  status!: string;
  static get relationMappings(): any {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { User } = require("./User");
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "articles.userId",
          to: "users.id"
        }
      }
    };
  }
}
