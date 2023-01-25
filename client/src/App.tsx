import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Articles } from './components/article/Articles';
import { NavBar } from './components/navigation/NavBar';
import { Comments } from './components/comment/Comments';
import { AddArticle } from './components/article/AddArticle';
import { ViewArticle } from './components/article/ViewArticle';
import { Home } from './components/clientside/article/Home';

function App() {
	return (
		<div className="App">
			<div className="h-screen flex overflow-hidden bg-gray-100">
				<div
					className="fixed inset-0 flex z-40 md:hidden"
					role="dialog"
					aria-modal="true"
				>
					<div
						className="fixed inset-0 bg-gray-600 bg-opacity-75"
						aria-hidden="true"
					>
						{ }
					</div>
					<div className="relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700">
						<div className="absolute top-0 right-0 -mr-12 pt-2">
							<button
								type="button"
								className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							>
								<span className="sr-only">Close sidebar</span>
								<svg
									className="h-6 w-6 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>

						<div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
							<div className="flex-shrink-0 flex items-center px-4">
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
									alt="Workflow"
								/>
							</div>
							<nav className="mt-5 px-2 space-y-1">
								<a
									href="#"
									className="bg-indigo-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
								>
									<svg
										className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
										/>
									</svg>
									Articles
								</a>

								<a
									href="#"
									className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md"
								>
									<svg
										className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
									Add Article
								</a>

								<a
									href="#"
									className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md"
								>
									<svg
										className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
										/>
									</svg>
									Comments
								</a>
							</nav>
						</div>
					</div>
				</div>
				<div className="hidden bg-indigo-700 md:flex md:flex-shrink-0">
					<div className="flex flex-col w-64">
						<div className="flex-1 flex flex-col min-h-0">
							<div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
								<NavBar />
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-0 flex-1 overflow-hidden">
					<main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
						<div className="py-6">
							<Routes>
								<Route path="/admin/articles/review" element={<Articles />} />
								<Route path="/admin/article/add" element={<AddArticle />} />
								<Route path="/admin/comments/review" element={<Comments />} />
								<Route path="/" element={<Home />} />
								<Route path="/article" element={<ViewArticle />} />
							</Routes>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
