import React from 'react';
import { Button } from 'react-bootstrap';

function TableItemIncome({ sumIncome, dateTimeIncome, descriptionIncome, _id, handleRemove, index }) {
	const id = _id;
	return (
		<tr >
			<td>{index + 1}</td>
			<td>+{sumIncome} BUN</td>
			<td>{dateTimeIncome.replace(/[T,]/gi, "-").split('-').reverse().join('-')}</td>
			<td contentEditable='true'>{descriptionIncome}</td>
			<td><Button onClick={() => { handleRemove(id) }} variant="danger">Drop</Button></td>
		</tr >
	)
}

export default TableItemIncome;
