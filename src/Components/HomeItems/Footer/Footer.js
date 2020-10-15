import React from 'react';
import FooterContact from '../FooterContact/FooterContact';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="row py-5 mx-auto">
                    <div className="col-11 col-sm-10 col-md-10 col-lg-5 mx-auto">
                        <div className="">
                            <h1 className="footer_title">Let us handle your project, professionally.</h1>
                            <p className="footer_description">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </div>
                    <div className="col-11 col-sm-10 col-md-10 col-lg-6 offset-lg-1 mx-auto">
                        <FooterContact />
                    </div>
                </div>
                <h6 className="footer_text">copyright Orange labs {new Date().getFullYear()}</h6>
            </div>
        </section>
    );
};

export default Footer;