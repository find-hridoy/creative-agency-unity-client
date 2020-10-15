import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import AddServiceForm from '../../../Components/DashboardItems/AddServiceForm/AddServiceForm';
import Sidebar from '../../../Components/Shared/Sidebar/Sidebar';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section className="container-fluid py-4">
            <div className="row">
                <div className="col-md-2 pl-4">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="d-flex justify-content-between mx-5">
                        <h3 className="common_title">Add Service</h3>
                        <h3 className="clients_name">{loggedInUser.name}</h3>
                    </div>
                    <div className="extract_bg">
                        <div className="row">
                            <div className="col-md-10 ml-5 mt-5">
                                <AddServiceForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;