import { Request, Response } from "express";

export async function testEndpoint(req: Request, res: Response): Promise<Object> {
    return res.send({ "data": "Hello from API!" });
}