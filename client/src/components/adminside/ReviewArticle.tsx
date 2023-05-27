import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { post } from '../../utils/api';
import { useEffectOnce } from '../../utils/hooks/useEffectOnce';
import WithAuth from '../authentication/WithAuth';
import { WithAdminNav } from '../navigation/WithAdminNav';
import { IArticle } from './ArticleListItem';
import { Toaster } from 'react-hot-toast';
import { notifyOnFailure, notifyOnSuccess } from '../../utils/common/notifications';
import ReactModal from 'react-modal';

export function ReviewArticle() {
    const [article, setArticle] = useState<IArticle | null>(null);
    // const [isApproved, setIsApproved] = useState<boolean>(false);
    const [isApproveModalOpen, setIsApproveModalOpen] = useState<boolean>(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
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
            const errorMessage = 'The article was not approved successfully.Please try again';
            console.log('Something went wrong please try again');
            notifyOnFailure(errorMessage);
        }
    };

    const handleDeleteArticle = async (): Promise<any> => {
        try {
            const successMessage = 'The article was deleted successfully';
            await post('/article/delete', { id });
            // setIsApproved(true);
            notifyOnSuccess(successMessage);
        } catch {
            const errorMessage = 'The article was not deleted successfully.Please try again';
            console.log('Something went wrong please try again');
            notifyOnFailure(errorMessage);
        }
    };

    const handleOpenApproveModal = async (): Promise<any> => {
        setIsApproveModalOpen(true);
    };


    const handleCloseApproveModal = async (): Promise<any> => {
        setIsApproveModalOpen(false);
    };


    const handleOpenDeleteModal = async (): Promise<any> => {
        setIsDeleteModalOpen(true);
    };


    const handleCloseDeleteModal = async (): Promise<any> => {
        setIsDeleteModalOpen(false);
    };


    useEffectOnce(() => {
        fetchArticle();
    });

    const renderViewArticle = () => {
        return (
            <>
                <section>
                    <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <ReactModal
                            ariaHideApp={false}
                            isOpen={isApproveModalOpen}
                            contentLabel="Approve Article?"
                            className="mx-auto max-w-screen-md px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
                        >
                            <div className="rounded-lg bg-white p-8 shadow-2xl">
                                <h2 className="text-lg font-bold">Are you sure you want to do that?</h2>

                                <p className="mt-2 text-sm text-gray-500">
                                    Doing that could have cause some issues elsewhere, are you 100% sure its
                                    OK?
                                </p>

                                <div className="mt-4 flex gap-2">
                                    <button
                                        onClick={handleApproveArticle}
                                        type="button"
                                        className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
                                    >
                                        Yes, Im sure
                                    </button>

                                    <button
                                        onClick={handleCloseApproveModal}
                                        type="button"
                                        className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
                                    >
                                        No, go back
                                    </button>
                                </div>
                            </div>
                        </ReactModal>
                        <ReactModal
                            ariaHideApp={false}
                            isOpen={isDeleteModalOpen}
                            contentLabel="Delete Article"
                            className="mx-auto max-w-screen-md px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
                        >
                            <div className="rounded-lg bg-white p-8 shadow-2xl">
                                <h2 className="text-lg font-bold">Are you sure you want to do that?</h2>

                                <p className="mt-2 text-sm text-gray-500">
                                    Doing that could have cause some issues elsewhere, are you 100% sure its
                                    OK?
                                </p>

                                <div className="mt-4 flex gap-2">
                                    <button
                                        onClick={handleDeleteArticle}
                                        type="button"
                                        className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
                                    >
                                        Yes, Im sure
                                    </button>

                                    <button
                                        onClick={handleCloseDeleteModal}
                                        type="button"
                                        className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
                                    >
                                        No, go back
                                    </button>
                                </div>
                            </div>
                        </ReactModal>
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
                            onClick={handleOpenApproveModal}
                        >
                            Approve
                        </button>
                        <button
                            className="block rounded-lg bg-indigo-600 mx-5 px-5 py-3 my-6 text-sm font-medium text-white float-right"
                            onClick={handleOpenDeleteModal}
                        >
                            Delete
                        </button>
                    </div>
                </section>

            </>
        );
    };
    return <WithAuth><WithAdminNav>{renderViewArticle()}</WithAdminNav></WithAuth>;
}
