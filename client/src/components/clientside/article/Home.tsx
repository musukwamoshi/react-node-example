import React, { ReactNode, useState } from 'react';
import { WithClientNav } from '../../navigation/WithClientNav';
import { ArticleItem, IArticle } from './ArticleItem';
import { useEffectOnce } from '../../../utils/hooks/useEffectOnce';
import { get, post } from '../../../utils/api';

export function Home() {
    const [articles, setArticles] = useState<Array<IArticle>>([]);

    const handleChange = async (event: any) => {
        await fetchArticlesBySearchTerm(event.target.value);
    };


    const fetchArticles = async (): Promise<any> => {
        const response = await get('/articles');
        setArticles(response);
    };

    const fetchArticlesBySearchTerm = async (searchTerm: string): Promise<any> => {
        const request = { searchTerm: searchTerm };
        const response: any = await post('/articles/search', request);
        setArticles(response.data);
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
                    <div className="items-center">
                        <div className="mt-16 lg:w-120 lg:flex flex justify-center">
                            <span className="relative">
                                <input
                                    className="h-10  w-96 rounded-lg border-gray-200 pr-10 text-sm placeholder-gray-300 focus:z-10"
                                    placeholder="Search..."
                                    type="text"
                                    onChange={handleChange}
                                />

                                <button
                                    type="submit"
                                    className="absolute inset-y-0 right-0 mr-px rounded-r-lg p-2 text-gray-600"
                                >
                                    <span className="sr-only">Submit Search</span>
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </span>
                        </div>

                        {/* <a
                            href="#"
                            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
                        >
                            Sign up
                        </a> */}
                    </div>
                    <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </h2>
                        </div>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
