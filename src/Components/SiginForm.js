import React, { useState } from 'react';
import { Modal, Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSignInFetch } from '../Redux/action-creators';
import VerifyUser from './VerifyUser';


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
	const [show, setShow] = useState(false);
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
			SetUserInfo({ ...UserInfo, passwordError });
			return false;
		}
		if (UserInfo.password !== UserInfo.confirmPassword) {
			confirmPasswordError = 'Passwords is not the same!';
		}
		if (confirmPasswordError) {
			SetUserInfo({ ...UserInfo, confirmPasswordError });
			return false;
		}
		return true;
	}
	const handleSubmitForm = (e) => {
		e.preventDefault();
		const isValid = validate();
		if (isValid) {
			console.log(UserInfo);
			dispatch(AuthSignInFetch({ ...UserInfo }));
			SetUserInfo(initialState);
		}
	}
	const handleCloseModal = () => setShow(false);
	const handleShowModal = (e) => {
		e.preventDefault()
		setShow(true);

	}
	return (
		<Container >
			<Modal show={modal.showModal} onHide={modal.closeModal} style={{ marginTop: 20, }} >
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
						<div className="text-center" >
							<Button variant='primary' type='submit' name='btnSignIn' style={{ width: 120, marginRight: 30 }}
								disabled={isCheckAuth}>Send data</Button>
							<Button variant='primary' type='submit' name='btnVerify' style={{ width: 120 }} onClick={handleShowModal}>
								Verify email</Button>
						</div>
					</Form>
				</Modal.Body>
			</Modal >
			<VerifyUser showModal={show} closeModal={handleCloseModal} />
		</Container>
	)
}

export default SigInForm;
