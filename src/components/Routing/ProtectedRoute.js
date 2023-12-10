import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Authorization/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {
        // User not logged in, redirect to login page
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
