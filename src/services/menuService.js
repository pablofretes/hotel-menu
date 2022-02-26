import axios from "axios";

const apiKey = 'cb1322778cf64f2c87e150101ccf7616';
const url = 'https://api.spoonacular.com/food/menuItems/';

export const getFilterItem = async (search) => {
	const response = await axios.get(`${url}search?query=${search}&number=8&apiKey=${apiKey}`);
	return response.data;
}

export const getMenuType = async (type) => {
	const response = await axios.get(`${url}search?query=${type}&number=8&apiKey=${apiKey}`);
	return response.data;
}

export const getItemDetails = async (item) => {
	const response = await axios.get(`${url}${item}?apiKey=${apiKey}`);
	return response.data;
}