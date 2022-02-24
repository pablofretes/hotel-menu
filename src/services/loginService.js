import axios from "axios";

const url = 'http://challenge-react.alkemy.org/';

export const login = async (credentials) => {
	const response = await axios.post(url, credentials);
	return response.data;
}