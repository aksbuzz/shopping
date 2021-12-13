import Link from 'next/link';
import Nav from '../components/Nav/Nav';
import NavItem from '../components/Nav/NavItem';
import Layout from '../components/Layout';
import NavButton from '../components/Nav/NavButton';
import NavIcon from '../components/Nav/NavIcon';

export default function Home() {
	return (
		<Layout title='Home Page'>
			<Nav>
				<NavItem>
					<NavButton isActive href='/'>
						Home
					</NavButton>
				</NavItem>
				<NavItem>
					<NavIcon href='/cart' total={0} />
				</NavItem>
			</Nav>

			<main className='space-y-2'>
				<h1 className='text-4xl pb-2 font-medium text-gray-700'>
					Welcome to our E-commerce app.
				</h1>
				<button className='px-5 py-2 bg-green-100 text-green-700 rounded-md'>
					<Link href='/products/all'>See All products</Link>
				</button>
			</main>
		</Layout>
	);
}
