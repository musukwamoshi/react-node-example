import React, { ReactNode, useContext, useState } from 'react';
import { post } from '../../utils/api';
import { notifyOnFailure, notifyOnSuccess } from '../../utils/common/notifications';
import { AuthContext } from '../../utils/context/auth';

export interface IComment {
    id: number,
    articleId: number,
    commenterName: string,
    commentContent: string,
    article: { id: number, title: string },
    repliesCount: number
};

export interface CommentProps {
    comment: IComment
}

export function CommentListItem({ comment }: CommentProps) {
    const { user } = useContext(AuthContext);
    const [isApproveModalOpen, setIsApproveModalOpen] = useState<boolean>(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

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


    const handleApproveComment = async (): Promise<any> => {
        try {
            const successMessage = 'The comment was approved successfully';
            await post('/comment/status', { id: comment.id, status: true });
            // setIsApproved(true);
            notifyOnSuccess(successMessage);
        } catch {
            const errorMessage = 'The comment was not approved successfully.Please try again.';
            console.log('Something went wrong please try again');
            notifyOnFailure(errorMessage);
        }
    };

    const handleDeleteComment = async (): Promise<any> => {
        try {
            const successMessage = 'The comment was deleted successfully';
            await post('/comment/delete', { id: comment.id });
            // setIsApproved(true);
            notifyOnSuccess(successMessage);
        } catch {
            const errorMessage = 'The comment was not deleted successfully.Please try again.';
            console.log('Something went wrong please try again');
            notifyOnFailure(errorMessage);
        }
    };


    const renderDeleteButton = (): ReactNode => {
        return (
            <>
                <a
                    href="#"
                    className="px-5 py-3 my-6 text-sm font-medium text-indigo-600"
                    onClick={handleOpenDeleteModal}
                >
                    Delete
                </a>
            </>
        );
    };


    const renderApprovalButton = (): ReactNode => {
        return (
            <>
                <a
                    href="#"
                    className="text-indigo-600 py-3 my-6 text-sm font-medium text-white"
                    onClick={handleOpenApproveModal}
                >
                    Approve
                </a>
            </>
        );
    };


    return (
        <>
            {isDeleteModalOpen ? (
                <div className="rounded-lg bg-white p-8 shadow-2xl">
                    <h2 className="text-lg font-bold">Are you sure you want to do that?</h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Doing that could have cause some issues elsewhere, are you 100% sure its
                        OK?
                    </p>

                    <div className="mt-4 flex gap-2">
                        <button
                            onClick={handleDeleteComment}
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
            ) : null}
            {isApproveModalOpen ? (
                <div className="rounded-lg bg-white p-8 shadow-2xl">
                    <h2 className="text-lg font-bold">Are you sure you want to do that?</h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Doing that could have cause some issues elsewhere, are you 100% sure its
                        OK?
                    </p>

                    <div className="mt-4 flex gap-2">
                        <button
                            onClick={handleApproveComment}
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
            ) : null}
            <article className="rounded-xl border-2 border-gray-100 bg-white mt-3">
                <div className="flex items-start p-6">

                    <div className="ml-4">
                        <h3 className="font-medium sm:text-lg">
                            <a href="#" className="hover:underline">
                                {comment.commenterName}
                            </a>
                        </h3>

                        <p className="text-sm text-gray-700 line-clamp-2">
                            {comment.commentContent}
                        </p>

                        <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                            {/* <div className="flex items-center text-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                    />
                                </svg>
                                {comment.repliesCount > 0 ? (<p className="ml-1 text-xs">{comment.repliesCount} replies</p>) : null}
                            </div>

                            <span className="hidden sm:block" aria-hidden="true">&middot;</span> */}

                            {user?.isAdmin ? (<p className="hidden sm:block sm:text-xs sm:text-gray-500">
                                Article
                                <a href="#" className="ml-2 font-medium underline hover:text-gray-700">
                                    {comment.article.title}
                                </a>
                            </p>) : null}
                        </div>
                        <span>{user?.isAdmin ? renderApprovalButton() : null}
                            {user?.isAdmin ? renderDeleteButton() : null}</span>

                    </div>
                </div>
            </article>
        </>
    );
}
