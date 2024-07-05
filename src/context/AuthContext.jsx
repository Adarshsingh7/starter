/** @format */

import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
	currentUser: null,
	isAuth: false,
	login: () => {},
	logout: () => {},
	getToken: () => {},
	setToken: () => {},
	isLoading: false,
});

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [isAuth, setIsAuth] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	// Function to handle login logic (replace with your backend API call)
	const login = async (credentials) => {
		setIsLoading(true);
		try {
			const response = await fetch('http://localhost:8000/api/v1/users/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(credentials),
			});

			if (response.ok) {
				const data = await response.json();
				setCurrentUser(data.data.user);
				setIsAuth(true);
				setToken(data.token); // Assuming response contains a token
				localStorage.setItem('authToken', data.token);
				alert('Login successful');
			} else {
				const data = await response.json();
				alert(data.message);
				// Handle login failure (e.g., display error message)
			}
		} catch (error) {
			console.error('Login error:', error);
			// Handle login error
		} finally {
			setIsLoading(false);
		}
	};

	// Function to get user from the token
	const getUser = async (token) => {
		try {
			const response = await fetch('http://localhost:8000/api/v1/users/me', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
			});

			if (response.ok) {
				const data = await response.json();
				setCurrentUser(data.data.data);
				setIsAuth(true);
			} else {
				console.error('Get user failed:', response.statusText);
				// Handle get user failure
			}
		} catch (error) {
			console.error('Get user error:', error);
		}
	};

	// Function to handle logout logic (replace with your backend API call)
	const logout = async () => {
		setIsLoading(true);
		try {
			localStorage.removeItem('authToken');
			setCurrentUser(null);
			setIsAuth(false);
		} catch (error) {
			console.error('Logout error:', error);
			// Handle logout error
		} finally {
			setIsLoading(false);
		}
	};

	// Function to retrieve stored token from local storage (optional)
	const getToken = () => {
		return localStorage.getItem('authToken');
	};

	// Function to save token to local storage (optional)
	const setToken = (token) => {
		localStorage.setItem('authToken', token);
	};

	// Check if user is authenticated based on token or currentUser
	useEffect(() => {
		const token = getToken();
		if (token && !currentUser) {
			getUser(token);
		} else {
			setCurrentUser(
				token ? JSON.parse(localStorage.getItem('userData')) : null
			);
			setIsAuth(!!token); // Assuming token presence indicates auth
		}
	}, []); // Run only on component mount

	const value = {
		currentUser,
		isAuth,
		isLoading,
		login,
		logout,
		getToken,
		setToken,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
