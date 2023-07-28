import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { post } from '../../utils/api';

export const AdminNavBar = () => {
	const navigate = useNavigate();
	const handleLogOut = async (e: any): Promise<any> => {
		const response = await post('/logout', {});
		e.preventDefault();
		if (response.success) {
			navigate('/admin/login');
		} else {
			console.log(response);
		}
	};

	return (
		<>
			<nav className="mt-5 flex-1 px-2 space-y-1">
				<h1 className="text-3xl font-semibold text-white mb-5">
					briefdocs
				</h1>
				<a
					href="/admin/articles/review"
					className="bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
				>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
					</svg>

					Articles
				</a>

				<Link to="/admin/article/add" className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
					</svg>

					Add Article
				</Link>

				<Link to="/admin/comments/review"
					className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
				>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 flex-shrink-0 w-6 h-6 text-indigo-300" aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
					</svg>

					Comments
				</Link>

				<Link to="#" onClick={handleLogOut}
					className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
				>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
					</svg>
					Log Out
				</Link>

			</nav>
		</>
	);
};
