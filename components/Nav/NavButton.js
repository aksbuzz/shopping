import Link from 'next/link';

const NavButton = ({ href, isActive, children }) => {
	return (
		<button
			className={`block ${
				isActive
					? ' text-yellow-700'
					: 'hover:text-yellow-700 focus:outline-none hover:underline'
			}`}
		>
			<Link href={href} passHref>
				{children}
			</Link>
		</button>
	);
};

export default NavButton;
