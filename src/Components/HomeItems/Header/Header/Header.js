import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <Banner />
        </div>
    );
};

export default Header;