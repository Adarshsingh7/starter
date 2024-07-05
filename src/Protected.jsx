/** @format */

import { useNavigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const { isAuth } = useAuth();
	useEffect(() => {
		if (!isAuth) {
			navigate('/login');
		}
	}, [isAuth, navigate]);
	return <>{children}</>;
};

export default ProtectedRoute;
