import React from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { IAuthor } from '../common/Interfaces';

export interface IArticle {
    id: number,
    title: string,
    content: string,
    datePublished: string,
    author: IAuthor
};

export interface ArticleProps {
    article: IArticle
}

export function ArticleListItem({ article }: ArticleProps) {
    const navigate = useNavigate();
    const handleProceed = (e: any) => {
        e.preventDefault();
        navigate(generatePath('/admin/article/:id', { id: article.id.toString() }));
    };
    return (
        <>
            <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm pb-12">
                <div className="p-4 sm:p-6">
                    <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                        {article.datePublished}
                    </time>
                    <a href="#">
                        <h3 className="text-lg font-medium text-gray-900">
                            {article.title}
                        </h3>
                    </a>

                    <div className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                        <p className="no-tailwindcss-base"
                            dangerouslySetInnerHTML={{ __html: article?.content ? article?.content : '' }}
                        />
                    </div>

                    <a
                        href="#"
                        onClick={handleProceed}
                        className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                    >
                        Read more

                        <span
                            aria-hidden="true"
                            className="block transition group-hover:translate-x-0.5"
                        >
                            &rarr;
                        </span>
                    </a>

                    <div className="text-xs font-medium text-gray-500 sm:mt-0">
                        Author <a href="#" className="mt-6 underline hover:text-gray-700">{article?.author.firstName}</a>
                    </div>
                </div>
            </article>
        </>
    );
}
