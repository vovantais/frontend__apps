import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { deleteIncomeFetch } from '../Redux/budget/action-creators';
import TableItemIncome from './TableItemIncome';
import Pagination from './Pagination';
import { slicePagination } from '../Helpers/SlicePagination';

function TableIncome() {

	const income = useSelector(({ budget }) => budget.income.incomes);

	const initialState = {
		items: null,
		currentPage: 0,
	};

	let sortResult = null;


	const { month, year } = useSelector(({ sort }) => sort.filterIncome);
	const [pages, setPages] = useState(initialState);
	const dispatch = useDispatch();

	useEffect(() => {
		setPages({
			...pages,
			items: slicePagination(income, 5),
		})
	}, [income.length]);

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
		dispatch(deleteIncomeFetch(id));
	}

	sortResult = (
		//todo not work sort correctly items && items[currentPage] && items[currentPage]
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
			<Container className='p-0'>
				<div className='income-chart'>
					{
						(items && items[currentPage]) ? (
							<>
								<h2 className='text-center'>Table Income</h2>
								<Table striped bordered hover variant="success">
									<thead>
										<tr>
											<th className='hidden'>№</th>
											<th>INCOME SUM</th>
											<th>DATE AND TIME</th>
											<th>DESCRIPTION</th>
										</tr>
									</thead>
									<tbody>
										{
											month === '' && year === '' ? items[currentPage].map(({ sumIncome, dateTimeIncome, descriptionIncome, _id }, index) => (
												<TableItemIncome key={index} {...{ sumIncome, dateTimeIncome, descriptionIncome, _id, handleRemove: (id) => { handleRemove(id) }, index }} />))
												: sortResult
										}
									</tbody>
								</Table>
								{income && income.length > 5 && <Pagination {...{ len: items.length, paginate, nextPage, prevPage, firstPage, lastPage, currentPage }} />}
							</>
						) : null
					}
				</div>
			</Container >
		</>
	)
}


export default TableIncome;


