import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ClientsTotalServiceTable from '../../../Components/DashboardItems/ClientsTotalServiceTable/ClientsTotalServiceTable';
import AdminSidebar from '../../../Components/Shared/AdminSideBar/AdminSidebar';
import loading from '../../../Images/Dual-Ball.gif';

const ClientsTotalService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [totalServices, setTotalServices] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://intense-castle-43970.herokuapp.com/getTotalOrder', {
            method: 'POST',
            body: JSON.stringify({ email: loggedInUser.email }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setTotalServices(data);
            }).catch(err => {
                if (err) {
                    setIsAdmin(true);
                }
            })
    }, [loggedInUser.email]);
    return (
        <section className="container-fluid py-4">
            {
                isAdmin ?
                    <div>
                        <h2 className="text-danger text-center mt-5 pt-4">Verify admin...</h2>
                    </div>
                    :
                    <div className="row">
                        <div className="col-8 col-sm-8 col-md-8 col-lg-2 pl-4">
                            <AdminSidebar />
                        </div>
                        <div className="col-md-10">
                            <div className="d-flex justify-content-between mx-5">
                                <h3 className="common_title">ClientsTotalService</h3>
                                <h3 className="clients_name">{loggedInUser.name}</h3>
                            </div>
                            <div className="extract_bg">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-10 ml-5 mt-5">
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
                                                        totalServices.map((service, index) => <ClientsTotalServiceTable service={service} key={index} />)
                                                    }
                                                </table>

                                            </div>
                                            {
                                                totalServices.length === 0 &&
                                                <div className="d-flex justify-content-center">
                                                    <img style={{ width: '20%', background: 'transparent' }} src={loading} alt="Loading..." />
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </section>
    );
};

export default ClientsTotalService;