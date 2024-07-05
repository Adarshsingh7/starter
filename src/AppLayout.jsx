/** @format */

import { Outlet } from 'react-router-dom';
import Header from './ui/Header';
import { AuthProvider } from './context/AuthContext';

function AppLayout() {
	return (
		<AuthProvider>
			<Header />
			<Outlet />
		</AuthProvider>
	);
}

export default AppLayout;
