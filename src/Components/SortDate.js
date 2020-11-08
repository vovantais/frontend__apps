import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components';

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
	margin: 20px 0px 10px 0px;
`;
function SortDate() {

	const initialState = {
		month: '',
		year: '',
	};
	const [date, setDate] = useState(initialState);

	const handleGetData = () => {

	}

	const handleSubmitForm = (e) => {
		e.preventDefault();
		setDate(initialState);
	}
	const handleChangeDate = (e) => {
		console.log(e.target.value);
		setDate({
			...date,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<Section>
			<Form onSubmit={handleSubmitForm}>
				<Form.Group >
					<Form.Label><i className="far fa-calendar-alt"></i> Month</Form.Label>
					<Form.Control as="select" tabIndex='1' name='month'
						onChange={handleChangeDate} value={date.month}>
						<option selected>Select a month</option>
						<option>January</option>
						<option>February</option>
						<option>March</option>
						<option>April</option>
						<option>May</option>
						<option>June</option>
						<option>July</option>
						<option>August</option>
						<option>September</option>
						<option>October</option>
						<option>November</option>
						<option>December</option>
					</Form.Control>
				</Form.Group>
				<Form.Group >
					<Form.Label><i className="far fa-calendar-alt"></i> Year</Form.Label>
					<Form.Control as="select" tabIndex='2' name='year'
						onChange={handleChangeDate} value={date.year}>
						<option selected>Select a year</option>
						<option>2020</option>
					</Form.Control>
				</Form.Group>
				<div className="text-center">
					<Button variant='info' className='btn-active btn-center' type='submit' name='btnAdd'
						onClick={handleGetData} tabIndex='3' style={{ width: 150 }}>ADD</Button>
				</div>
			</Form>
		</Section>
	)
}

export default SortDate;
