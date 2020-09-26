import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSignInFetch } from '../Redux/action-creators';
import styled from 'styled-components';
import LogInForm from './LogInForm';

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
	padding: 0px 10px 0px 10px;
	
`;
function SignInForm() {

	const initialState = {
		email: '',
		password: '',
	};

	const [UserInfo, SetUserInfo] = useState(initialState);
	const [show, setShow] = useState(false);
	const { isCheckAuth, isAuthAccsess } = useSelector(({ auth }) => auth);
	const dispatch = useDispatch();
	const authSignIn = bindActionCreators(AuthSignInFetch, dispatch);

	const handleChangeInfo = (e) => {
		SetUserInfo({
			...UserInfo,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmitForm = (e) => {
		e.preventDefault();
		SetUserInfo(initialState);
	}

	const handleClose = () => setShow(false);

	const handleShow = (e) => {
		e.preventDefault();
		return setShow(true);
	};

	const handleSignIn = () => {
		authSignIn({ ...UserInfo });
	}

	const AuthorizationForm = (
		<Container>
			<Section>
				<Form onSubmit={handleSubmitForm}>
					<Form.Group controlId="formBasicEmail" style={{ position: 'relative' }}>
						<Form.Label> <i className="far fa-envelope"></i> Enter your email address</Form.Label>
						<Form.Control type="email" name='email' placeholder="Enter email"
							onChange={handleChangeInfo} value={UserInfo.email} />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label ><i className="fas fa-lock"></i>Enter your password</Form.Label>
						<Form.Control type="password" name='password' placeholder="Enter password"
							onChange={handleChangeInfo} value={UserInfo.password} />
					</Form.Group>
					<Button variant='primary' type='submit' name='btnSign' onClick={handleSignIn}
						style={{ marginRight: 55, width: 120 }} disabled={isCheckAuth} >Sign In</Button>
					<Button variant='primary' type='submit' name='btnLog' onClick={handleShow}
						style={{ width: 120 }}>Log In</Button>
				</Form>
			</Section>
			<LogInForm showModal={show} closeModal={handleClose} />
		</Container>
	);
	return isAuthAccsess ? <Redirect to='/homepage' /> : AuthorizationForm;
}

export default SignInForm;
