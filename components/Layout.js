import Head from 'next/head';
const Layout = ({ children, title }) => {
	return (
		<div className='min-h-screen bg-gray-50 px-10 py-5 space-y-2'>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			{children}
		</div>
	);
};

export default Layout;