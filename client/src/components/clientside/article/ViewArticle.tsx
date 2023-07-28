import { Field, Formik } from 'formik';
import React, { ReactNode, useState } from 'react';
import { useParams } from 'react-router-dom';
import { post } from '../../../utils/api';
import { notifyOnFailure, notifyOnSuccess } from '../../../utils/common/notifications';
import { useEffectOnce } from '../../../utils/hooks/useEffectOnce';
import { CustomTextArea } from '../../common/textarea';
import { WithClientNav } from '../../navigation/WithClientNav';
import { IArticle } from './ArticleItem';
import { CommentListItem, IComment } from '../../comment/CommentListItem';
import { Loader } from '../../common/Loader';

export function ViewArticle() {
    const [article, setArticle] = useState<IArticle | null>(null);
    const [isArticleLoading, setIsArticleLodaing] = useState<boolean>(false);
    const [comments, setComments] = useState<IComment[]>([]);
    const { id } = useParams();

    const fetchArticle = async (): Promise<any> => {
        setIsArticleLodaing(true);
        const response = await post('/article', { id });
        setArticle(response.data);
        setIsArticleLodaing(false);
    };

    const fetchComments = async (): Promise<any> => {
        const response = await post('/comments', { articleId: id });
        setComments(response.data);
    };

    useEffectOnce(() => {
        fetchArticle();
        fetchComments();
    });

    const renderCommentList = (): ReactNode => {
        return (
            <>
                {comments.map((comment: IComment) => {
                    return (
                        <CommentListItem key={comment.id} comment={comment} />
                    );
                })
                }
            </>
        );
    };

    const renderComments = (): ReactNode => {
        return (
            <>
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Comments
                    </h1>
                </div>
                <div>
                    {comments.length > 0 ? renderCommentList() : renderDefault()}
                </div>
            </>
        );
    };

    const renderDefault = (): ReactNode => {
        return (
            <>
                <p>There are currently no comments for this article.</p>
            </>
        );
    };

    const renderViewArticle = () => {
        return (
            <>
                <section>
                    <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
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

                        <Formik
                            initialValues={{ comment: '', name: '' }}
                            validate={(values) => {
                                const errors: any = {};
                                if (!values.comment) {
                                    errors.comment = 'Required';
                                }
                                if (!values.name) {
                                    errors.name = 'Required';
                                }

                                return errors;
                            }}
                            onSubmit={async (values, { setSubmitting, resetForm }) => {
                                const commentRequest = { commentContent: `${values.comment}`, commenterName: `${values.name}`, articleId: id };
                                try {
                                    const response = await post('/comment/add', commentRequest);
                                    if (response.success) {
                                        const successMessage = 'Comment submitted successfully.';
                                        notifyOnSuccess(successMessage);
                                        resetForm({ values: { comment: '', name: '' } });
                                        setSubmitting(false);
                                    } else {
                                        setSubmitting(false);
                                        notifyOnFailure(response.error);
                                    }
                                } catch (err) {
                                    console.log(err);
                                    setSubmitting(false);
                                    notifyOnFailure('There was an error signing you in please try again');
                                }
                            }}
                        >
                            {({
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                <form onSubmit={handleSubmit} className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-md">
                                    <div>
                                        <div className="relative mt-1">
                                            <Field
                                                name="name"
                                                type="text"
                                                id="name"
                                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative mt-1">
                                        <CustomTextArea
                                            name="comment"
                                            rows="6"
                                            placeholder="Any thoughts about the article....?" />
                                    </div>

                                    <button
                                        type="submit"
                                        className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                                        disabled={isSubmitting}
                                    >
                                        Comment
                                    </button>
                                </form>
                            )}
                        </Formik>
                        <div className="mt-6 mb-0 space-y-4">
                            {renderComments()}
                        </div>
                    </div>
                </section>

            </>
        );
    };
    return <WithClientNav>{isArticleLoading ? <Loader /> : renderViewArticle()}</WithClientNav>;
}
