import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
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
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = (e) => {
		e.preventDefault();
		return setShow(true);
	};
	return (
		<>
			<Container>
				<Section>
					<Form>
						<Form.Group controlId="formBasicEmail" style={{ position: 'relative' }}>
							<Form.Label> <i className="far fa-envelope"></i> Enter your email address</Form.Label>
							<Form.Control type="email" name='UserEmail' placeholder="Enter email" />
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label ><i className="fas fa-lock"></i>Enter your password</Form.Label>
							<Form.Control type="password" name='UserPassword' placeholder="Enter password" />
						</Form.Group>
						<Button variant='primary' type='submit' name='btnSign' style={{ marginRight: 55, width: 120 }} >Sign In</Button>
						<Button variant='primary' type='submit' name='btnLog' onClick={handleShow} style={{ width: 120 }}>Log In</Button>
					</Form>
				</Section>
				<LogInForm showModal={show} closeModal={handleClose} />
			</Container>
		</>
	)
}

export default SignInForm;
