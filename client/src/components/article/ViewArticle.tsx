import React from 'react';

export function ViewArticle() {
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
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod alias
                            doloribus impedit.
                        </h2>
                    </div>

                    <p className="hidden text-gray-500 md:mt-4 md:block">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
                        tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
                        fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
                        duis.
                    </p>
                    <div className="lg:py-16">
                        <article className="space-y-4 text-gray-600">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
                                hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
                                minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
                                explicabo quidem voluptatum voluptas illo accusantium ipsam quis,
                                vel mollitia? Vel provident culpa dignissimos possimus, perferendis
                                consectetur odit accusantium dolorem amet voluptates aliquid,
                                ducimus tempore incidunt quas. Veritatis molestias tempora
                                distinctio voluptates sint! Itaque quasi corrupti, sequi quo odit
                                illum impedit!
                            </p>
                        </article>
                    </div>
                    <div className="lg:py-16">
                        <article className="space-y-4 text-gray-600">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
                                hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
                                minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
                                explicabo quidem voluptatum voluptas illo accusantium ipsam quis,
                                vel mollitia? Vel provident culpa dignissimos possimus, perferendis
                                consectetur odit accusantium dolorem amet voluptates aliquid,
                                ducimus tempore incidunt quas. Veritatis molestias tempora
                                distinctio voluptates sint! Itaque quasi corrupti, sequi quo odit
                                illum impedit!
                            </p>
                        </article>
                    </div>
                    <div className="lg:py-16">
                        <article className="space-y-4 text-gray-600">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
                                hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
                                minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
                                explicabo quidem voluptatum voluptas illo accusantium ipsam quis,
                                vel mollitia? Vel provident culpa dignissimos possimus, perferendis
                                consectetur odit accusantium dolorem amet voluptates aliquid,
                                ducimus tempore incidunt quas. Veritatis molestias tempora
                                distinctio voluptates sint! Itaque quasi corrupti, sequi quo odit
                                illum impedit!
                            </p>
                        </article>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="lg">
                            <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
                                <div className="p-4 sm:p-6">
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
                            </article>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
