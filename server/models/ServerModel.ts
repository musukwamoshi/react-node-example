import { date, InferType, ObjectSchema } from "yup";
import { Model } from "objection";
import { sharedSchema } from "../../shared/schemas/shared";

export const schema = sharedSchema.clone().shape({
    createdAt: date().nullable().notRequired(),
    updatedAt: date().nullable().notRequired()
});

export type ServerData = InferType<typeof schema>;


export class ServerModel extends Model implements ServerData {
    static sharedSchema: ObjectSchema;
    id: number | undefined;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
}
