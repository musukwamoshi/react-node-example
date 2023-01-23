import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export function AddArticle() {
    const editorRef: any = useRef(null);
    // const log = () => {
    //     if (editorRef.current) {
    //         console.log(editorRef.current.getContent());
    //     }
    // };
    // const [testValue, setTestValue] = useState("Hello From dashboard!");

    // const fetchFromTest = async (): Promise<any> => {

    //     const response = await post('/test', {});
    //     setTestValue(`${response.data}`)

    // }

    // useEffect(() => {
    //     fetchFromTest();
    // })

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                    Add Article
                </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form action="" className="space-y-4">

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="title">Title<input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Title"
                                    type="text"
                                    id="title"
                                />
                                </label>
                            </div>

                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Category
                                    <select id="country" name="country" autoComplete="country-name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <option>Azure</option>
                                        <option>GCP</option>
                                        <option>AWS</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="py-4">
                    <div>
                        {/* @ts-ignore */}
                        <Editor
                            apiKey="40q3t7wp28c78x0wqg1zyvs4t3psv0dna1rez169fv4z913w"
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

            </div>
        </>
    );
}
