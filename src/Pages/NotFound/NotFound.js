import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="text-center">
            <h1 className="mt-5 pt-5">Page Not Found</h1>
            <h5 className="text-danger">404 error</h5>
            <NavLink to="/" className="btn btn-secondary mt-3">
                Go Home
            </NavLink>
        </section>
    );
};

export default NotFound;