import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../Images/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faCommentAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <>
            <nav className="">
                <NavLink className="navbar-brand" to="/"><img className="logo" src={logo} alt="Logo" /></NavLink>
                <ul className="nav flex-column mt-5">
                    <div>
                        <li className="nav-item">
                            <NavLink className="nav-link nav_link" activeClassName="active_side_nav" to="/dashboard/order/:id"><FontAwesomeIcon className="nav_icon" icon={faShoppingCart} />Order</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav_link" activeClassName="active_side_nav" to="/dashboard/serviceList"><FontAwesomeIcon className="nav_icon" icon={faShoppingBag} />Service List</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav_link" activeClassName="active_side_nav" to="/dashboard/review"><FontAwesomeIcon className="nav_icon" icon={faCommentAlt} />Review</NavLink>
                        </li>
                    </div>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;