import React, { ReactNode } from 'react';
import { WithClientNav } from '../../navigation/WithClientNav';

export function Use() {
    const renderUse = (): ReactNode => {
        return (
            <>
                <section>
                    <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                Software I use, and other tools  I would recommend.
                            </h2>
                        </div>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            Here are the tools I use to build software.
                        </p>
                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16">
                            <article className="ring-indigo-50">
                                {/* <div className="flex items-start">
                                    <div
                                        className="hidden sm:grid sm:h-20 sm:w-50 sm:shrink-0 sm:place-content-center sm:border-indigo-500"
                                        aria-hidden="true"
                                    >
                                        <div className="flex items-center gap-1">
                                            <p className="text-sm font-medium">
                                                Workstation
                                            </p>
                                        </div>
                                    </div>

                                    <div className="sm:ml-32 mt-3">

                                        <h3 className="mt-4 text-md font-medium sm:text-xl">
                                            Lenovo Legion 5 2021
                                        </h3>

                                        <div className="mt-1 text-sm text-gray-700 line-clamp-3">
                                            <p>I was using a Lenovo Ideapad 310 prior to this and the difference is night and day. It handles pretty much any work load I throw at it.</p>
                                        </div>

                                        <h3 className="mt-4 text-md font-medium sm:text-xl">
                                            LG UltraGear QHD 32-Inch IPS Monitor 32GP750-B
                                        </h3>

                                        <div className="mt-1 text-sm text-gray-700 line-clamp-3">
                                            <p>This display goes well with the Lenovo Legion 5.Clear and crisp with good brightness.</p>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="flex items-start">
                                    <div
                                        className="hidden sm:grid sm:h-20 sm:w-50 sm:shrink-0 sm:place-content-center sm:border-indigo-500"
                                        aria-hidden="true"
                                    >
                                        <div className="flex items-center gap-1">
                                            <p className="text-sm font-medium">
                                                Development Tools
                                            </p>
                                        </div>
                                    </div>

                                    <div className="sm:ml-20 mt-3">

                                        <h3 className="mt-4 text-md font-medium sm:text-xl">
                                            Microsoft Visual Studio
                                        </h3>

                                        <div className="mt-1 text-sm text-gray-700 line-clamp-3">
                                            <p>Anytime I need to work on a C# .NET Core project, this is my go to because any dependencies are either preinstalled or can easily be added with via nuget packages.</p>
                                        </div>
                                        <h3 className="mt-4 text-md font-medium sm:text-xl">
                                            Visual Studio Code
                                        </h3>

                                        <div className="mt-1 text-sm text-gray-700 line-clamp-3">
                                            <p>This is my go to for typescript, flutter and other no C# projects. It’s customizable via extensions and has a wide range of color themes to brighten up your IDE.</p>
                                        </div>
                                        <h3 className="mt-4 text-md font-medium sm:text-xl">
                                            Android Studio
                                        </h3>

                                        <div className="mt-1 text-sm text-gray-700 line-clamp-3">
                                            <p>If you do any kind of mobile development then there is no getting away from this one. I sometimes use this for flutter development when I’m not using visual studio code.</p>
                                        </div>
                                        <h3 className="mt-4 text-md font-medium sm:text-xl">
                                            SQL Server Management Studio
                                        </h3>
                                        <div className="mt-1 text-sm text-gray-700 line-clamp-3">
                                            <p>I use this tool if I’m working with Microsoft SQL Server.You can use it to run queries against your database.</p>
                                        </div>
                                        <h3 className="mt-4 text-md font-medium sm:text-xl">
                                            DBeaver
                                        </h3>
                                        <div className="mt-1 text-sm text-gray-700 line-clamp-3">
                                            <p>I use this tool if I’m working with other databases like PostgreSQL or MySQL.</p>
                                        </div>
                                        <h3 className="mt-4 text-md font-medium sm:text-xl">
                                            Runjs
                                        </h3>
                                        <div className="mt-1 text-sm text-gray-700 line-clamp-3">
                                            <p>I use this tool to quickly prototype javascript solutions in my local environment.</p>
                                        </div>
                                        <h3 className="mt-4 text-md font-medium sm:text-xl">
                                            Postman
                                        </h3>
                                        <div className="mt-1 text-sm text-gray-700 line-clamp-3">
                                            <p>Allows me to quickly test api endpoints that I am working on.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div
                                        className="hidden sm:grid sm:h-20 sm:w-50 sm:shrink-0 sm:place-content-center sm:border-indigo-500"
                                        aria-hidden="true"
                                    >
                                        <div className="flex items-center gap-1">
                                            <p className="text-sm font-medium">
                                                Productivity
                                            </p>
                                        </div>
                                    </div>

                                    <div className="sm:ml-32 mt-3">

                                        <h3 className="mt-4 text-md font-medium sm:text-xl">
                                            Trello
                                        </h3>

                                        <div className="mt-1 text-sm text-gray-700 line-clamp-3">
                                            <p>Outside of work I use Trello to keep track of anything I’m working on. It’s simple and straightforward to use and has a free tier. It allows you to add multiple workspaces for your different projects.</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </>
        );
    };
    return <WithClientNav>{renderUse()}</WithClientNav>;
}
