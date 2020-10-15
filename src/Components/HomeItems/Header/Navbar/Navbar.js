import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';
import logo from '../../../../Images/logo/logo.png';
import Button from '../../../Shared/Button/Button';
import './Navbar.css';

const Navbar = () => {
    const { push } = useHistory();
    const handleClick = () => {
        push('/dashboard/serviceList');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <NavLink className="navbar-brand" to="/"><img className="logo" src={logo} alt="Logo" /></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <NavLink className="nav-link nav_links" activeClassName="active_nav" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link nav_links" activeClassName="active_nav" to="/portfolio">Our Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link nav_links" activeClassName="active_nav" to="/team">Our Team</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link nav_links" activeClassName="active_nav" to="/contact">Contact  Us</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-center">
                            <Button buttonName={'Login'} handleClick={handleClick} className={'dark_button'} />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;