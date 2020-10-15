import React, { useEffect, useState } from 'react';
import ClientsFeedbackCard from '../ClientsFeedbackCard/ClientsFeedbackCard';
import loading from '../../../Images/Dual-Ball.gif';

const ClientsFeedback = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://intense-castle-43970.herokuapp.com/getReview')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.log(err))
    }, []);
    return (
        <section className="my-5 py-5">
            <div className="container">
                <div className="text-center">
                    <h3 className="section_title">Clients <span className="section_subtitle">Feedback</span></h3>
                </div>
                <div className="row mt-5 pt-4 gy-4">
                    {
                        reviews.length === 0 &&
                        <div className="d-flex justify-content-center">
                            <img style={{ width: '10%' }} src={loading} alt="Loading..." />
                        </div>
                    }
                    {
                        reviews.map((review, index) => <ClientsFeedbackCard review={review} key={index} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientsFeedback;