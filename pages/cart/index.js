import Layout from '../../components/Layout';
import Nav from '../../components/Nav/Nav';
import NavButton from '../../components/Nav/NavButton';
import NavIcon from '../../components/Nav/NavIcon';
import NavItem from '../../components/Nav/NavItem';

const Cart = () => {
	return (
		<Layout title='Cart'>
			<Nav>
				<div className='flex space-x-4'>
					<NavItem isActive>
						<NavButton href='/'>Home</NavButton>
					</NavItem>
					<NavItem>
						<NavButton href='/products/all'>All Products</NavButton>
					</NavItem>
				</div>
				<NavItem>
					<NavIcon href='/cart' total={0} />
				</NavItem>
			</Nav>
		</Layout>
	);
};

export default Cart;
