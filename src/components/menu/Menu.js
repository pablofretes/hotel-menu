import React from 'react';
import './menu.css';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Container, Col, Row, Button} from 'react-bootstrap';
import { newMenuItem } from '../../reducers/menuItemReducer';
import { Link } from 'react-router-dom';

const Menu = () => {
	const dispatch = useDispatch();
	const chosenMenu = useSelector(state => state.menu);
	console.log(chosenMenu)
	const handleClick = (id) => {
		dispatch(newMenuItem(id));
	}

	return (
		<Container>
			{chosenMenu.menuObject.map(item => {
				return (
					<div>{item.title}</div>
					/*<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src={item.image} />
						<Card.Body>
							<Card.Title>{item.title}</Card.Title>
							<Link to={`/menu/${item.id}`}><Button variant="primary" onClick={() => handleClick(item.id)}>Detalles</Button></Link>
						</Card.Body>
					</Card>*/
				)
			})}
		</Container>
	)
};

export default Menu;