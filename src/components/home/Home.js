import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMenu } from '../../reducers/menuReducer';
import { initialMenu } from '../../reducers/initialMenuReducer';
import { Card, Container, Col, Row, Button } from 'react-bootstrap';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(initialMenu());
	},[dispatch]);

	const menu = useSelector(state => state.initial);

	const handleClick = (m) => {
		dispatch(getMenu(m));
	}

	return(
		<div>
			<Container>
				<Row>
					{[...menu].slice(0, 2).map(m => {
						return (
							<Card style={{ width: '18rem' }} key={m.food}>
								<Card.Img variant="top" src={m.img} />
								<Card.Body>
									<Card.Title>{m.food.toUpperCase()} MENU</Card.Title>
									<Link to={`/menu/${m.food}`}><Button variant="primary" onClick={() => handleClick(m.food)}>MENU</Button></Link>
								</Card.Body>
							</Card>
						)
					})}
				</Row>
			</Container>
			<Container>
				<Row>
					{[...menu].slice(2, 4).map(m => {
						return (
							<Card style={{ width: '18rem' }} key={m.food}>
							<Card.Img variant="top" src={m.img} />
								<Card.Body>
									<Card.Title>{m.food.toUpperCase()} MENU</Card.Title>
									<Link to={`/menu/${m.food}`}><Button variant="primary" onClick={() => handleClick(m.food)}>MENU</Button></Link>
								</Card.Body>
							</Card>
						)
					})}
				</Row>
			</Container>
			<Container>
				<Row>
					{[...menu].slice(4).map(m => {
						return (
							<Card style={{ width: '18rem' }} key={m.food}>
								<Card.Img variant="top" src={m.img} />
								<Card.Body>
									<Card.Title>{m.food.toUpperCase()} MENU</Card.Title>
									<Link to={`/menu/${m.food}`}><Button variant="primary" onClick={() => handleClick(m.food)}>MENU</Button></Link>
								</Card.Body>
							</Card>
						)
					})}
				</Row>
			</Container>
		</div>
	)
}

export default Home;