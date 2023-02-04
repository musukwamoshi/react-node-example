import { Request, Response } from 'express';
import { dbClient } from '../db';


export async function createReply(req: Request, res: Response): Promise<void> {
    const { responderName, replyContentContent, commentId } = req.body;
    const result = await dbClient.reply.create({
        data: {
            responderName,
            replyContentContent,
            commentId
        }
    })
    res.send({ result });
}

export async function deleteReply(req: Request, res: Response): Promise<void> {
    const { id } = req.body;
    const deletedReply = await dbClient.reply.delete({
        where: {
            id: id,
        },
    })
    res.send({ data: deletedReply, success: true });
}

export async function updateCommentStatus(req: Request, res: Response): Promise<void> {
    const { id, status } = req.body;
    const updatedReply = dbClient.reply.update(
        {
            where: {
                id: id
            },
            data: {
                approved: status
            },
        },
    )
    res.send({ data: updatedReply, success: true });
}

export async function getAllReplies(req: Request, res: Response): Promise<void> {
    const replies = await dbClient.reply.findMany({ include: { comment: true } });
    res.send(replies);
}

export async function getRepliesByCommentId(req: Request, res: Response): Promise<void> {
    const { commentId } = req.body;
    const replies = await dbClient.reply.findMany({
        where: {
            id: commentId
        },
        include: { comment: true }

    });
    res.send(replies);
}
