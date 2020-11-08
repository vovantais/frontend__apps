import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { PatchIncomeFetch } from '../Redux/budget/action-creators';
import { useDispatch } from "react-redux";

function TableItemIncome({ sumIncome, dateTimeIncome, descriptionIncome, _id, handleRemove, index }) {

	const id = _id;
	const [description, setDescription] = useState(descriptionIncome);
	const [visible, setVisible] = useState(false);
	const dispatch = useDispatch();

	const handleChangeDescription = (e) => {
		setDescription(e.target.textContent);
		setVisible(true);
	}

	const handleUpdate = () => {
		if (descriptionIncome === description) {
			return;
		}
		dispatch(PatchIncomeFetch(id, description));
		setVisible(!visible);
	}

	return (
		<tr>
			<td>{index + 1}</td>
			<td>+{sumIncome} BUN</td>
			<td>{dateTimeIncome.replace(/[T,]/gi, "-").split('-').reverse().join('-')}</td>
			<td contentEditable='true' onInput={handleChangeDescription}>{descriptionIncome}</td>
			<td className='make-visible'>
				<Button onClick={() => { handleRemove(id) }} variant="danger">Drop</Button>
				<Button className="btn-visible" style={{ display: visible ? 'block' : 'none' }}
					onClick={() => { handleUpdate(id, description, descriptionIncome) }} variant="info">Update</Button>
			</td>
		</tr>
	)
}
export default TableItemIncome;
