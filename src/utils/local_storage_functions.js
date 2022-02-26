const menuKey = (menuType) => {
	return `menu-type-${menuType}`;
}

const menuItemKey = (item) => {
	return `menu-item-${item}`;
}

export const loadMenuFromLS = (menuName) => {
	const foodList = JSON.parse(localStorage.getItem(menuKey(menuName)));

	if(foodList === null){
		throw new Error (`No food list with key: ${menuName} found.`)
	}

	return foodList;
}

export const saveMenuToLS = (menuName, list) => {
	if(menuName === undefined || typeof list !== 'object'){
		throw new Error ('A menu name is needed to save in localStorage');
	}

	localStorage.setItem(menuKey(menuName), JSON.stringify(list));
}

export const loadItemFromLS = (menuItem) => {
	const item = JSON.parse(localStorage.getItem(menuItemKey(menuItem)));

	if(item === null) {
		throw new Error (`No dish with key: ${item} found.`);
	}

	return item;
}

export const saveItemToLS = (menuItem, item) => {
	if(menuItem === undefined || typeof item !== 'object') {
		throw new Error ('A dish id is needed to save in localStorage');
	}

	localStorage.setItem(menuItemKey(menuItem), JSON.stringify(item));
}