import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import settings from '../Img/settings.jpg';
import { useDispatch } from 'react-redux';
import { patchCityFetch, patchNameFetch } from '../Redux/settings/action-creators';

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

	const [name, setName] = useState('');
	const [userError, setUserError] = useState('');
	const [city, setCity] = useState('');
	const [citys, setCitys] = useState([]);
	const [cityError, setCityError] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		fetch('output.json')
			.then(res => res.json())
			.then(res =>
				setCitys(res.cities))
	}, [])

	const validateCity = () => {
		let cityError = '';
		let userError = '';
		if (citys.indexOf(city.toLocaleLowerCase()) === -1) {
			cityError = 'This city is not found!';
		}
		if (city.length < 3) {
			cityError = `This city name too short!`;
		}
		if (cityError) {
			setCityError(cityError);
			return false;
		}
		// if (name.length < 3) {
		// 	userError = 'Name must be more than 3 symbol letters!';
		// }
		// if (userError) {
		// 	setName(userError);
		// 	return false;
		// }
		return true;
	}

	const handleChangeCity = (e) => setCity(e.target.value.replace(/[^A-z _]/ig, ''));

	const handleChangeName = (e) => setName(e.target.value.replace(/[^A-z _]/ig, ''));

	const handleSendName = (e) => {
		e.preventDefault();
		// if (isValid) {
		dispatch(patchNameFetch(name));
		setName('');
		//}
	}

	const handleSendCity = (e) => {
		e.preventDefault();
		const isValid = validateCity();
		if (isValid) {
			dispatch(patchCityFetch(city));
			setCity('');
		}
	}
	return (
		<Image className='wrappers'>
			<div className='overlay'>
				<div className='form-settings'>
					<Form>
						<div className='change-name'>
							<div><h6 style={{ color: 'red' }}>{userError}</h6></div>
							<Form.Group controlId="formBasicName">
								<Form.Label><i className="fas fa-info-circle"></i>Enter your Name</Form.Label>
								<Form.Control type="text" name='userName' placeholder="Enter name"
									onChange={handleChangeName} value={name} tabIndex='1' />
							</Form.Group>
							<div className='text-center'>
								<Button variant='info' className='btn-active' type='submit' name='btnName'
									tabIndex='2' style={{ width: 120 }} onClick={handleSendName} >Send</Button>
							</div>
						</div>
						<div className='change-email'>
							<Form.Group controlId="formBasicEmail" >
								<Form.Label> <i className="far fa-envelope"></i> Change email address</Form.Label>
								<Form.Control type="email" name='email' placeholder="Enter email"
									tabIndex='3' />
							</Form.Group>
							<div className='text-center'>
								<Button variant='info' className='btn-active' type='submit' name='btnEmail'
									tabIndex='4' style={{ width: 120 }}  >Send</Button>
							</div>
						</div>
						<div className='change-city'>
							<div><h6 style={{ color: 'red' }}>{cityError}</h6></div>
							<Form.Group controlId="formBasicСity">
								<Form.Label><i className="fas fa-city"></i> Change Сity</Form.Label>
								<Form.Control type="text" name='city' placeholder="Enter city" value={city}
									tabIndex='5' onChange={handleChangeCity} />
							</Form.Group>
							<div className='text-center'>
								<Button variant='info' className='btn-active' type='submit' name='btnCity'
									tabIndex='6' style={{ width: 120 }} onClick={handleSendCity}>Send</Button>
							</div>
						</div>
						<div className='change-password'>
							<Form.Group controlId="formBasicPassword">
								<Form.Label ><i className="fas fa-lock"></i>Enter current password</Form.Label>
								<Form.Control type="password" name='password' placeholder="Enter password"
									tabIndex='7' />
							</Form.Group>
							<Form.Group controlId="formBasicNewPassword">
								<Form.Label><i className="fas fa-lock"></i>Enter new password</Form.Label>
								<Form.Control type="password" name='newPassword' placeholder="New password"
									className='validate' tabIndex='8' />
							</Form.Group>
							<div className='text-center'>
								<Button variant='info' className='btn-active' type='submit' name='btnPassword'
									tabIndex='9' style={{ width: 120 }}  >Send</Button>
							</div>
						</div>
					</Form>
				</div>
				<div className='text-center'>
					<Button variant="danger" className='btn-log-Out' onClick={handeleClick} tabIndex='10'>Log out</Button>
				</div>
			</div>
		</Image>
	)
}

export default Settings
