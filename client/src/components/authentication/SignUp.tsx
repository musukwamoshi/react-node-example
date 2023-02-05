import { Field, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { post } from '../../utils/api';
import { Loader } from '../common/Loader';

export function SignUp() {
    const navigate = useNavigate();
    const notifyOnSuccess = () => toast.success('Sign up successful.You can now login.');
    const notifyOnFailure = (error: string) => toast.error(`${error}`);
    function timeout(delay: number) {
        return new Promise((res) => setTimeout(res, delay));
    }
    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <Toaster toastOptions={{
                        duration: 5000,
                        // Default options for specific types
                        success: {
                            duration: 3000,
                        },
                    }} />
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                        Sign up
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                        Sign up as an admin to post articles.
                    </p>
                    <Formik
                        initialValues={{ firstName: '', lastName: '', email: '', password: '', password2: '' }}
                        validate={(values) => {
                            const errors: any = {};
                            if (!values.firstName) {
                                errors.firstName = 'Required';
                            }
                            if (!values.lastName) {
                                errors.lastName = 'Required';
                            }
                            if (!values.email) {
                                errors.email = 'Required';
                            }

                            if (!values.password) {
                                errors.password = 'Required';
                            }

                            if (values.password != values.password2) {
                                errors.password = 'Passwords do not match';
                            }
                            return errors;
                        }}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                            try {
                                const signUpRequest = { firstName: `${values.firstName}`, lastName: `${values.lastName}`, email: `${values.email}`, password: `${values.password}` };
                                console.log(signUpRequest);
                                const response = await post('/users', signUpRequest);
                                console.log(response);
                                if (response.success) {
                                    console.log('response success');
                                    notifyOnSuccess();
                                    resetForm({ values: { firstName: '', lastName: '', email: '', password: '', password2: '' } });
                                    setSubmitting(false);
                                    await timeout(2000);
                                    navigate('/admin/login');
                                } else {
                                    setSubmitting(false);
                                    notifyOnFailure(response.error);
                                }
                            } catch (err) {
                                console.log(err);
                                setSubmitting(false);
                                notifyOnFailure('There was an error signing you up please try again');
                            }
                        }}
                    >
                        {({
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form onSubmit={handleSubmit} className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
                                <p className="text-lg font-medium">Sign up</p>

                                <div>
                                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>

                                    <div className="relative mt-1">
                                        <Field
                                            name="firstName"
                                            type="text"
                                            id="firstName"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                            placeholder="Enter first name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>

                                    <div className="relative mt-1">
                                        <Field
                                            name="lastName"
                                            type="text"
                                            id="lastName"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                            placeholder="Enter last name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>

                                    <div className="relative mt-1">
                                        <Field
                                            name="email"
                                            type="email"
                                            id="email"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                            placeholder="Enter email"
                                        />

                                        <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="text-sm font-medium">Password</label>

                                    <div className="relative mt-1">
                                        <Field
                                            name="password"
                                            type="password"
                                            id="password"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                            placeholder="Enter password"
                                        />

                                        <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password2" className="text-sm font-medium">Confirm Password</label>

                                    <div className="relative mt-1">
                                        <Field
                                            name="password2"
                                            type="password"
                                            id="password2"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                            placeholder="Confirm password"
                                        />

                                        <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>


                                <button
                                    type="submit"
                                    className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                                    disabled={isSubmitting}
                                >
                                    Sign up {isSubmitting ? <Loader /> : null}
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>

        </>
    );
}
