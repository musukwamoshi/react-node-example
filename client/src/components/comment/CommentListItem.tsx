import React, { ReactNode, useContext } from 'react';
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
    const handleApproveComment = async (): Promise<any> => {
        try {
            const successMessage = 'The article was approved successfully';
            await post('/comment/status', { id: comment.id, status: true });
            // setIsApproved(true);
            notifyOnSuccess(successMessage);
        } catch {
            const errorMessage = 'The article was approved successfully';
            console.log('Something went wrong please try again');
            notifyOnFailure(errorMessage);
        }
    };

    const renderApprovalButton = (): ReactNode => {
        return (
            <>
                <a
                    href="#"
                    className="block rounded-lg bg-indigo-600 px-5 py-3 my-6 text-sm font-medium text-white"
                    onClick={handleApproveComment}
                >
                    Approve
                </a>
            </>
        );
    };


    return (
        <>
            <article className="rounded-xl border-2 border-gray-100 bg-white">
                <div className="flex items-start p-6">

                    <div className="ml-4">
                        <h3 className="font-medium sm:text-lg">
                            <a href="#" className="hover:underline">
                                {comment.article.title}
                            </a>
                        </h3>

                        <p className="text-sm text-gray-700 line-clamp-2">
                            {comment.commentContent}
                        </p>

                        <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                            <div className="flex items-center text-gray-500">
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
                                <p className="ml-1 text-xs">{comment.repliesCount} replies</p>
                            </div>

                            <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                            <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                                Posted by
                                <a href="#" className="ml-2 font-medium underline hover:text-gray-700">
                                    {comment.commenterName}
                                </a>
                            </p>
                        </div>
                        {user?.isAdmin ? renderApprovalButton() : null}
                    </div>
                </div>
            </article>
        </>
    );
}
