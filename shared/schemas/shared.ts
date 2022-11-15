import {
  array,
  date,
  InferType,
  mixed,
  MixedSchema,
  number,
  object,
  ObjectSchema
} from "yup";

export const toMany = (
  schema: ObjectSchema,
  limit: number = 15
): MixedSchema<any> =>
  mixed()
    .oneOf([
      array()
        .of(schema.clone())
        .nullable()
        .notRequired()
        .meta({ expand: true, limit }),
      object({
        add: array()
          .of(number())
          .notRequired(),
        remove: array()
          .of(number())
          .notRequired()
      })
    ])
    .nullable()
    .notRequired()
    .meta({ toMany: true });

export const sharedSchema = object({
  // notRequired because not set until saved
  id: number().notRequired()
}).required();

export const sharedDBSchema = sharedSchema
  .clone()
  .shape({
    createdAt: date().notRequired(),
    updatedAt: date().notRequired()
  })
  .required();

export type Shared = InferType<typeof sharedSchema>;
export type SharedDBModel = InferType<typeof sharedDBSchema>;
