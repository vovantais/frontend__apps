import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ChangePasswordFatch } from '../Redux/auth/action-creators';

function ModalPasswordChange(modal) {

	const [email, setEmail] = useState('');
	const dispatch = useDispatch();

	const isEpmtyValue = (email) => {
		console.log(email.length);
		if (email.length < 5) {
			return false;
		}
		return true;
	}
	const handleChangeUserInfo = (e) => {
		console.log(e.target.value);
		setEmail(e.target.value.replace(/[^A-zА-яЁё 0-9.@ _]/ig, ''));
	}
	const handleCnangePassword = (e) => {
		e.preventDefault();
		if (isEpmtyValue(email)) {
			dispatch(ChangePasswordFatch(email));
		}
		setEmail('');
	}
	return (
		<Modal show={modal.showModal} onHide={modal.closeModal} style={{ marginTop: 20, }} >
			<Modal.Header closeButton>
				<Modal.Title>Change password</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId="formBasicEmailAddress">
						<Form.Label> <i className="far fa-envelope"></i> Enter your email address</Form.Label>
						<Form.Control type="email" name='email' placeholder="Enter email"
							onChange={handleChangeUserInfo} tabIndex='1' required />
					</Form.Group>
					<div className="text-center" >
						<Button variant="info" className='btn-active' type='submit' name='btnEmael'
							style={{ width: 120 }} tabIndex='2' onClick={handleCnangePassword} >Send</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal >
	)
}

export default ModalPasswordChange;




