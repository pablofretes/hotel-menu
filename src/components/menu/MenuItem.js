import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

const MenuItem = () => {
	const item = useSelector(state => state.menuItem);
	return(
		<div>{item.map(i => {
			<Card style={{ width: '50rem' }}>
			<Card.Body>
				<Card.Title>{i.title}</Card.Title>
					{i.nutrition.nutrients.map(n => {
						return (
							<div>{n.name} - {n.amount}{n.unit} - {n.percentOfDailyNeeds}</div>
						)
					})}
			</Card.Body>
		</Card>
		})}</div>
	);
};

export default MenuItem;