import React from 'react';
const ServiceListCard = ({ order }) => {
    // const { title, details, icon } = order;
    return (
        <div className="col-md-6">
            <div className="card add_service_card">
                <div className="d-flex justify-content-between">
                    {
                        order.icon.icon ? <img style={{ height: '60px' }} src={`data:image/jpeg;base64,${order.icon.icon}`} alt="Icon" />
                            : <img style={{ height: '60px' }} src={order.icon} alt="Icon" />
                    }
                    <button className="btn btn-outline-success h-25 w-25">Done</button>
                </div>
                <h5 className="service_card_title">{order.title}</h5>
                <p className="service_card_description">{order.details}</p>
            </div>
        </div>
    );
};

export default ServiceListCard;