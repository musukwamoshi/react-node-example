import { DateTime } from "luxon";
import { array, date, InferType, number, string } from "yup";

import { sharedDBSchema } from "./shared";

export const appointmentSchema = sharedDBSchema
  .clone()
  .shape({
    // inherits id, createdAt, updatedAt
    clientName: string().max(100).nullable().notRequired(),
    phoneNumber: string().max(50).nullable().required(),
    email: string().max(50).nullable().required(),
    address: string().max(10).nullable().required(),
    additionalNotes: string().notRequired(),
    bookingDate: boolean().nullable().notRequired().default(false),
    bookingTime: string().notRequired(),
    propertySize: string().required(),
  })
  .required();

export type AppointmentType = InferType<typeof appointmentSchema>;