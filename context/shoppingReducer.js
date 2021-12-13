import {
	ADD_A_CATEGORY,
	REMOVE_A_CATEGORY,
	REMOVE_ALL_CATEGORIES,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	DECREMENT_ITEM,
	INCREMENT_ITEM,
	DELETE_ALL,
} from './shoppingActions';
const shoppingReducer = (state, action) => {
	switch (action.type) {
		case ADD_A_CATEGORY:
			return {
				...state,
				categories: [...state.categories, action.payload],
			};
		case REMOVE_A_CATEGORY:
			return {
				...state,
				categories: state.categories.filter(
					category => category !== action.payload
				),
			};
		case REMOVE_ALL_CATEGORIES:
			return {
				...state,
				categories: [],
			};
		case ADD_TO_CART:
			return {
				...state,
				cart: [...state.cart, action.payload]
			};
		case REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter(item => item.id !== action.payload),
			};
		case DECREMENT_ITEM:
			return {
				...state,
				cart: state.cart.map(item =>
					item.id === action.payload
						? { ...item, amount: item.amount > 1 ? item.amount - 1 : 1 }
						: item
				),
			};
		case INCREMENT_ITEM:
			return {
				...state,
				cart: state.cart.map(item =>
					item.id === action.payload
						? { ...item, amount: item.amount + 1 }
						: item
				),
			};
		case DELETE_ALL:
			return {
				...state,
				cart: [],
			};
		default:
			return state;
	}
};

export default shoppingReducer;
