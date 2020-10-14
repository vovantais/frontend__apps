import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLogInFetch } from '../Redux/action-creators';
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
	const { isCheckAuth, isAuthAccsess } = useSelector(({ auth }) => auth);
	const dispatch = useDispatch();

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

	const handleLogIn = () => {
		dispatch(AuthLogInFetch({ ...UserInfo }))
	}

	const AuthorizationForm = (
		<>
			<JumbotroneImg />
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
						<div className='text-center'>
							<Button variant='info' className='btn-active' type='submit' name='btnlogin'
								onClick={handleLogIn}
								style={{ width: 120 }} disabled={isCheckAuth} >Log In</Button>
						</div>
					</Form>
				</Section>
			</Container>
		</>
	);
	return isAuthAccsess ? <Redirect to='/homepage' /> : AuthorizationForm;
}

export default LogInForm;
