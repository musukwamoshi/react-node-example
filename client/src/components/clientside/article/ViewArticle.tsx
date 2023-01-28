import React from 'react';
import { WithClientNav } from '../../navigation/WithClientNav';

export function ViewArticle() {
    // const [article, setArticle] = useState('');

    // const fetchArticle = async (): Promise<any> => {
    //     const response = await post('/article', {});
    //     setArticle(`${response.data}`);
    // };

    // useEffect(() => {
    //     fetchArticle();
    // });
    const renderViewArticle = () => {
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
                    </div>
                </section>

            </>
        );
    };
    return <WithClientNav>{renderViewArticle()}</WithClientNav>;
}
