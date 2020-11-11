import React from 'react';
import { Container, Table, Pagination } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { deleteIncomeFetch } from '../Redux/budget/action-creators';
import TableItemIncome from './TableItemIncome';

function TableIncome() {

	let sortResult = null;

	const income = useSelector(({ budget }) => budget.income.incomes);
	const { month, year } = useSelector(({ sort }) => sort.filterIncome);

	const dispatch = useDispatch();

	const handleRemove = (id) => {
		dispatch(deleteIncomeFetch(id));
	}
	sortResult = (
		income && income.map((item, index) => {
			if (((new Date(item.dateTimeIncome)).getFullYear()).toString() === year &&
				(new Date(item.dateTimeIncome)).toLocaleString('en-us', { month: 'long' }) === month) {
				return (
					<tr>
						<td>{index + 1}</td>
						<td>+{item.sumIncome} BUN</td>
						<td>{item.dateTimeIncome.replace(/[T,]/gi, "-").split('-').reverse().join('-')}</td>
						<td >{item.descriptionIncome}</td>
					</tr>
				)
			}
		})
	);
	return (
		<>
			<h2 className='text-center'>Table Income</h2>
			<Container className='p-0'>
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
								month === '' && year === '' ? income && income.map(({ sumIncome, dateTimeIncome, descriptionIncome, _id }, index) => (
									<TableItemIncome key={index} {...{ sumIncome, dateTimeIncome, descriptionIncome, _id, handleRemove: (id) => { handleRemove(id) }, index }} />
								)) : sortResult
							}
						</tbody>
					</Table>
				</div>
			</Container >
		</>
	)
}


export default TableIncome;


