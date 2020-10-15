import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ServicesCard from '../ServicesCard/ServicesCard';
import loading from '../../../Images/Dual-Ball.gif';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://intense-castle-43970.herokuapp.com/getService')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, []);
    const { push } = useHistory();
    const handleClick = id => {
        push(`/dashboard/order/${id}`)
    }
    return (
        <section className="my-5 py-5">
            <div className="container">
                <div className="text-center">
                    <h3 className="section_title">Provide awesome <span className="section_subtitle">services</span></h3>
                </div>
                <div className="row mt-5 pt-4 g-5">
                    {
                        services.length === 0 &&
                        <div className="d-flex justify-content-center">
                            <img style={{ width: '10%' }} src={loading} alt="Loading..." />
                        </div>
                    }
                    {
                        services.map((service, index) => <ServicesCard service={service} handleClick={handleClick} key={index} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;