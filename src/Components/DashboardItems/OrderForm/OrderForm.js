import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Button from '../../Shared/Button/Button';

const OrderForm = ({ loggedInUser, serviceData }) => {
    const { name, email } = loggedInUser;
    const { handleSubmit, register, errors } = useForm({
        mode: onchange
    });
    const onSubmit = (values) => {
        let icon;
        if (serviceData) {
            icon = serviceData.icons;
        } else {
            icon = "https://i.ibb.co/SKW28Xn/service5.png";
        }
        const newOrder = { ...values, icon };
        fetch('https://intense-castle-43970.herokuapp.com/addOrder', {
            method: 'POST',
            body: JSON.stringify(newOrder),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    alert('Order Added Successfully');
                }
            })
    }
    return (
        <div className="card order_card">
            <form onSubmit={handleSubmit(onSubmit)} className="form-group">

                {/* Name */}
                <input className="form-control text_field" type="text" placeholder="Your name / company's name" name="name" defaultValue={name} ref={register({ required: "name is required", pattern: { value: /[a-zA-Z]+\s[a-zA-Z-]/, message: "invalid name" } })} />
                <p className="error_text">{errors.name && errors.name.message}</p>

                {/* Email */}
                <input className="form-control text_field" type="email" placeholder="Your email address" name="email" defaultValue={email} ref={register({ required: "email address is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address" } })} />
                <p className="error_text">{errors.email && errors.email.message}</p>

                {/* Service  Title*/}
                <input className="form-control text_field" type="text" placeholder="Title" name="title" defaultValue={(serviceData ? serviceData.title : "")} ref={register({ required: "title is required", pattern: { value: /[a-zA-Z]+\s[a-zA-Z-]/, message: "invalid title" } })} />
                <p className="error_text">{errors.title && errors.title.message}</p>

                {/* Details */}
                <textarea className="form-control text_field" rows="3" placeholder="Project Details" name="details" defaultValue={(serviceData ? serviceData.description : "")} ref={register({ required: "details is required", pattern: { value: /[a-zA-Z]+\s[a-zA-Z-]/, message: "invalid details" } })} />
                <p className="error_text">{errors.details && errors.details.message}</p>

                <div className="row g-2">
                    <div className="col-md-6">
                        {/* Price*/}
                        <input className="form-control text_field" type="number" placeholder="Price" name="price" defaultValue="59" ref={register({ required: "price is required" })} />
                        <p className="error_text">{errors.price && errors.price.message}</p>
                    </div>
                    <div className="col-md-6">
                        {/* File*/}
                        <input className="form-file text_field h-75" type="file" placeholder="Upload project file" name="img" />
                    </div>
                </div>
                {/* Button */}
                <div className="mt-3">
                    <Button type={"submit"} buttonName={"Send"} className={"dark_button"} />
                </div>
            </form>
        </div>
    );
};

export default OrderForm;