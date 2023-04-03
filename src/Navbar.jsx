import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BiHome, BiLogOut, BiSupport, BiCalendar, BiBasket, BiHelpCircle, BiMessage, BiCube, BiBarChart, BiWrench } from "react-icons/bi"
import './navbar.css';

function VerticalNavbar() {
    const biriktir = () => { }
    return (
        <Nav>
            <Navbar className="Navbar" onClick={biriktir}>
                <Navbar.Toggle />
                <Navbar.Offcanvas id="basic-navbar-nav">
                    <Nav className="flex-column">
                        <Nav.Link href="#home" className='nav-link nav-yazi'> <BiHome className='iconlar' color='white' /> <p>Overview</p> </Nav.Link>
                        <Nav.Link href="#link" className='nav-link nav-yazi'> <BiBarChart className='iconlar' color='white' /> <p>Analytics</p> </Nav.Link>
                        <Nav.Link href="#link" className='nav-link nav-yazi'> <BiBasket className='iconlar' color='white' /> <p>Customers</p> </Nav.Link>
                        <Nav.Link href="#link" className='nav-link nav-yazi'> <BiCube className='iconlar' color='white' /> <p>Products</p> </Nav.Link>
                        <Nav.Link href="#link" className='nav-link nav-yazi'> <BiMessage className='iconlar' color='white' /> <p>Message</p> </Nav.Link>
                        <Nav.Link href="#link" className='nav-link nav-yazi'> <BiCalendar className='iconlar' color='white' /> <p>Calendar</p> </Nav.Link>
                        <Nav.Link href="#link" className='nav-link nav-yazi'> <BiSupport className='iconlar' color='white' /> <p>Support</p> </Nav.Link>
                        <Nav.Link href="#link" className='nav-link nav-yazi'> <BiWrench className='iconlar' color='white' /> <p>Settings</p> </Nav.Link>
                        <Nav.Link href="#link" className='nav-link nav-yazi'> <BiHelpCircle className='iconlar' color='white' /> <p>Help Center</p> </Nav.Link>
                        <Nav.Link href="#link" className='nav-link nav-yazi'> <BiLogOut className='iconlar' color='white' /> <p>Logout</p> </Nav.Link>
                    </Nav>
                </Navbar.Offcanvas>
            </Navbar>
        </Nav>
    );
}

export default VerticalNavbar;
