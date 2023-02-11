import { Request, Response } from "express";
import { toNumber } from "lodash";
import { dbClient } from "../db";

export async function createArticle(req: Request, res: Response): Promise<void> {
    const { title, content, userId } = req.body;
    try {
        const result = await dbClient.article.create({
            data: {
                title,
                content,
                authorId: userId,
                approved: false
            }
        })
        res.send({ data: result, success: true });
    } catch (err: any) {
        res.send({ message: "Something went wrong please try again!", success: false });
    }
}

export async function deleteArticle(req: Request, res: Response): Promise<void> {
    const { id } = req.body;
    const deletedUser = await dbClient.article.delete({
        where: {
            id: id,
        },
    })
    res.send({ data: deletedUser, success: true });
}

export async function updateArticleStatus(req: Request, res: Response): Promise<void> {
    const { id, status } = req.body;
    const updateArticle = dbClient.article.update(
        {
            where: {
                id: id
            },
            data: {
                approved: status
            },
        },
    )
    res.send({ data: updateArticle, success: true });
}

export async function getAllArticles(req: Request, res: Response): Promise<void> {
    const articles = await dbClient.article.findMany({ include: { author: true } });
    res.send(articles);
}

export async function getArticleById(req: Request, res: Response): Promise<void> {
    const { id } = req.body;
    const article = await dbClient.article.findUnique({
        where: {
            id: toNumber(id)
        },
        include: { comments: true },

    });
    res.send({ data: article, success: true });
}