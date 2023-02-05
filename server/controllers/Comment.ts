import { Request, Response } from 'express';
import { dbClient } from '../db';


export async function createComment(req: Request, res: Response): Promise<void> {
    const { commenterName, commentContent, articleId } = req.body;
    const result = await dbClient.comment.create({
        data: {
            commenterName,
            commentContent,
            articleId
        }
    })
    res.send({ data: result, success: true });
}

export async function deleteComment(req: Request, res: Response): Promise<void> {
    const { id } = req.body;
    const deletedUser = await dbClient.user.delete({
        where: {
            id: id,
        },
    })
    res.send({ data: deletedUser, success: true });
}

export async function updateCommentStatus(req: Request, res: Response): Promise<void> {
    const { id, status } = req.body;
    const updateComment = dbClient.comment.update(
        {
            where: {
                id: id
            },
            data: {
                approved: status
            },
        },
    )
    res.send({ data: updateComment, success: true });
}

export async function getAllComments(req: Request, res: Response): Promise<void> {
    const comments = await dbClient.comment.findMany({ include: { article: true } });
    res.send(comments);
}

export async function getCommentsByArticleId(req: Request, res: Response): Promise<void> {
    const { articleId } = req.body;
    const comments = await dbClient.comment.findMany({
        where: {
            id: articleId
        },
        include: { article: true }

    });
    res.send({ data: comments, success: true });
}


