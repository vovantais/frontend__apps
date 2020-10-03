import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSignInFetch } from '../Redux/action-creators';

function SigInForm(modal) {

	const initialState = {
		email: '',
		password: '',
		confirmPassword: '',
	};
	const [UserInfo, SetUserInfo] = useState(initialState);
	const { isCheckAuth, isAuthAccsess } = useSelector(({ auth }) => auth);
	const dispatch = useDispatch();
	const authSigIn = bindActionCreators(AuthSignInFetch, dispatch);

	const handleChangeInfo = (e) => {
		console.log(e.target.value);
		SetUserInfo({
			...UserInfo,
			[e.target.name]: e.target.value,
		})
	}
	const handleSubmitForm = (e) => {
		e.preventDefault();
		// todo =================
		if (UserInfo.password !== UserInfo.confirmPassword) {
			console.log('Forbidden');
		}
		SetUserInfo(initialState);
		e.preventDefault();
	}
	const handleSignIn = () => {
		authSigIn({ ...UserInfo });
	}

	return (
		<Modal show={modal.showModal} onHide={modal.closeModal} style={{ marginTop: 120, }} >
			<Modal.Header closeButton>
				<Modal.Title>Sign In</Modal.Title>
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
					<Form.Group controlId="formBasicConfirmPassword">
						<Form.Label><i className="fas fa-lock"></i>Confirm your password</Form.Label>
						<Form.Control type="password" name='confirmPassword' placeholder="Confirm password"
							onChange={handleChangeInfo} value={UserInfo.confirmPassword} />
					</Form.Group>
					<Button variant='primary' type='submit' name='btnLog'
						style={{ width: 120 }} onClick={handleSignIn} disabled={isCheckAuth}>Send</Button>
				</Form>
			</Modal.Body>
		</Modal >
	)
}

export default SigInForm;
