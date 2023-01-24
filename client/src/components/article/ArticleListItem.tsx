import React from 'react';

export interface IArticle {
    id: number,
    title: string,
    platform: string,
    content: string,
    image: string,
    datePublished: string,
};

export interface ArticleProps {
    article: IArticle
}

export function ArticleListItem({ article }: ArticleProps) {
    return (
        <>
            <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm pb-12">
                <img
                    alt="Office"
                    src={`${article.image}`}
                    className="h-56 w-full object-cover"
                />
                <div className="p-4 sm:p-6">
                    <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                        {article.datePublished}
                    </time>
                    <a href="#">
                        <h3 className="text-lg font-medium text-gray-900">
                            {article.title}
                        </h3>
                    </a>

                    <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                        {article.content}
                    </p>

                    <a
                        href="#"
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
                </div>
            </article>
        </>
    );
}
