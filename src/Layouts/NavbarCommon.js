import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink, useHistory } from "react-router-dom";

function NavbarCommon() {
   const history = useHistory();
   const handeleClick = (e) => {
      e.preventDefault();
      history.push("/");
   }
   return (
      <>
         <Navbar sticky="top" bg="dark" variant="dark" className="navbar-wrapper">
            <nav className="nav-common" id="navbarTogglerDemo03">
               <NavLink className='nav-links' to="/homepage">Home</NavLink>
               <NavLink className='nav-links' to="/schedule">Schedule</NavLink>
               <NavLink className='nav-links' to="/income">Income</NavLink>
               <NavLink className='nav-links' to="/expenses">Expenses</NavLink>
            </nav>
            <Button variant="outline-info" className='btn-log-Out' onClick={handeleClick}>Log out</Button>
         </Navbar>
      </>
   )
}

export default NavbarCommon;
