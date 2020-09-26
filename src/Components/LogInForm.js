import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function LogInForm(modal) {
	return (
		<Modal show={modal.showModal} onHide={modal.closeModal} style={{ marginTop: 120, }} >
			<Modal.Header closeButton>
				<Modal.Title>Log In</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label><i className="far fa-envelope"></i> Enter your email address</Form.Label>
						<Form.Control type="email" name='UserEmail' placeholder="Enter email" />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label><i className="fas fa-lock"></i>Enter your password</Form.Label>
						<Form.Control type="password" name='UserPassword' placeholder="Enter password" />
					</Form.Group>
					<Button variant='primary' type='submit' name='btnLog' style={{ width: 120 }}>Log In</Button>
				</Form>
			</Modal.Body>
		</Modal >
	)
}

export default LogInForm;
