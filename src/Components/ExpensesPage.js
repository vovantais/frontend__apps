import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import expenses from '../Img/expenses4.jpg';
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
	const handleAddExpenses = (e) => {
		e.preventDefault();
	}
	return (
		<Section>
			<div className='overlay'>
				<Container>
					<h1 className='text-center'>ADD EXPENSES</h1>
					<Form>
						<Form.Group controlId="exampleForm.ControlInput1">
							<Form.Label>Amount spent</Form.Label>
							<Form.Control type="number" name='sum' placeholder="Enter sum" tabIndex='1' required step="1" min="1" pattern="^[ 0-9]+$" />
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlSelect1">
							<Form.Label>Category</Form.Label>
							<Form.Control as="select" tabIndex='2' name='category' required>
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
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Expense Date</Form.Label>
							<Form.Control type='datetime-local' name='datetime' tabIndex='3'
								min="2019-01-01T08:30" max="2030-01-30T16:30" required />
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Description</Form.Label>
							<Form.Control as="textarea" name='description' rows={4} placeholder='Enter description' tabIndex='4' />
						</Form.Group>
						<Button variant='info' className='btn-active btn-center' type='submit' name='btnAdd'
							onClick={handleAddExpenses} tabIndex='5'
							style={{ width: 150 }}>ADD</Button>
						{/* disabled={} */}
					</Form>
				</Container>
			</div>
		</Section>
	)
}

export default ExpensesPage
