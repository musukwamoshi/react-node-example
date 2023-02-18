import React, { ReactNode, useState } from 'react';
import { get } from '../../utils/api';
import { useEffectOnce } from '../../utils/hooks/useEffectOnce';
import WithAuth from '../authentication/WithAuth';
import { WithAdminNav } from '../navigation/WithAdminNav';
import { ArticleListItem, IArticle } from './ArticleListItem';

export function Articles() {
    const [articles, setArticles] = useState<Array<IArticle>>([]);

    const fetchArticles = async (): Promise<any> => {
        const response = await get('/articles', {});
        setArticles(response);
    };

    useEffectOnce(() => {
        fetchArticles();
    });

    const renderArticleList = (): ReactNode => {
        return (
            <>
                {articles.map((article: any) => {
                    return (
                        <ArticleListItem key={article.id} article={article} />
                    );
                })}
            </>
        );
    };

    const renderDefault = (): ReactNode => {
        return (
            <>
                <p>There are currently no articles posted.</p>
            </>
        );
    };


    const renderArticles = (): ReactNode => {
        return (
            <>
                <div className="max-w-7xl mx-auto px-10 sm:px-6 md:px-6">
                    <h2 className="text-3xl px-6 sm:px-6 md:px-10 font-bold sm:text-4xl">
                        Articles
                    </h2>
                </div>
                <div className="max-w-7xl mx-auto px-10 sm:px-6 md:px-10">
                    {articles.length > 0 ? renderArticleList() : renderDefault()}
                </div>
            </>
        );
    };
    return <WithAuth><WithAdminNav>{renderArticles()}</WithAdminNav></WithAuth>;
}

