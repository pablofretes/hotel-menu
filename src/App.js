import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { existingLogin } from './reducers/loginReducer';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(existingLogin());
	}, [dispatch]);
	
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/login" element={<LoginForm />}/>
			</Routes>
		</div>
	);
};

export default App;