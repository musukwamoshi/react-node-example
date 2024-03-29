import React, { ReactNode, useContext, useRef } from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import { Editor } from '@tinymce/tinymce-react';
import { WithAdminNav } from '../navigation/WithAdminNav';
import WithAuth from '../authentication/WithAuth';
import { notifyOnFailure, notifyOnSuccess } from '../../utils/common/notifications';
import { timeout } from '../../utils/common/delay';
import { useNavigate } from 'react-router-dom';
import { post } from '../../utils/api';
import { AuthContext } from '../../utils/context/auth';
import { Toaster } from 'react-hot-toast';

export function AddArticle() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const editorRef: any = useRef(null);
    const renderAddArticleForm = (): ReactNode => {
        return (
            <>
                <div className="max-w-7xl mx-auto px-8 sm:px-6 md:px-8">
                    <Toaster toastOptions={{
                        duration: 5000,
                        // Default options for specific types
                        success: {
                            duration: 3000,
                        },
                    }} />
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Add Article
                    </h1>
                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <Formik
                            initialValues={{ title: '', platform: '', userId: null }}
                            validate={(values) => {
                                const errors: any = {};
                                if (!values.title) {
                                    errors.title = 'Required';
                                }

                                if (!values.platform) {
                                    errors.platform = 'Required';
                                }
                                return errors;
                            }}
                            onSubmit={async (values, { setSubmitting, resetForm }) => {
                                try {
                                    const articleRequest = { userId: user?.id, title: `${values.title}`, platform: `${values.platform}`, content: `${editorRef.current.getContent()}` };
                                    const response = await post('/article/create', articleRequest);
                                    if (response.success) {
                                        const successMessage = 'Article was submitted successfully.You can now review';
                                        notifyOnSuccess(successMessage);
                                        resetForm({ values: { userId: null, title: '', platform: '' } });
                                        setSubmitting(false);
                                        await timeout(2000);
                                        navigate('/admin/articles/review');
                                    } else {
                                        setSubmitting(false);
                                        notifyOnFailure(response.message);
                                    }
                                } catch (err) {
                                    setSubmitting(false);
                                    notifyOnFailure('There was an error submitting the article.Please try again!');
                                }
                            }}
                        >
                            {({
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                <form className="space-y-4" onSubmit={handleSubmit}>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="title">Title<Field
                                                name="title"
                                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Title"
                                                type="text"
                                                id="title"
                                            />
                                            </label>
                                            <ErrorMessage name="title" />
                                        </div>

                                        <div>
                                            <label htmlFor="platform" className="block text-sm font-medium text-gray-700">Platform
                                                <Field as="select" id="platform" name="platform" autoComplete="platform-name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                    <option>Select platform</option>
                                                    <option>Azure</option>
                                                    <option>GCP</option>
                                                    <option>AWS</option>
                                                </Field>
                                            </label>
                                            <ErrorMessage name="platform" />
                                        </div>
                                    </div>
                                    <div className="py-4">
                                        <div>
                                            <Editor
                                                apiKey="insert-your-key-here"
                                                onInit={(evt, editor) => { editorRef.current = editor; }}
                                                initialValue="<p>This is the initial content of the editor.</p>"
                                                init={{
                                                    height: 500,
                                                    menubar: true,
                                                    plugins: [
                                                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                                        'anchor', 'searchreplace', 'visualblocks', 'fullscreen',
                                                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount',
                                                    ],
                                                    toolbar: 'undo redo | blocks | ' +
                                                        'bold italic forecolor | alignleft aligncenter ' +
                                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                                        'removeformat | help',
                                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                                }}
                                            />
                                            <button
                                                type="submit"
                                                className=" mt-4 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-white sm:w-auto bg-indigo-800"
                                                disabled={isSubmitting}
                                            >
                                                <span className="font-medium"> Publish </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="ml-3 h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    />
                                                </svg>
                                            </button>

                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>

                </div>
            </>
        );
    };

    return <WithAuth><WithAdminNav>{renderAddArticleForm()}</WithAdminNav></WithAuth>;
}
