/** @format */

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
	const navigate = useNavigate();
	const { isAuth, logout } = useAuth();

	return (
		<nav className='flex justify-between items-center bg-zinc-900 text-white p-4'>
			<span className='text-lg font-bold'>Brand</span>
			{!isAuth ? (
				<button
					className='bg-blue-500 text-white px-4 py-2 rounded-lg'
					onClick={() => navigate('/login')}
				>
					Login
				</button>
			) : (
				<button
					className='bg-blue-500 text-white px-4 py-2 rounded-lg'
					onClick={() => {
						logout();
						navigate('/login');
					}}
				>
					logout
				</button>
			)}
		</nav>
	);
};

export default Navbar;
