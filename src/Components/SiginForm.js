import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSignInFetch } from '../Redux/action-creators';
import VerifyUser from './VerifyUser';
import styled from 'styled-components';
import JumbotroneImg from '../Layouts/JumbotroneImg';


const Section = styled.section`
	width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   align-content: center;
   justify-content: center;
   overflow: auto;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
	bottom: 0;
	margin:20px 0px 0px 0px ;
	padding: 0px 10px 0px 10px;
	color:white;
	letter-spacing: 0.8px;
	font-size: 17px;
`;
function SigInForm() {
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
	const { isCheckAuth } = useSelector(({ auth }) => auth);
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
		<>
			<JumbotroneImg />
			<Container >
				<Section>
					<Form onSubmit={handleSubmitForm}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label><i className="far fa-envelope"></i> Enter your email address</Form.Label>
							<Form.Control type="email" name='email' placeholder="Enter email"
								onChange={handleChangeInfo} value={UserInfo.email} tabIndex='1' required />
						</Form.Group>
						<div><h6 style={{ color: 'red' }}>{UserInfo.passwordError}</h6></div>
						<Form.Group controlId="formBasicPassword" className={validate ? 'isdone' : 'pending'}>
							<Form.Label><i className="fas fa-lock"></i>Enter your password</Form.Label>
							<Form.Control type="password" name='password' placeholder="Enter password"
								onChange={handleChangeInfo} value={UserInfo.password} tabIndex='2' required />
						</Form.Group>
						<div><h6 style={{ color: 'red' }}>{UserInfo.confirmPasswordError}</h6></div>
						<Form.Group controlId="formBasicConfirmPassword">
							<Form.Label><i className="fas fa-lock"></i>Confirm your password</Form.Label>
							<Form.Control type="password" name='confirmPassword' placeholder="Confirm password"
								onChange={handleChangeInfo} value={UserInfo.confirmPassword} className='validate' tabIndex='3' required />
						</Form.Group>
						<div className="text-center" >
							<Button variant="info" className='btn-active' type='submit' name='btnSignIn'
								style={{ width: 120, marginRight: 40 }} tabIndex='4'
								disabled={isCheckAuth}>Send data</Button>
							<Button variant="info" className='btn-active' type='submit' name='btnVerify'
								style={{ width: 120, }} onClick={handleShowModal} tabIndex='5'
								disabled={isCheckAuth}>
								Verify email</Button>
						</div>
					</Form>
					<VerifyUser showModal={show} closeModal={handleCloseModal} />
				</Section>
			</Container>
		</>
	)
}

export default SigInForm;
