import Layout from '../../../components/Layout';
import Nav from '../../../components/Nav/Nav';
import NavButton from '../../../components/Nav/NavButton';
import NavIcon from '../../../components/Nav/NavIcon';
import NavItem from '../../../components/Nav/NavItem';
import { useRouter } from 'next/router';

const AllProductsByCategory = () => {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<Layout title={slug[0].toUpperCase() + slug.slice(1)}>
			<Nav>
				<div className='flex space-x-4'>
					<NavItem>
						<NavButton href='/'>Home</NavButton>
					</NavItem>
					<NavItem>
						<NavButton isActive href='/products/all'>
							All Products
						</NavButton>
					</NavItem>
				</div>
				<NavItem>
					<NavIcon href='/cart' total={0} />
				</NavItem>
			</Nav>
		</Layout>
	);
};

export default AllProductsByCategory;
