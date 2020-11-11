import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import income from '../Img/mainBG2.jpg';
import styled from 'styled-components';
import { PostIncomeFetch } from '../Redux/budget/action-creators';

const Section = styled.section`
		background: url(${income}) no-repeat  ;
		background-size: cover;
		color: #efefef;
		height: 1000px;
		position: relative;
		z-index: 2;
		font-size: 20px;
		letter-spacing: 1.6px;	
`;
function IncomePage() {
	const initialState = {
		sumIncome: '',
		dateTimeIncome: '',
		descriptionIncome: '',
	};
	const [userIncome, setUserIncome] = useState(initialState);
	const dispatch = useDispatch();

	const isEpmtyValue = (userIncome) => {
		for (let key in userIncome) {
			if (userIncome[key].length === 0) {
				return false;
			}
		}
		return true;
	}

	const handleChangeIncome = (e) => {
		console.log(e.target.value);
		setUserIncome({
			...userIncome,
			[e.target.name]: e.target.value,
		});
	}
	const handleSubmitForm = (e) => {
		e.preventDefault();
		setUserIncome(initialState);
	}
	const handleAddIncome = () => {
		if (isEpmtyValue(userIncome)) {
			dispatch(PostIncomeFetch({ ...userIncome }));
		}
	}
	return (
		<Section className='wrappers'>
			<div className='overlay'>
				<Container>
					<h1 className='text-center'>ADD INCOME</h1>
					<Form onSubmit={handleSubmitForm}>
						<Form.Group >
							<Form.Label><i className="fas fa-dollar-sign"></i>Income</Form.Label>
							<Form.Control type="number" name='sumIncome' placeholder="Enter sum" tabIndex='1' required step="1" min="1"
								onChange={handleChangeIncome} value={userIncome.sumIncome.replace(/[^0-9]/ig, '')} />
						</Form.Group>
						<Form.Group >
							<Form.Label><i className="fas fa-calendar-alt"></i>Income Date</Form.Label>
							<Form.Control type='datetime-local' name='dateTimeIncome' tabIndex='2'
								min="2019-01-01T08:30" max="2030-01-30T16:30" required
								onChange={handleChangeIncome} value={userIncome.dateTimeIncome} />
						</Form.Group>
						<Form.Group >
							<Form.Label><i className="fas fa-info-circle"></i>Description</Form.Label>
							<Form.Control as="textarea" name='descriptionIncome' rows={4} placeholder='Enter description' tabIndex='3'
								onChange={handleChangeIncome} value={userIncome.descriptionIncome} required
							/>
						</Form.Group>
						<div className="text-center">
							<Button variant='info' className='btn-active btn-center' type='submit' name='btnAdd'
								onClick={handleAddIncome} tabIndex='4' style={{ width: 150 }}>ADD</Button>
						</div>
					</Form>
				</Container>
			</div>
		</Section>
	)
}

export default IncomePage


