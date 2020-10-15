import React from 'react';
import './ClientsFeedbackCard.css';

const ClientsFeedbackCard = ({ review }) => {
    const { name, designation, description, userInfo } = review;
    return (
        <>
            <div className="col-10 col-sm-10 col-md-6 col-lg-4 mx-auto">
                <div className="card clients_feedback_card">
                    <div className="card-body">
                        <div className="d-flex align-items-center py-3">
                            <img className="clients_feedback_card_img rounded-circle" src={userInfo.photo} alt="Icon" />
                            <div className="ml-4">
                                <h5 className="clients_feedback_card_name">{name}</h5>
                                <h6 className="clients_feedback_card_status">{designation}</h6>
                            </div>
                        </div>
                        <p className="clients_feedback_card_description">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientsFeedbackCard;