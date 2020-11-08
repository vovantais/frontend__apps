import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { PatchExpensesFetch } from '../Redux/budget/action-creators';
import { useDispatch } from 'react-redux';
function TableItemExpenses({ sumSpent, category, dateTimeExpenses, descriptionExpenses, _id, handleRemove, index }) {

	const id = _id;
	const [description, setDescription] = useState(descriptionExpenses);
	const [visible, setVisible] = useState(false);
	const dispatch = useDispatch();

	const handleChangeDescription = (e) => {
		setDescription(e.target.textContent);
		setVisible(true);
	}

	const handleUpdate = () => {
		if (descriptionExpenses === description) {
			return;
		}
		dispatch(PatchExpensesFetch(id, description));
		setVisible(!visible);
	}

	return (
		<tr>
			<td>{index + 1}</td>
			<td>-{sumSpent} BUN</td>
			<td>{category}</td>
			<td>{dateTimeExpenses.replace(/[T,]/gi, "-").split('-').reverse().join('-')}</td>
			<td contentEditable='true' onInput={handleChangeDescription} >{descriptionExpenses}</td>
			<td className='make-visible'><Button onClick={() => { handleRemove(id) }} variant="danger">Drop</Button>
				<Button className="btn-visible" style={{ display: visible ? 'block' : 'none' }} onClick={() => { handleUpdate(id, description, descriptionExpenses) }} variant="info">Update</Button>
			</td>
		</tr>
	)
}

export default TableItemExpenses
