const Nav = ({ children }) => {
	return (
		<nav className='px-2 py-2 border-b'>
			<ul className='flex justify-between items-center space-x-4'>{children}</ul>
		</nav>
	);
};

export default Nav;
