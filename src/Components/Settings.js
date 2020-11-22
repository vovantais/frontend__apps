import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import settings from '../Img/settings.jpg';
import { useDispatch } from 'react-redux';
import { patchCityFetch } from '../Redux/settings/action-creators';

const Image = styled.section`
		background: url(${settings}) no-repeat  ;
		background-size: cover;
		color: #efefef;
		height: 1000px;
		position: relative;
		z-index: 1;
		font-size: 20px;
		letter-spacing: 1.6px;	
`;

function Settings() {

	const history = useHistory();
	const handeleClick = (e) => {
		e.preventDefault();
		history.push("/");
		window.location.reload();
	}
	const [city, setCity] = useState('');
	const dispatch = useDispatch();

	const handleChangeCity = (e) => {
		console.log(e.target.value);
		setCity(e.target.value);
	}

	const handleSendCity = (e) => {
		e.preventDefault();
		dispatch(patchCityFetch(city));
	}
	return (
		<Image className='wrappers'>
			<div className='overlay'>
				<div className='form-settings'>
					<Form>
						<div className='change-email'>
							<Form.Group controlId="formBasicEmail" style={{ position: 'relative' }}>
								<Form.Label> <i className="far fa-envelope"></i> Change email address</Form.Label>
								<Form.Control type="email" name='email' placeholder="Enter email"
									required tabIndex='1' />
							</Form.Group>
							<div className='text-center'>
								<Button variant='info' className='btn-active' type='submit' name='btnEmail'
									tabIndex='2' style={{ width: 120 }}  >Send</Button>
							</div>
						</div>
						<div className='change-city'>
							<Form.Group controlId="formBasicСity">
								<Form.Label><i className="fas fa-city"></i> Change Сity</Form.Label>
								<Form.Control type="text" name='city' placeholder="Enter city" value={city}
									tabIndex='3' onChange={handleChangeCity} required />
							</Form.Group>
							<div className='text-center'>
								<Button variant='info' className='btn-active' type='submit' name='btnCity'
									tabIndex='4' style={{ width: 120 }} onClick={handleSendCity}>Send</Button>
							</div>
						</div>
						<div className='change-password'>
							<Form.Group controlId="formBasicPassword">
								<Form.Label ><i className="fas fa-lock"></i>Enter current password</Form.Label>
								<Form.Control type="password" name='password' placeholder="Enter password"
									required tabIndex='5' />
							</Form.Group>
							<Form.Group controlId="formBasicNewPassword">
								<Form.Label><i className="fas fa-lock"></i>Enter new password</Form.Label>
								<Form.Control type="password" name='newPassword' placeholder="New password"
									className='validate' tabIndex='4' required />
							</Form.Group>
							<div className='text-center'>
								<Button variant='info' className='btn-active' type='submit' name='btnPassword'
									tabIndex='6' style={{ width: 120 }}  >Send</Button>
							</div>
						</div>
					</Form>
				</div>
				<div className='text-center'>
					<Button variant="danger" className='btn-log-Out' onClick={handeleClick}>Log out</Button>
				</div>
			</div>
		</Image>
	)
}

export default Settings
