import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceListCard from '../../../Components/DashboardItems/ServiceListCard/ServiceListCard';
import Sidebar from '../../../Components/Shared/Sidebar/Sidebar';
import loading from '../../../Images/Dual-Ball.gif';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://intense-castle-43970.herokuapp.com/getOrder?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
            .catch(err => {
                // Error
            })
    }, [loggedInUser.email]);
    return (
        <section className="container-fluid py-4">
            <div className="row">
                <div className="col-8 col-sm-8 col-md-8 col-lg-2 pl-4">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="d-flex justify-content-between mx-5">
                        <h3 className="common_title">Service List</h3>
                        <h3 className="clients_name">{loggedInUser.name}</h3>
                    </div>
                    <div className="extract_bg">
                        <div className="row">
                            <div className="col-8 col-sm-8 col-md-8 col-lg-6 ml-5 mt-5">
                                <div className="row g-4">
                                    {
                                        orders.map((order, index) => <ServiceListCard order={order} key={index} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    orders.length === 0 &&
                    <div className="container-fluid mt-5">
                        <div className="d-flex justify-content-center">
                            <img style={{ width: '10%', background: 'transparent' }} src={loading} alt="Loading..." />
                        </div>
                    </div>
                }
            </div>
        </section>
    );
};

export default ServiceList;