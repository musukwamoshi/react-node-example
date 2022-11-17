import { InferType } from "yup";
import { Model } from "objection";

import { ServerModel } from "./ServerModel";
import { articleSchema } from "../../shared/schemas/article";

export type ArticleType = InferType<typeof articleSchema>;

export class Article extends ServerModel implements ArticleType {
  static tableName = "articles";
  static sharedSchema = articleSchema;

  user_id: number | undefined;
  title: string | undefined;
  content: string | undefined;
  status: string | undefined;
}
