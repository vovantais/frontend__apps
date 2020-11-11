import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { deleteExpensesFetch } from '../Redux/budget/action-creators';
import { Container, Table } from 'react-bootstrap';
import TableItemExpenses from '../Components/TableItemExpenses';

function TableExpenses() {

	let sortResult = null;

	const expenses = useSelector(({ budget }) => budget.expenses.spenders);
	const { month, year } = useSelector(({ sort }) => sort.filterExpenses);
	const dispatch = useDispatch();

	const handleRemove = (id) => {
		dispatch(deleteExpensesFetch(id))
	}
	sortResult = (
		expenses && expenses.map((item, index) => {
			if (((new Date(item.dateTimeExpenses)).getFullYear()).toString() === year &&
				(new Date(item.dateTimeExpenses)).toLocaleString('en-us', { month: 'long' }) === month) {
				return (
					<tr>
						<td>{index + 1}</td>
						<td>-{item.sumSpent} BUN</td>
						<td>{item.category}</td>
						<td>{item.dateTimeExpenses.replace(/[T,]/gi, "-").split('-').reverse().join('-')}</td>
						<td >{item.descriptionExpenses}</td>
					</tr>
				)
			}
		})
	);
	return (
		<>
			<h2 className='text-center'>Table Expenses</h2>
			<Container className='p-0'>
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
								month === '' && year === '' ? expenses && expenses.map(({ sumSpent, category, dateTimeExpenses, descriptionExpenses, _id }, index) => (
									<TableItemExpenses key={index} {...{ sumSpent, category, dateTimeExpenses, descriptionExpenses, _id, handleRemove: (id) => { handleRemove(id) }, index }} />
								)) : sortResult
							}
						</tbody>
					</Table >
				</div>
			</Container >
		</>
	)
}

export default TableExpenses
