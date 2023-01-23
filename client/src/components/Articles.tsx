import React from 'react';

export function Article() {
    // const [testValue, setTestValue] = useState('Hello From dashboard!');

    // const fetchFromTest = async (): Promise<any> => {
    //     const response = await post('/test', {});
    //     setTestValue(`${response.data}`);
    // };

    // useEffect(() => {
    //     fetchFromTest();
    // });

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl font-bold sm:text-4xl">
                    Articles
                </h2>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
                    <img
                        alt="Office"
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-56 w-full object-cover"
                    />
                    <div className="p-4 sm:p-6">
                        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                            10th Oct 2022
                        </time>
                        <a href="#">
                            <h3 className="text-lg font-medium text-gray-900">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h3>
                        </a>

                        <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                            sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                        </p>

                        <a
                            href="#"
                            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                            Read more

                            <span
                                aria-hidden="true"
                                className="block transition group-hover:translate-x-0.5"
                            >
                                &rarr;
                            </span>
                        </a>
                    </div>
                </article></div>
        </>
    );
}

