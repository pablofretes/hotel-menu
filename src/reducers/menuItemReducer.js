import { getItemDetails } from "../services/menuService";
import { loadItemFromLS, saveItemToLS } from "../utils/local_storage_functions";

const menuItemReducer = (state = [], action) => {
	switch (action.type) {
		case "NEW_ITEM":
			return action.payload;
		default:
			return state;
	}
}

export const newMenuItem = (newItem) => {
	return async dispatch => {
		try {
			const itemData = loadItemFromLS(newItem);
			console.log(itemData, 'load')
			dispatch({
				type: "NEW_ITEM",
				payload: [itemData],
			});
		} catch (error) {
			const itemData = await getItemDetails(newItem);
			console.log(itemData, 'save')
			saveItemToLS(newItem, itemData);
			dispatch({
				type: "NEW_ITEM",
				payload: [itemData],
			});
		};
	}
}

export default menuItemReducer;