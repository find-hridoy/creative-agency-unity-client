import React from 'react';
import Button from '../../../Shared/Button/Button';
import frame from '../../../../Images/Frame.png';
import './Banner.css';

const Banner = () => {
    return (
        <main>
            <div className="container">
                <div className="row align-items-center py-5 mx-auto">
                    <div className="col-11 col-sm-10 col-md-10 col-lg-5 mx-auto">
                        <div className="banner_text">
                            <h1 className="banner_title">Let’s Grow Your Brand To The Next Level</h1>
                            <p className="banner_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                            <Button buttonName={'Hire us'} className={'dark_button'} />
                        </div>
                    </div>
                    <div className="col-11 col-sm-10 col-md-10 col-lg-6 mx-auto">
                        <img className="img-fluid banner_img" src={frame} alt="Frame" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Banner;