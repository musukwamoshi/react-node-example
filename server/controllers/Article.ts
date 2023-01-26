import { Request, Response } from "express";
import { Article } from "../models/Article";

export async function createArticle(req: Request, res: Response): Promise<void> {
    //think about submitting entire request body
    await Article.query().insert(req.body);
    res.send({});
}

export async function deleteArticle(req: Request, res: Response): Promise<void> {
    const { id } = req.body;
    await Article.query().deleteById(id);
    res.send({});
}

export async function updateArticleStatus(req: Request, res: Response): Promise<void> {
    const { id, status } = req.body;
    await Article.query().findById(id).patch({ status: status });
    res.send({});
}

export async function getAllArticles(req: Request, res: Response): Promise<void> {
    const articles = await Article.query();
    res.send(articles);
}