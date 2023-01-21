import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export function AddArticle() {
    const editorRef: any = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
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
                <div className="py-4">
                    <div>
                        <Editor
                            apiKey="40q3t7wp28c78x0wqg1zyvs4t3psv0dna1rez169fv4z913w"
                            onInit={(evt, editor) => { editorRef.current = editor }}
                            initialValue="<p>This is the initial content of the editor.</p>"
                            init={{
                                height: 500,
                                menubar: true,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                    'anchor', 'searchreplace', 'visualblocks', 'fullscreen',
                                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                ],
                                toolbar: 'undo redo | blocks | ' +
                                    'bold italic forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                        <button type="button" onClick={log}>Log editor content</button>
                    </div>
                </div>

            </div>
        </>
    );
}
