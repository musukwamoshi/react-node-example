import React, { ReactNode, useState } from 'react';
import { WithClientNav } from '../../navigation/WithClientNav';
import { ArticleItem, IArticle } from './ArticleItem';
import { useEffectOnce } from '../../../utils/hooks/useEffectOnce';
import { get } from '../../../utils/api';

export function Home() {
    const [articles, setArticles] = useState<Array<IArticle>>([]);

    const fetchArticles = async (): Promise<any> => {
        const response = await get('/articles');
        console.log(response);
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
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod alias
                                doloribus impedit.
                            </h2>
                        </div>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
                            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
                            fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
                            duis.
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
