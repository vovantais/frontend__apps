import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { GetExpensesFetch, deleteExpensesFetch } from '../Redux/budget/action-creators';
import { Container, Table } from 'react-bootstrap';
import TableItemExpenses from '../Components/TableItemExpenses';

function TableExpenses() {

	const expenses = useSelector(({ budget }) => budget.expenses.spenders);
	const dispatch = useDispatch();

	const handleRemove = (id) => {
		console.log(id);
		dispatch(deleteExpensesFetch(id))
	}

	useEffect(() => {
		dispatch(GetExpensesFetch())
	}, [])

	return (
		<>
			<h2 className='text-center'>Table Expenses</h2>
			<Container>
				<div className='expenses-chart' >
					<Table striped bordered hover variant="dark">
						<thead>
							<tr>
								<th>№</th>
								<th>AMOUNT SPENT</th>
								<th>CATEGORY</th>
								<th>DATE AND TIME</th>
								<th>DESCRIPTION</th>
							</tr>
						</thead>
						<tbody>
							{
								expenses ? expenses.map(({ sumSpent, category, dateTimeExpenses, descriptionExpenses, _id }, index) => (
									<TableItemExpenses key={index} {...{ sumSpent, category, dateTimeExpenses, descriptionExpenses, _id, handleRemove: (id) => { handleRemove(id) }, index }} />
								)) : null
							}
						</tbody>
					</Table >
				</div>
			</Container >
		</>
	)
}

export default TableExpenses
