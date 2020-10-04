import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSignInFetch } from '../Redux/action-creators';

function SigInForm(modal) {

	const initialState = {
		email: '',
		password: '',
		confirmPassword: '',
		emailError: '',
		passwordError: '',
		confirmPasswordError: '',
	};
	const [UserInfo, SetUserInfo] = useState(initialState);
	const { isCheckAuth, isAuthAccsess } = useSelector(({ auth }) => auth);
	const dispatch = useDispatch();

	const handleChangeInfo = (e) => {
		console.log(e.target.value);
		SetUserInfo({
			...UserInfo,
			[e.target.name]: e.target.value,
		})
	}
	const validate = () => {
		let passwordError = '';
		let confirmPasswordError = '';

		if (UserInfo.password.length < 8) {
			passwordError = 'Password must be more than 8 symbol!';
		}
		if (passwordError) {
			SetUserInfo({ passwordError });
			return false;
		}
		if (UserInfo.password !== UserInfo.confirmPassword) {
			confirmPasswordError = 'Passwords is not the same!';
		}
		if (confirmPasswordError) {
			SetUserInfo({ confirmPasswordError });
			return false;
		}
		return true;
	}
	const handleSubmitForm = (e) => {
		e.preventDefault();
		const isValid = validate();
		if (isValid) {
			dispatch(AuthSignInFetch({ ...UserInfo }))
			SetUserInfo(initialState);
		}
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
					<div><h5 style={{ color: 'red' }}>{UserInfo.passwordError}</h5></div>
					<Form.Group controlId="formBasicPassword">
						<Form.Label><i className="fas fa-lock"></i>Enter your password</Form.Label>
						<Form.Control type="password" name='password' placeholder="Enter password"
							onChange={handleChangeInfo} value={UserInfo.password} />
					</Form.Group>
					<div><h5 style={{ color: 'red' }}>{UserInfo.confirmPasswordError}</h5></div>
					<Form.Group controlId="formBasicConfirmPassword">
						<Form.Label><i className="fas fa-lock"></i>Confirm your password</Form.Label>
						<Form.Control type="password" name='confirmPassword' placeholder="Confirm password"
							onChange={handleChangeInfo} value={UserInfo.confirmPassword} />
					</Form.Group>
					<Button variant='primary' type='submit' name='btnLog'
						style={{ width: 120 }} disabled={isCheckAuth}>Send</Button>
				</Form>
			</Modal.Body>
		</Modal >
	)
}

export default SigInForm;
