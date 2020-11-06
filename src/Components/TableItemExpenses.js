import React from 'react'
import { Button } from 'react-bootstrap';
function TableItemExpenses({ sumSpent, category, dateTimeExpenses, descriptionExpenses, _id, handleRemove, index }) {
	const id = _id;
	return (
		<tr>
			<td>{index + 1}</td>
			<td>-{sumSpent} BUN</td>
			<td>{category}</td>
			<td>{dateTimeExpenses.replace(/[T,]/gi, "-").split('-').reverse().join('-')}</td>
			<td>{descriptionExpenses}</td>
			<td><Button onClick={() => { handleRemove(id) }} variant="danger">Drop</Button></td>
		</tr>
	)
}

export default TableItemExpenses
