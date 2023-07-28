import React, { ReactNode } from 'react';
import { WithClientNav } from '../../navigation/WithClientNav';

export function About() {
    const renderAbout = (): ReactNode => {
        return (
            <>
                <section>
                    <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 sm:py-24 lg:px-8 justify-center">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold sm:text-4xl py-6">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga
                            </h2>
                        </div>

                        <p className="text-gray-500 md:mt-4 md:block">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                        </p>
                        <p className="text-gray-500 md:mt-4 md:block">
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
                        </p>
                        <p className="text-gray-500 md:mt-4 md:block">
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        </p>
                        <p className="text-gray-500 md:mt-4 md:block">
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </section>
            </>
        );
    };
    return <WithClientNav>{renderAbout()}</WithClientNav>;
}
