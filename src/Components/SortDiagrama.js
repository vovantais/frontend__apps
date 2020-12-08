import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { sortDiagrama } from '../Redux/sort/action-creators';

const Section = styled.section`
	width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   align-content: center;
   justify-content: center;
   overflow: auto;
   top: 0;
   left: 0;
   right: 0;
	bottom: 0;
	color: #17a2b8;
	letter-spacing: 0.8px;
	font-size: 17px;
	margin: 10px 0px 10px 0px;
`;


function SortDiagrama() {

	const initialState = {
		month: '',
		year: '',
	};
	const [date, setDate] = useState(initialState);
	const dispatch = useDispatch();
	const income = useSelector(({ budget }) => budget.income.incomes);
	const expenses = useSelector(({ budget }) => budget.expenses.spenders);
	const arrYear = new Set();
	const arrMonth = new Set();

	income && income.map(item => {
		arrYear.add((new Date(item.dateTimeIncome)).getFullYear());
		arrMonth.add((new Date(item.dateTimeIncome)).toLocaleString('en-us', { month: 'long' }));
	})
	// expenses && expenses.map(item => {
	// 	arrYear.add((new Date(item.dateTimeExpenses)).getFullYear());
	// 	arrMonth.add((new Date(item.dateTimeExpenses)).toLocaleString('en-us', { month: 'long' }));
	// })

	const handleGetData = () => {
		dispatch(sortDiagrama({ ...date }));
	}

	const handleSubmitForm = (e) => {
		e.preventDefault();
		setDate(initialState);
	}
	const handleChangeDate = (e) => {
		setDate({
			...date,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<Section>
			<Form onSubmit={handleSubmitForm}>
				<Form.Group className="form-data">
					<Form.Label><i className="far fa-calendar-alt"></i> Choose month</Form.Label>
					<Form.Control as="select" tabIndex='1' name='month'
						onChange={handleChangeDate} value={date.month} className='select-feild'>
						<option defaultValue='Select a month'  >Select a month</option>
						{
							[...arrMonth].map((item, index) => (
								<option key={index}>{item}</option>
							))
						}
					</Form.Control>
				</Form.Group>
				<Form.Group className="form-data">
					<Form.Label><i className="far fa-calendar-alt"></i> Choose year</Form.Label>
					<Form.Control as="select" tabIndex='2' name='year'
						onChange={handleChangeDate} value={date.year} className='select-feild'>
						<option defaultValue='Select a year' >Select a year</option>
						{
							[...arrYear].map((item, index) => (
								<option key={index}>{item}</option>
							))
						}
					</Form.Control>
				</Form.Group>
				<div className="text-center">
					<Button variant='info' className='btn-active btn-center' type='submit' name='btnAdd'
						onClick={handleGetData} tabIndex='3' style={{ width: 150 }}>Sort</Button>
				</div>
			</Form>
		</Section >
	)
}

export default SortDiagrama;
