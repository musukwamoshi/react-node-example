import React from 'react';
import { Link } from 'react-router-dom'

export const NavBar = () => (
	<nav className="mt-5 flex-1 px-2 space-y-1">
		<a
			href="/"
			className="bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
		>
			<svg
				className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
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

		<Link to="/article/add" className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">

			<svg
				className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
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
		</Link>

		<Link to="/comments"
			className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
		>
			<svg
				className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
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
		</Link>

	</nav>
)
