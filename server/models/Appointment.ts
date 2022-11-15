import { InferType } from "yup";
import { Model } from "objection";

import { ServerModel } from "./ServerModel";
import { appointmentSchema} from "../../shared/schemas/appointment";

export type AppointmentType = InferType<typeof appointmentSchema>;

export class Appointment extends ServerModel implements AppointmentType {
  static tableName = "appointments";
  static sharedSchema = appointmentSchema;

  clientName: string | undefined;
  phoneNumber: string | undefined;
  email: string | undefined;
  address: string | undefined;
  additionalNotes: string | undefined;
  date: string | undefined;
  time: string | undefined;
  propetySize: string | undefined;
  status:boolean | undefined;
}
