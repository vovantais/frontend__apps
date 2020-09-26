import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLogInFetch } from '../Redux/action-creators';
function LogInForm(modal) {

	const initialState = {
		email: '',
		password: '',
	};
	const [UserInfo, SetUserInfo] = useState(initialState);
	const { isCheckAuth, isAuthAccsess } = useSelector(({ auth }) => auth);
	const dispatch = useDispatch();
	const authLogIn = bindActionCreators(AuthLogInFetch, dispatch);

	const handleChangeInfo = (e) => {
		console.log(e.target.value);
		SetUserInfo({
			...UserInfo,
			[e.target.name]: e.target.value,
		})
	}
	const handleSubmitForm = (e) => {
		e.preventDefault();
		SetUserInfo(initialState);
	}
	const handleLogIn = () => {
		authLogIn({ ...UserInfo });
	}

	return (
		<Modal show={modal.showModal} onHide={modal.closeModal} style={{ marginTop: 120, }} >
			<Modal.Header closeButton>
				<Modal.Title>Log In</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmitForm}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label><i className="far fa-envelope"></i> Enter your email address</Form.Label>
						<Form.Control type="email" name='email' placeholder="Enter email"
							onChange={handleChangeInfo} value={UserInfo.email} />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label><i className="fas fa-lock"></i>Enter your password</Form.Label>
						<Form.Control type="password" name='password' placeholder="Enter password"
							onChange={handleChangeInfo} value={UserInfo.password} />
					</Form.Group>
					<Button variant='primary' type='submit' name='btnLog'
						style={{ width: 120 }} onClick={handleLogIn} disabled={isCheckAuth}>Log In</Button>
				</Form>
			</Modal.Body>
		</Modal >
	)
}

export default LogInForm;
