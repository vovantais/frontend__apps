import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { VerifyAccountFetch } from '../Redux/action-creators';
import { Redirect } from 'react-router-dom';

function VerifyUser(modal) {
	const initialState = {
		email: '',
		accessKey: '',
	}
	const [verifyUser, setVerifyUser] = useState(initialState);
	const { isCheckVerify, isVerify } = useSelector(({ auth }) => auth);
	const dispatch = useDispatch();

	const handleChangeUserInfo = (e) => {
		console.log(e.target.value);
		setVerifyUser({
			...verifyUser,
			[e.target.name]: e.target.value,
		})
	}
	const handleSubmitForm = (e) => {
		e.preventDefault();
		setVerifyUser(initialState);
	}
	const handleVarify = () => {
		dispatch(VerifyAccountFetch({ ...verifyUser }));
	}
	const ModalVerifyUser = (
		<Modal show={modal.showModal} onHide={modal.closeModal} style={{ marginTop: 20, }} >
			<Modal.Header closeButton>
				<Modal.Title>Verify email address</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmitForm}>
					<Form.Group controlId="formBasicEmailAddress">
						<Form.Label> <i className="far fa-envelope"></i> Enter your email address</Form.Label>
						<Form.Control type="email" name='email' placeholder="Enter email"
							onChange={handleChangeUserInfo} />
					</Form.Group>
					<Form.Group controlId="formBasicAccessKey">
						<Form.Label ><i className="fas fa-key"></i>Enter your access key that was sent to your email</Form.Label>
						<Form.Control type="password" name='accessKey' placeholder="Enter access key"
							onChange={handleChangeUserInfo} />
					</Form.Group>
					<div className="text-center" >
						<Button variant="info" className='btn-active' type='submit' name='btnAccessKey' disabled={isCheckVerify}
							style={{ width: 120 }} onClick={handleVarify}>Send key</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal >
	);
	return isVerify ? <Redirect to='/login' /> : ModalVerifyUser;
}

export default VerifyUser;
