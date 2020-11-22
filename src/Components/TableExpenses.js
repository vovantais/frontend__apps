import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { deleteExpensesFetch } from '../Redux/budget/action-creators';
import { Container, Table } from 'react-bootstrap';
import TableItemExpenses from '../Components/TableItemExpenses';
import Pagination from './Pagination';
import { slicePagination } from '../Helpers/SlicePagination';

function TableExpenses() {

	const expenses = useSelector(({ budget }) => budget.expenses.spenders);

	const initialState = {
		items: null,
		currentPage: 0,
	};

	let sortResult = null;

	const { month, year } = useSelector(({ sort }) => sort.filterExpenses);
	const [pages, setPages] = useState(initialState);
	const dispatch = useDispatch();

	useEffect(() => {
		setPages({
			...pages,
			items: slicePagination(expenses, 5),
		})
	}, [expenses.length]);

	const { items, currentPage } = pages;

	const paginate = (pageNumber) => setPages({ ...pages, currentPage: pageNumber });

	const nextPage = () => {
		if (currentPage < items.length - 1) {
			setPages({ ...pages, currentPage: currentPage + 1 });
		}
	}

	const prevPage = () => {
		if (currentPage > 0) {
			setPages({ ...pages, currentPage: currentPage - 1 });
		}
	}

	const firstPage = () => {
		if (currentPage > 0) {
			setPages({ ...pages, currentPage: 0 });
		}
	}

	const lastPage = () => {
		if (currentPage < items.length - 1) {
			setPages({ ...pages, currentPage: items.length - 1 });
		}
	}

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
			<Container className='p-0'>
				<div className='expenses-chart' >
					{
						(items && items[currentPage]) ? (
							<>
								<h2 className='text-center'>Table Expenses</h2>
								<Table striped bordered hover variant="dark">
									<thead>
										<tr>
											<th className='hidden'>№</th>
											<th>AMOUNT SPENT</th>
											<th className='hidden'>CATEGORY</th>
											<th>DATE AND TIME</th>
											<th>DESCRIPTION</th>
										</tr>
									</thead>
									<tbody>
										{
											month === '' && year === '' ? items[currentPage].map(({ sumSpent, category, dateTimeExpenses, descriptionExpenses, _id }, index) => (
												<TableItemExpenses key={index} {...{ sumSpent, category, dateTimeExpenses, descriptionExpenses, _id, handleRemove: (id) => { handleRemove(id) }, index }} />
											)) : sortResult
										}
									</tbody>
								</Table >
								{expenses && expenses.length > 5 && <Pagination {...{ len: items.length, paginate, nextPage, prevPage, firstPage, lastPage, currentPage }} />}
							</>
						) : null
					}
				</div>
			</Container >
		</>
	)
}

export default TableExpenses
