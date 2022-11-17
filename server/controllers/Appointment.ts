import { Request, Response } from "express";
import { Appointment } from "../models/Article";

export async function createAppointment(req: Request, res: Response): Promise<void> {
    const { name, email, phone, address, date, time, size, notes } = req.body;
    //think about submitting entire request body
    const appointment = { clientName: name, email: email, phoneNumber: phone, address: address, bookingDate: date, bookingTime: time, propertySize: size, additionalInstructions: notes };
    await Appointment.query().insert(appointment);
    res.send({});
}

export async function deleteAppointment(req: Request, res: Response): Promise<void> {
    const { id } = req.body;
    await Appointment.query().deleteById(id);
    res.send({});
}

export async function updateAppointment(req: Request, res: Response): Promise<void> {
    const { id, status } = req.body;
    await Appointment.query().findById(id).patch({ status: status });
    res.send({});
}

export async function getAllAppointments(req: Request, res: Response): Promise<void> {
    const appointments = await Appointment.query();
    res.send(appointments);
}