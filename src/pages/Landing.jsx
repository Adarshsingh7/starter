/** @format */

const MainContent = () => {
	return (
		<div className='h-screen flex flex-col justify-center items-center'>
			<h1 className='text-4xl font-bold text-zinc-900 text-center'>
				Welcome to Our Website
			</h1>
			<p className='text-lg text-zinc-700 mt-4 text-center'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
		</div>
	);
};

const Landing = () => {
	return (
		<>
			<MainContent />
		</>
	);
};

export default Landing;
