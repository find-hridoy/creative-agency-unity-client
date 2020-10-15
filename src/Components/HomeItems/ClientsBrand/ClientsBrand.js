import React from 'react';
import './ClientsBrand.css';
import slack from '../../../Images/client-logo/image5.png';
import google from '../../../Images/client-logo/image6.png';
import uber from '../../../Images/client-logo/image7.png';
import netflix from '../../../Images/client-logo/image8.png';
import airbnb from '../../../Images/client-logo/image9.png';

const brandImage = [
    {
        imgUrl: slack
    },
    {
        imgUrl: google
    },
    {
        imgUrl: uber
    },
    {
        imgUrl: netflix
    },
    {
        imgUrl: airbnb
    }
]
const ClientsBrand = () => {
    return (
        <section className="container-fluid my-5 py-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row g-4">
                        {
                            brandImage.map((img, index) =>
                                <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mx-auto">
                                    <div className="card-body brand_card">
                                        <img className="brand_img" src={img.imgUrl} alt="Brand" />
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsBrand;