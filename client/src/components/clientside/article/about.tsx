import React, { ReactNode } from 'react';
import { WithClientNav } from '../../navigation/WithClientNav';

export function About() {
    const renderAbout = (): ReactNode => {
        return (
            <>
                <section>
                    <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                I’m Moshi Musukwa. I live in Lusaka Zambia, and I turn business problems into software solutions.
                            </h2>
                        </div>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            My gateway drug to programming was  Pascal as a part of an introduction to computing course. However I’m mostly self taught.
                        </p>
                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            I have 4 years of software development experience. During that time I have worked with different tech stacks, some of which include Flutter, MERN, .NET Core and Amplify. I’ve worked on a wide variety of problems ranging from IoT processing to Data Engineering.
                        </p>
                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            When I’m not in front of a computer writing code, I like to play chess, and dabble in a  variety of computer games. You might also find my head buried in the latest issue of my favourite japanese manga.
                        </p>
                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            I hope my articles will save you hours of troubleshooting or hours of trying to piece together different pieces of documentation.If you have a any questions feel free to email me at musukwamoshi@gmail.com.
                        </p>
                    </div>
                </section>
            </>
        );
    };
    return <WithClientNav>{renderAbout()}</WithClientNav>;
}
