import React from 'react';
import './Header.css';
import logo from './codemi.png'
import profile from './code.png'
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar className="header" >
                <Navbar.Brand href="#home">
                    <img src={logo} className="logo" alt="logo" />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <span className="glyphicon glyphicon-bell"></span><p className="badge badge-danger pull-right bell-badge">18</p>
                    <img src={profile} className="profile-pic ml-auto" alt="logo" />
                    <i className="fa fa-caret-down" aria-hidden="true" style={{ paddingTop: 8, marginLeft: 4 }}></i>
                </Nav>

            </Navbar>
        </>
    )
}

export default Header;