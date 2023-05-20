import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { post } from '../../utils/api';
import { useEffectOnce } from '../../utils/hooks/useEffectOnce';
import WithAuth from '../authentication/WithAuth';
import { WithAdminNav } from '../navigation/WithAdminNav';
import { IArticle } from './ArticleListItem';
import { Toaster } from 'react-hot-toast';
import { notifyOnFailure, notifyOnSuccess } from '../../utils/common/notifications';

export function ReviewArticle() {
    const [article, setArticle] = useState<IArticle | null>(null);
    // const [isApproved, setIsApproved] = useState<boolean>(false);
    const { id } = useParams();

    const fetchArticle = async (): Promise<any> => {
        const response = await post('/article', { id });
        setArticle(response.data);
    };


    const handleApproveArticle = async (): Promise<any> => {
        try {
            const successMessage = 'The article was approved successfully';
            await post('/article/status', { id, status: true });
            // setIsApproved(true);
            notifyOnSuccess(successMessage);
        } catch {
            const errorMessage = 'The article was approved successfully';
            console.log('Something went wrong please try again');
            notifyOnFailure(errorMessage);
        }
    };

    useEffectOnce(() => {
        fetchArticle();
    });

    const renderViewArticle = () => {
        return (
            <>
                <section>
                    <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <Toaster toastOptions={{
                            duration: 5000,
                            // Default options for specific types
                            success: {
                                duration: 3000,
                            },
                        }} />
                        <div className="max-w-3xl py-6">
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                {article?.title}
                            </h2>
                        </div>
                        <div>
                            <div className="no-tailwindcss-base"
                                dangerouslySetInnerHTML={{ __html: article?.content ? article?.content : '' }}
                            />
                        </div>
                        <button
                            className="block rounded-lg bg-indigo-600 px-5 py-3 my-6 text-sm font-medium text-white float-right"
                            onClick={handleApproveArticle}
                        >
                            Approve
                        </button>
                    </div>
                </section>

            </>
        );
    };
    return <WithAuth><WithAdminNav>{renderViewArticle()}</WithAdminNav></WithAuth>;
}
