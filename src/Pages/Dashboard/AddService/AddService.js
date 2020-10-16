import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AddServiceForm from '../../../Components/DashboardItems/AddServiceForm/AddServiceForm';
import AdminSidebar from '../../../Components/Shared/AdminSideBar/AdminSidebar';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://intense-castle-43970.herokuapp.com/isAdmin', {
            method: 'POST',
            body: JSON.stringify({ email: loggedInUser.email }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setIsAdmin(data)
            })
    }, [loggedInUser.email])
    return (
        <section className="container-fluid py-4">
            {
                isAdmin ?
                    <div className="row">
                        <div className="col-8 col-sm-8 col-md-8 col-lg-2 pl-4">
                            <AdminSidebar />
                        </div>
                        <div className="col-md-10">
                            <div className="d-flex justify-content-between mx-5">
                                <h3 className="common_title">Add Service</h3>
                                <h3 className="clients_name">{loggedInUser.name}</h3>
                            </div>
                            <div className="extract_bg">
                                <div className="row">
                                    <div className="col-10 col-sm-10 col-md-10 col-lg-10 ml-5 mt-5">
                                        <AddServiceForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <h2 className="text-danger text-center mt-5 pt-4">Verify admin...</h2>
                    </div>
            }
        </section>
    );
};

export default AddService;