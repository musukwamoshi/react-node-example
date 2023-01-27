import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Articles } from '../article/Articles';
import { Comments } from '../comment/Comments';
import { AddArticle } from '../article/AddArticle';
import { ViewArticle } from '../article/ViewArticle';
import { Home } from '../clientside/article/Home';
import { Login } from '../authentication/Login';
import { SignUp } from '../authentication/SignUp';

function AppRoutes() {
    return (

        <div>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/articles/review" element={<Articles />} />
                <Route path="/admin/article/add" element={<AddArticle />} />
                <Route path="/admin/comments/review" element={<Comments />} />
                <Route path="/" element={<Home />} />
                <Route path="/article" element={<ViewArticle />} />
            </Routes>
        </div>
    );
}

export default AppRoutes;
