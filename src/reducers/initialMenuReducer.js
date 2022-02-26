import burger from '../img/burger-min.jpg';
import chicken from '../img/chicken-min.jpg';
import meat from '../img/meat-min.jpg';
import pasta from '../img/pasta-min.jpg';
import pizza from '../img/pizza-min.jpg';
import vegetarian from '../img/vegetarian-min.jpg';

const initialMenuReducer = (state = [], action) => {
	switch (action.type) {
		case 'INITIAL_MENU':
			return action.payload;
		default:
			return state;
	}
}

export const initialMenu = () => {
	const initialM = [{
		img: pasta,
		food: 'pasta',
	},
	{ 
		img: burger,
		food: 'burger'
	},
	{
		img: pizza,
		food: 'pizza'
	},
	{
		img: vegetarian,
		food: 'vegetarian'
	},
	{
		img: meat,
		food: 'meat'
	},
	{
		img: chicken,
		food: 'chicken'
	}];
	return {
		type: 'INITIAL_MENU',
		payload: initialM,
	};
}

export default initialMenuReducer;