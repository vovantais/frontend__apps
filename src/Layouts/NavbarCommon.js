import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from '../Img/logo1.png';

function NavbarCommon() {
	return (
		<>
			<Navbar collapseOnSelect expand="md" sticky="top" bg="dark" variant="dark" className="navbar-wrapper">
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="nav-common" >
						<NavLink className='nav-links' to="/homepage">Home</NavLink>
						<NavLink className='nav-links' to="/schedule">Schedule</NavLink>
						<a href='#' className='links-logo'><img className='img-logo' src={logo} alt="logo" /></a>
						<NavLink className='nav-links' to="/income">Income</NavLink>
						<NavLink className='nav-links' to="/expenses">Expenses</NavLink>
						<NavLink className='nav-links' to="/settings">Settings</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}

export default NavbarCommon;
