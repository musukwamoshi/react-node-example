import React from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

interface IAuthor {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}

export interface IArticle {
    id: number,
    title: string,
    platform: string,
    content: string,
    createdAt: string,
    author: IAuthor
};

export interface ArticleProps {
    article: IArticle
}

export function ArticleItem({ article }: ArticleProps) {
    const navigate = useNavigate();
    const handleProceed = (e: any) => {
        e.preventDefault();
        navigate(generatePath('/article/:id', { id: article.id.toString() }));
    };
    const dateFormatter = (date: string) => {
        const d = new Date(date);
        return d.toDateString();
    };
    return (
        <>
            <article className="ring-indigo-50">
                <div className="flex items-start">
                    <div
                        className="hidden sm:grid sm:h-20 sm:w-50 sm:shrink-0 sm:place-content-center sm:border-indigo-500"
                        aria-hidden="true"
                    >
                        <div className="flex items-center gap-1">
                            <p className="text-xs font-medium">
                                <time dateTime="2022-10-10" className="text-xs text-gray-500">
                                    {dateFormatter(article.createdAt)}
                                </time></p>
                        </div>
                    </div>

                    <div className="sm:ml-20 mt-3">

                        <h3 className="mt-4 text-lg font-medium sm:text-xl">
                            <a href="" className="hover:underline"> {article.title} </a>
                        </h3>

                        <div className="mt-1 text-sm text-gray-700 line-clamp-3">
                            <div className="no-tailwindcss-base"
                                dangerouslySetInnerHTML={{ __html: article?.content ? article?.content : '' }}
                            />
                        </div>

                        <div className="mt-4 sm:flex sm:items-center content-evenly sm:gap-2">
                            <div className="flex items-center text-gray-500">
                                <a
                                    onClick={handleProceed}
                                    className="group inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                                >
                                    Read more

                                    <span
                                        aria-hidden="true"
                                        className="block transition group-hover:translate-x-0.5"
                                    >
                                        &rarr;
                                    </span>
                                </a>
                            </div>

                            <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                                Author <a href="" className="underline hover:text-gray-700">{article?.author.firstName}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
