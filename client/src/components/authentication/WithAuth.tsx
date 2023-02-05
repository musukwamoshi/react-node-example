import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../utils/context/auth';


const WithAuth = ({ children }: any) => {
    const { user } = useContext(AuthContext);
    if (user?.isAdmin) {
        return children;
    }
    return <Navigate to={'/admin/login'} replace />;
};

export default WithAuth;
