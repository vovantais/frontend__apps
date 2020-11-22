import React, { useState } from 'react';
import { Form, Button, Container, Nav } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLogInFetch } from '../Redux/auth/action-creators';
import styled from 'styled-components';
import JumbotroneImg from '../Layouts/JumbotroneImg';
import ModalPasswordChange from './ModalPasswordChange';

const Section = styled.section`
	width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   align-content: center;
   justify-content: center;
   overflow: auto;
   position: absolute;
   top: 0px;
   left: 0;
   right: 0;
	bottom: 0;
	margin:20px 0px 0px 0px ;
	padding: 0px 10px 0px 10px;
	color:white;
	letter-spacing: 0.8px;
	font-size: 17px;
`;
function LogInForm() {

	const initialState = {
		email: '',
		password: '',
	};

	const [UserInfo, SetUserInfo] = useState(initialState);
	const { isCheckAuth, isAuthenticated } = useSelector(({ auth }) => auth.auth);
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();

	const isEpmtyValue = (UserInfo) => {
		for (let key in UserInfo) {
			if (UserInfo[key].length === 0) {
				return false;
			}
		}
		return true;
	}

	const handleChangeInfo = (e) => {
		SetUserInfo({
			...UserInfo,
			[e.target.name]: e.target.value.replace(/[^A-zА-яЁё 0-9.@ _]/ig, ''),
		});
	}

	const handleLogIn = () => {
		if (isEpmtyValue(UserInfo)) {
			dispatch(AuthLogInFetch({ ...UserInfo }));
			SetUserInfo(initialState);
		}
	}
	const handleCloseModal = () => setShow(false);
	const handleShowModal = (e) => {
		e.preventDefault()
		setShow(true);
	}
	const AuthorizationForm = (
		<>
			<JumbotroneImg />
			<Container className='wrappers'>
				<Section>
					<Form>
						<Form.Group controlId="formBasicEmail" style={{ position: 'relative' }}>
							<Form.Label> <i className="far fa-envelope"></i> Enter your email address</Form.Label>
							<Form.Control type="email" name='email' placeholder="Enter email"
								onChange={handleChangeInfo} value={UserInfo.email} required tabIndex='1' />
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label ><i className="fas fa-lock"></i>Enter your password</Form.Label>
							<Form.Control type="password" name='password' placeholder="Enter password"
								onChange={handleChangeInfo} value={UserInfo.password} required tabIndex='2' />
						</Form.Group>
						<div className='text-center'>
							<Button variant='info' className='btn-active' type='submit' name='btnlogin'
								onClick={handleLogIn} tabIndex='3'
								style={{ width: 120 }} disabled={isCheckAuth} >Log In</Button>
						</div>
					</Form>
					<a href='#' variant='info' onClick={handleShowModal} className='forgot-password'>Forgot your password?</a>
				</Section>
				<ModalPasswordChange showModal={show} closeModal={handleCloseModal} />
			</Container>
		</>
	);
	return isAuthenticated ? <Redirect to='/homepage' /> : AuthorizationForm;
}

export default LogInForm;
