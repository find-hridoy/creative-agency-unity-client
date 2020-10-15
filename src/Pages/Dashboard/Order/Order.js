import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import OrderForm from '../../../Components/DashboardItems/OrderForm/OrderForm';
import Sidebar from '../../../Components/Shared/Sidebar/Sidebar';
import './Order.css';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // Find Service Data with id
    const [serviceData, setServiceData] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch('https://intense-castle-43970.herokuapp.com/getService')
            .then(res => res.json())
            .then(data => {
                const newServiceData = data.find(e => id === e._id);
                setServiceData(newServiceData);
            })
            .catch(err => console.log(err))
    }, [id]);
    return (
        <section className="container-fluid py-4">
            <div className="row">
                <div className="col-md-2 pl-4">
                    <Sidebar id={id} />
                </div>
                <div className="col-md-10">
                    <div className="d-flex justify-content-between mx-5">
                        <h3 className="common_title">Order</h3>
                        <h3 className="clients_name">{loggedInUser.name}</h3>
                    </div>
                    <div className="extract_bg">
                        <div className="row">
                            <div className="col-md-6 ml-5 mt-5">
                                <OrderForm loggedInUser={loggedInUser} serviceData={serviceData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;