import React, { ReactNode } from 'react';
import WithAuth from '../authentication/WithAuth';
import { WithAdminNav } from '../navigation/WithAdminNav';
import { ArticleListItem, IArticle } from './ArticleListItem';

export function Articles() {
    // const { pathname } = useLocation();
    // const [articles, setArticles] = useState(null);
    // const fetchArticles = async (): Promise<any> => {
    //     const response = await get('/article', {});
    //     setArticles(`${response.data}`);
    // };

    // useEffect(() => {
    //     // fetchArticles();
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

    const renderArticles = (): ReactNode => {
        return (
            <>
                <div className="max-w-7xl mx-auto px-10 sm:px-6 md:px-6">
                    <h2 className="text-3xl px-6 sm:px-6 md:px-10 font-bold sm:text-4xl">
                        Articles
                    </h2>
                </div>
                <div className="max-w-7xl mx-auto px-10 sm:px-6 md:px-10">
                    {articles.map((article: IArticle) => {
                        return (
                            <ArticleListItem key={article.id} article={article} />
                        );
                    })
                    }
                </div>
            </>
        );
    };

    return <WithAuth><WithAdminNav>{renderArticles()}</WithAdminNav></WithAuth>;
}

