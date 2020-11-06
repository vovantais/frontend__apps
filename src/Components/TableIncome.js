import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { deleteIncomeFetch, GetIncomeFetch } from '../Redux/budget/action-creators';
import TableItemIncome from './TableItemIncome';

function TableIncome() {

	const income = useSelector(({ budget }) => budget.income.incomes);
	const dispatch = useDispatch();

	const handleRemove = (id) => {
		console.log(id);
		dispatch(deleteIncomeFetch(id))
	}
	useEffect(() => {
		dispatch(GetIncomeFetch())
	}, [])

	return (
		<>
			<h2 className='text-center'>Table Income</h2>
			<Container >
				<div className='income-chart'>
					<Table striped bordered hover variant="success">
						<thead>
							<tr>
								<th>№</th>
								<th>INCOME SUM</th>
								<th>DATE AND TIME</th>
								<th>DESCRIPTION</th>
							</tr>
						</thead>
						<tbody>
							{
								income ? income.map(({ sumIncome, dateTimeIncome, descriptionIncome, _id }, index) => (
									<TableItemIncome key={index} {...{ sumIncome, dateTimeIncome, descriptionIncome, _id, handleRemove: (id) => { handleRemove(id) }, index }} />
								)) : null
							}
						</tbody>
					</Table>
				</div>
			</Container >
		</>
	)
}

export default TableIncome;
