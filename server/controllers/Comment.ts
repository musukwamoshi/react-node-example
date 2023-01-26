import { Request, Response } from 'express';
import { Comment } from '../models/Comment';


export async function CreateComment(req: Request, res: Response): Promise<void> {
    await Comment.query().insert(req.body);
    res.send({});
}

export async function updateCommentStatus(req: Request, res: Response): Promise<void> {
    const { id, status } = req.body;
    await Comment.query().findById(id).patch({ "status": status });
    res.send({});
}

export async function deleteCommentById(req: Request, res: Response): Promise<void> {
    const { id } = req.body;
    await Comment.query().deleteById(id);
    res.send({});
}

export async function getAllComments(req: Request, res: Response): Promise<void> {
    const comments = await Comment.query();
    res.send(comments)
}


