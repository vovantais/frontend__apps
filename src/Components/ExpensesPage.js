import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import expenses from '../Img/expenses5.jpg';
import { useDispatch } from "react-redux";
import { PostExpensesFetch } from '../Redux/budget/action-creators';
//import expenses from '../Img/expensesаfix.png';
import styled from 'styled-components';

const Section = styled.section`
		background: url(${expenses}) no-repeat  ;
		background-size: cover;
		color: #efefef;
		height: 1000px;
		position: relative;
		z-index: 1;
		font-size: 20px;
		letter-spacing: 1.6px;	
`;
function ExpensesPage() {
	const initialState = {
		sumSpent: '',
		category: '',
		dateTimeExpenses: '',
		descriptionExpenses: '',
	};
	const [userExpenses, setUserExpenses] = useState(initialState);
	const dispatch = useDispatch();

	const isEpmtyValue = (userExpenses) => {
		for (let key in userExpenses) {
			if (userExpenses[key].length === 0) {
				return false;
			}
		}
		return true;
	}

	const handleChangeExpenses = (e) => {
		console.log(e.target.value);
		setUserExpenses({
			...userExpenses,
			[e.target.name]: e.target.value,
		});
	}
	const handleSubmitForm = (e) => {
		e.preventDefault();
		setUserExpenses(initialState);
	}
	const handleAddExpenses = () => {
		if (isEpmtyValue(userExpenses)) {
			dispatch(PostExpensesFetch({ ...userExpenses }));
		}
	}
	return (
		<Section className='wrappers'>
			<div className='overlay'>
				<Container>
					<h1 className='text-center'>ADD EXPENSES</h1>
					<Form onSubmit={handleSubmitForm}>
						<Form.Group >
							<Form.Label><i className="fas fa-dollar-sign"></i>Amount spent</Form.Label>
							<Form.Control type="number" name='sumSpent' placeholder="Enter sum" tabIndex='1' required step="1" min="1"
								onChange={handleChangeExpenses} value={userExpenses.sumSpent.replace(/[^0-9]/ig, '')}
							/>
						</Form.Group>
						<Form.Group >
							<Form.Label><i className="fas fa-hand-pointer"></i>Category</Form.Label>
							<Form.Control as="select" tabIndex='2' name='category' required
								onChange={handleChangeExpenses} value={userExpenses.category}>
								<option selected>Select a category</option>
								<option>Utility services</option>
								<option>Car</option>
								<option>Clothes</option>
								<option>Food</option>
								<option>Phone and Internet</option>
								<option>Transport</option>
								<option>Entertainment</option>
								<option>Gifts</option>
								<option>Sport</option>
								<option>Health</option>
								<option>Other</option>
							</Form.Control>
						</Form.Group>
						<Form.Group >
							<Form.Label><i className="fas fa-calendar-alt"></i>Expense Date</Form.Label>
							<Form.Control type='datetime-local' name='dateTimeExpenses' tabIndex='3'
								min="2019-01-01T08:30" max="2030-01-30T16:30" required
								onChange={handleChangeExpenses} value={userExpenses.dateTimeExpenses} />
						</Form.Group>
						<Form.Group >
							<Form.Label><i className="fas fa-info-circle"></i>Description</Form.Label>
							<Form.Control as="textarea" name='descriptionExpenses' rows={4} placeholder='Enter description' tabIndex='4' required
								onChange={handleChangeExpenses} value={userExpenses.descriptionExpenses}
							/>
						</Form.Group>
						<div className="text-center">
							<Button variant='info' className='btn-active btn-center' type='submit' name='btnAdd'
								onClick={handleAddExpenses} tabIndex='5' style={{ width: 150 }}>ADD</Button>
						</div>
					</Form>
				</Container>
			</div>
		</Section>
	)
}

export default ExpensesPage
