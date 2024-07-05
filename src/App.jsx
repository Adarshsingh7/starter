/** @format */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Landing from './pages/Landing';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login, SignUp } from './pages/Login';
import Dashboard from './pages/Dashboard';
import AboutMe from './components/AboutMe';
import AppLayout from './AppLayout';
import HashLoader from 'react-spinners/HashLoader';
import Header from './Header';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <Landing />,
			},
			{
				path: '/header',
				element: <Header />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/spinner',
				element: (
					<div className='h-screen w-full flex flex-col justify-evenly items-center'>
						<div></div>
						<HashLoader color='purple' />
						<div></div>
						<div></div>
					</div>
				),
			},
			{
				path: '/signup',
				element: <SignUp />,
			},
			{
				path: '/dashboard',
				element: <Dashboard />,
				children: [
					{
						path: 'about',
						element: <AboutMe />,
					},
					{
						path: 'contact',
						element: <h1>Contact</h1>,
					},
					{
						path: 'review',
						element: <h1>Reviews</h1>,
					},
					{
						path: 'billing',
						element: <h1>Billing</h1>,
					},
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
