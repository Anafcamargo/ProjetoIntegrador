import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from './UserContext';


const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user } = useUser();
    
    if (!user.token) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
