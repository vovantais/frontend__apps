import React from 'react'
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { NavLink, useHistory } from "react-router-dom";
import logo from '../Img/logo1.png';

function NavbarCommon() {
	const history = useHistory();
	const handeleClick = (e) => {
		e.preventDefault();
		history.push("/");
	}
	return (
		<>
			<Navbar collapseOnSelect expand="md" sticky="top" bg="dark" variant="dark" className="navbar-wrapper">
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="nav-common" >
						<NavLink className='nav-links' to="/homepage">Home</NavLink>
						<NavLink className='nav-links' to="/schedule">Schedule</NavLink>
						<a href='#' className='links'><img className='img-logo' src={logo} alt="logo" /></a>
						<NavLink className='nav-links' to="/income">Income</NavLink>
						<NavLink className='nav-links' to="/expenses">Expenses</NavLink>
					</Nav>
				</Navbar.Collapse>
				<Button variant="outline-info" className='btn-log-Out' onClick={handeleClick}>Log out</Button>
			</Navbar>
		</>
	)
}

export default NavbarCommon;
