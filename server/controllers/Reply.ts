import { Request, Response } from 'express';
import { Reply } from '../models/Reply';


export async function createReply(req: Request, res: Response): Promise<void> {
    await Reply.query().insert(req.body);
}

export async function updateReplyStatus(req: Request, res: Response): Promise<void> {
    const { id, status } = req.body;
    await Reply.query().findById(id).patch({ "status": status })
}