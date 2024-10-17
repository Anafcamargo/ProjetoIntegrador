import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" />; // Redireciona para login se não estiver autenticado
    }

    return <>{children}</>; // Renderiza o conteúdo protegido
};

export default ProtectedRoute;
