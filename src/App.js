import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import MenuItem from './components/menu/MenuItem';
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
				<Route path="/" element={<Home />}>
					<Route path=':menu' element={<Menu />}>
						<Route path=':id' element={<MenuItem />}/>
					</Route>
				</Route>
			</Routes>
		</div>
	);
};

export default App;