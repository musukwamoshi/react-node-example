import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { post } from '../../utils/api';
import { useEffectOnce } from '../../utils/hooks/useEffectOnce';
import WithAuth from '../authentication/WithAuth';
import { WithAdminNav } from '../navigation/WithAdminNav';
import { IArticle } from './ArticleListItem';

export function ReviewArticle() {
    const [article, setArticle] = useState<IArticle | null>(null);
    const { id } = useParams();

    const fetchArticle = async (): Promise<any> => {
        const response = await post('/article', { id });
        setArticle(response.data);
    };

    useEffectOnce(() => {
        fetchArticle();
    });

    const renderViewArticle = () => {
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
                        <div className="lg:py-16">
                            <article className="space-y-4 text-gray-600">
                                {article?.content}
                            </article>
                        </div>
                    </div>
                </section>

            </>
        );
    };
    return <WithAuth><WithAdminNav>{renderViewArticle()}</WithAdminNav></WithAuth>;
}
