/** @format */

import { useState, useEffect, useRef } from 'react';

const NAVBAR_CLASSES = {
	container: 'container mx-auto px-4 py-2 flex justify-between items-center',
	logo: 'h-10 w-10',
	dropdownButton:
		'hover:bg-secondary hover:text-secondary-foreground px-3 py-2 rounded-md',
	dropdownContent:
		'absolute left-0 mt-2 w-48 bg-card text-card-foreground shadow-lg rounded-md hidden',
	dropdownOption:
		'block px-4 py-2 hover:bg-secondary hover:text-secondary-foreground',
};

const Navbar = () => {
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);
	const dropdownContentRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dropdownContentRef.current &&
				!dropdownContentRef.current.contains(event.target)
			) {
				setIsDropdownVisible(false);
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	const toggleDropdown = () => {
		setIsDropdownVisible(!isDropdownVisible);
	};

	return (
		<nav className='bg-primary text-primary-foreground relative'>
			<div className={NAVBAR_CLASSES.container}>
				<div className='flex items-center space-x-4'>
					<img
						src='https://placehold.co/40x40?text=Logo'
						alt='Company Logo'
						className={NAVBAR_CLASSES.logo}
					/>
					<div className='relative'>
						<button
							className={NAVBAR_CLASSES.dropdownButton}
							onClick={toggleDropdown}
						>
							Consumer
						</button>
						<div
							ref={dropdownContentRef}
							className={
								isDropdownVisible
									? NAVBAR_CLASSES.dropdownContent
									: NAVBAR_CLASSES.dropdownContent + ' hidden'
							}
						>
							<a
								href='#'
								className={NAVBAR_CLASSES.dropdownOption}
							>
								Option 1
							</a>
							<a
								href='#'
								className={NAVBAR_CLASSES.dropdownOption}
							>
								Option 2
							</a>
							<a
								href='#'
								className={NAVBAR_CLASSES.dropdownOption}
							>
								Option 3
							</a>
						</div>
					</div>
				</div>
				<div className='flex items-center space-x-4'>
					<button className={NAVBAR_CLASSES.dropdownButton}>Login</button>
					<button className={NAVBAR_CLASSES.dropdownButton}>Signup</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
