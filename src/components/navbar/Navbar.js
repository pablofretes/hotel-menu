import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeLoggedUser } from '../../reducers/loginReducer';

const Navbar = () => {
	const dispatch = useDispatch();
	const user = useSelector(store => store.user);
	console.log(user);
	
  const handleLogOut = () => {
		dispatch(removeLoggedUser());
  }

  return (
  <nav className='nav' data-cy='navbar'>
  <div className='container-navbar'>
    <ul className='nav-list'>
    	<li className='nav-item'>
      <Link to="/" data-cy='home-button' className='button-nav'>
      Home
      </Link>
    	</li>
    	{user !== null ? <li>
        <Link to="/login" onClick={handleLogOut}  data-cy="logout-button" className='button-nav'>
        Log Out
        </Link>
      </li>
     	:
      <li>
        <Link  to="/login" className='button-nav' data-cy="login-button">Log In</Link>
      </li>
      }
    </ul>
  </div>
  </nav>
  );
}

export default Navbar;