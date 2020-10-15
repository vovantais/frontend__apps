import React from 'react'
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../img/logo1.png';
import { NavLink } from 'react-router-dom';

const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	text-align: center;
	background: #000;
	line-height: 100px;

	.img-logo {
		display:block;
		width: 80px;
		height: 80px;
		margin: 20px 0px 20px 0px;
		opacity: 1;
		z-index: 99;
		cursor:pointer;
	}
`;

function NavAuth() {
   return (
      <>
         <Section>
            <Nav>
               <NavLink className='links' to="/login">Login</NavLink>
               <NavLink exact to="/" className='links'><img className='img-logo' src={logo} alt="logo" /></NavLink>
               <NavLink className='links' to="/signin">Sign in</NavLink>
            </Nav>
         </Section>
      </>
   )
}

export default NavAuth;
