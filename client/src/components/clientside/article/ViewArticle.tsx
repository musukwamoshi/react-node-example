import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { post } from '../../../utils/api';
import { useEffectOnce } from '../../../utils/hooks/useEffectOnce';
import { WithClientNav } from '../../navigation/WithClientNav';
import { IArticle } from './ArticleItem';

export function ViewArticle() {
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
                                {article?.title}
                            </h2>
                        </div>
                        <div>
                            <div className="no-tailwindcss-base"
                                dangerouslySetInnerHTML={{ __html: article?.content ? article?.content : '' }}
                            />
                        </div>
                    </div>
                </section>

            </>
        );
    };
    return <WithClientNav>{renderViewArticle()}</WithClientNav>;
}
