import React, { ReactNode, useState } from 'react';
import { WithClientNav } from '../../navigation/WithClientNav';
import { ArticleItem, IArticle } from './ArticleItem';
import { useEffectOnce } from '../../../utils/hooks/useEffectOnce';
import { get } from '../../../utils/api';

export function Home() {
    const [articles, setArticles] = useState<Array<IArticle>>([]);

    const fetchArticles = async (): Promise<any> => {
        const response = await get('/articles');
        setArticles(response);
    };

    useEffectOnce(() => {
        fetchArticles();
    });
    const renderDefault = (): ReactNode => {
        return (
            <>
                <p>There are currently no articles posted.</p>
            </>
        );
    };

    const renderArticleList = (): ReactNode => {
        return (
            <>
                {articles.map((article: IArticle) => {
                    return (
                        <ArticleItem key={article.id} article={article} />
                    );
                })
                }
            </>
        );
    };
    const renderArticles = (): ReactNode => {
        return (
            <>
                <section>
                    <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                I write articles about application development, devops and cloud computing.
                            </h2>
                        </div>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            This a collection of articles based on my experiences in application development in chronological order.I try to keep them as short as possible.
                        </p>
                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16">
                            {articles.length > 0 ? renderArticleList() : renderDefault()}
                        </div>
                    </div>
                </section>

            </>
        );
    };
    return <WithClientNav>{renderArticles()}</WithClientNav>;
}
