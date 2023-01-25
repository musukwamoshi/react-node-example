import React from 'react';
import { ArticleItem, IArticle } from './ArticleItem';

export function Home() {
    // const [testValue, setTestValue] = useState('Hello From dashboard!');

    // const fetchFromTest = async (): Promise<any> => {
    //     const response = await post('/test', {});
    //     setTestValue(`${response.data}`);
    // };

    // useEffect(() => {
    //     fetchFromTest();
    // });

    const articles = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            platform: 'Azure',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolores ed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
            image:
                'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            datePublished: '10th Oct 2022',
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            platform: 'AWS',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolores ed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
            image:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            datePublished: '10th Oct 2022',
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            platform: 'GCP',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolores ed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
            image:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            datePublished: '10th Oct 2022',
        },
    ];


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
                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16">
                        {articles.map((article: IArticle) => {
                            return (
                                <ArticleItem key={article.id} article={article} />
                            );
                        })
                        }
                    </div>
                </div>
            </section>

        </>
    );
}
