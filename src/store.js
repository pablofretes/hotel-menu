import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducer from './reducers/loginReducer';
import menuReducer from './reducers/menuReducer';
import initialMenuReducer from './reducers/initialMenuReducer';
import menuItemReducer from './reducers/menuItemReducer';

const reducer = combineReducers({
	user: loginReducer,
	menu: menuReducer,
	initial: initialMenuReducer,
	menuItem: menuItemReducer,
});

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
) 

console.log(store.getState())

export default store;