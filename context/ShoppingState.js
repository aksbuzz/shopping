import { useReducer } from 'react';
import {
	ADD_A_CATEGORY,
	REMOVE_A_CATEGORY,
	REMOVE_ALL_CATEGORIES,
	ADD_TO_CART,
	DECREMENT_ITEM,
	DELETE_ALL,
	INCREMENT_ITEM,
	REMOVE_FROM_CART,
} from './shoppingActions';
import shoppingReducer from './shoppingReducer';
import ShoppingContext from './shoppingContext';

const ShoppingState = ({ children }) => {
	const initialState = {
		categories: [],
		cart: [],
	};

	const [state, dispatch] = useReducer(shoppingReducer, initialState);

	const addCategory = async category => {
		dispatch({
			type: ADD_A_CATEGORY,
			payload: category,
		});
	};

	const removeCategory = async category => {
		dispatch({
			type: REMOVE_A_CATEGORY,
			payload: category,
		});
	};

	const removeAllCategories = async () => {
		dispatch({
			type: REMOVE_ALL_CATEGORIES,
		});
	};

	const addToCart = item => {
		dispatch({
			type: ADD_TO_CART,
			payload: item,
		});
	};

	const removeFromCart = item => {
		dispatch({
			type: REMOVE_FROM_CART,
			payload: item,
		});
	};

	const deleteAll = () => {
		dispatch({
			type: DELETE_ALL,
		});
	};

	const incrementItem = item => {
		dispatch({
			type: INCREMENT_ITEM,
			payload: item,
		});
	};

	const decrementItem = item => {
		dispatch({
			type: DECREMENT_ITEM,
			payload: item,
		});
	};

	return (
		<ShoppingContext.Provider
			value={{
				categories: state.categories,
				addCategory,
				removeCategory,
				removeAllCategories,
				cart: state.cart,
				addToCart,
				deleteAll,
				removeFromCart,
				incrementItem,
				decrementItem,
			}}
		>
			{children}
		</ShoppingContext.Provider>
	);
};

export default ShoppingState;
