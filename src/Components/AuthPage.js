import React from 'react'
import { Nav } from 'react-bootstrap';
import mainBG from '../img/mainBG.jpg';
import Jumbotron from '../Components/Jumbotrone';
function AuthPage() {
	return (
		<>
			<div className="text-center" >
				<Nav>
					<Nav.Item>
						<Nav.Link href="/login">Login</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/signin">Sign in</Nav.Link>
					</Nav.Item>
				</Nav>
			</div>
			<img
				className='d-block w-100'
				src={mainBG}
				alt='mainBG'
			/>
			<Jumbotron />
		</>
	)
}

export default AuthPage;
