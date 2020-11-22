import React from 'react'
import { Pagination } from 'react-bootstrap';

function PaginationIncome({ len, paginate, nextPage, prevPage, firstPage, lastPage, currentPage }) {
	const pageNumber = [];

	for (let i = 0; i < len; i++) {
		pageNumber.push(i);
	}

	return (
		<div className='pagination-news'>
			<Pagination >
				<Pagination.First onClick={() => { firstPage() }} />
				<Pagination.Prev onClick={() => { prevPage() }} />
				{
					pageNumber && pageNumber.map((item, index) => (
						<Pagination.Item active={currentPage === index && 'active'} onClick={() => { paginate(item) }} key={index}>{item + 1}</Pagination.Item>
					))
				}
				<Pagination.Next onClick={() => { nextPage() }} />
				<Pagination.Last onClick={() => { lastPage() }} />
			</Pagination >
		</div>
	)
}

export default PaginationIncome;
