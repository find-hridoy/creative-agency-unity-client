import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../Images/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faShoppingBag, faPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const AdminSidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://intense-castle-43970.herokuapp.com/isAdmin', {
            method: 'POST',
            body: JSON.stringify({ email: loggedInUser.email }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setIsAdmin(data)
            })
    }, [loggedInUser.email])
    return (
        <>
            <nav className="">
                <NavLink className="navbar-brand" to="/"><img className="logo" src={logo} alt="Logo" /></NavLink>
                <ul className="nav flex-column mt-5">
                    {
                        isAdmin &&
                        <div>
                            <li className="nav-item">
                                <NavLink className="nav-link nav_link" activeClassName="active_side_nav" to="/dashboard/totalServiceList"><FontAwesomeIcon className="nav_icon" icon={faShoppingBag} />Service List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link nav_link" activeClassName="active_side_nav" to="/dashboard/addService"><FontAwesomeIcon className="nav_icon" icon={faPlus} />Add Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link nav_link" activeClassName="active_side_nav" to="/dashboard/makeAdmin"><FontAwesomeIcon className="nav_icon" icon={faUserPlus} />Make Admin</NavLink>
                            </li>
                        </div>
                    }
                </ul>
            </nav>
        </>
    );
};

export default AdminSidebar;
