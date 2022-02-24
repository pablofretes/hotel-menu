import { login } from '../services/loginService';

const loginReducer = (state = null, action) => {
	switch (action.type) {
		case "LOG_IN": 
			return action.payload;
		case "LOGGED_IN":
			return action.payload;
		case "LOG_OUT":
			return null;
		default:
			return state;
	};
}

export const existingLogin = () => {
	const loggedUserJSON = window.localStorage.getItem('loggedMenuAppUser');
	if(loggedUserJSON){
		const userLog = JSON.parse(loggedUserJSON);
		return {
			type: "LOGGED_IN",
			payload: userLog,
		};
	};

	return { type: "LOG_OUT" };
}

export const removeLoggedUser = () => {
	window.localStorage.removeItem('loggedMenuAppUser');
	return { type: "LOG_OUT" };
}

export const newLogin = (credentials) => {
	return async dispatch => {
		try {
			const userLog = await login(credentials);
			window.localStorage.setItem('loggedMenuAppUser', JSON.stringify(userLog));
			dispatch({
				type: "LOG_IN",
				payload: userLog
			});
		} catch (error) {
			console.log(error);
			dispatch({
				type: "LOG_OUT"
			});
		}
	}
}

export default loginReducer;