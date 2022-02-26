import { getMenuType } from "../services/menuService";
import { loadMenuFromLS, saveMenuToLS } from "../utils/local_storage_functions";
const { Map, set } = require('immutable');

const menuReducer = (state = { menuObject: []}, action) => {
	switch (action.type) {
		case 'GET_MENU':
			console.log(action.payload, 'payload');
			return state = {
				...state,
				menuObject: state.menuObject.map(item => {
					if(item.id === action.payload.menuItems.id){
						return action.payload;
					}
					return item;
				})
			}
		default:
			return state;
	}
}

const tuHermana = (list) => {
	return { type: 'GET_MENU', payload: list};
}

export const getMenu = (menu) => {
	return async dispatch => {
		try {
			const menuList = loadMenuFromLS(menu);
			console.log(menuList, 'load')
			dispatch(tuHermana(menuList));
		} catch (error) {
			const menuList = await getMenuType(menu);
			saveMenuToLS(menu, menuList)
			console.log(menuList, 'save')
			dispatch(tuHermana(menuList));
		}
	}
}

export default menuReducer;