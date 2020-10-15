import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ClientsTotalServiceTable from '../../../Components/DashboardItems/ClientsTotalServiceTable/ClientsTotalServiceTable';
import Sidebar from '../../../Components/Shared/Sidebar/Sidebar';
import loading from '../../../Images/Dual-Ball.gif';

const ClientsTotalService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [totalServices, setTotalServices] = useState([]);
    useEffect(() => {
        fetch('https://intense-castle-43970.herokuapp.com/getTotalOrder', {
            method: 'POST',
            body: JSON.stringify({ email: loggedInUser.email }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => setTotalServices(data))
    }, []);
    return (
        <section className="container-fluid py-4">
            <div className="row">
                <div className="col-md-2 pl-4">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="d-flex justify-content-between mx-5">
                        <h3 className="common_title">ClientsTotalService</h3>
                        <h3 className="clients_name">{loggedInUser.name}</h3>
                    </div>
                    <div className="extract_bg">
                        <div className="row">
                            <div className="col-md-10 ml-5 mt-5">
                                <div className="card add_service_card">
                                    <div className="card-body">
                                        <table className="table table-borderless">
                                            <thead className="t_head">
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email ID</th>
                                                    <th scope="col">Service</th>
                                                    <th scope="col">Project Details</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            {
                                                totalServices.length === 0 &&
                                                <div className="d-flex justify-content-center">
                                                    <img style={{ width: '20%', background: 'transparent' }} src={loading} alt="Loading..." />
                                                </div>
                                            }
                                            {
                                                totalServices.map((service, index) => <ClientsTotalServiceTable service={service} key={index} />)
                                            }
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsTotalService;