import React from 'react';
import { useForm } from "react-hook-form";
import Button from '../../Shared/Button/Button';
import './FooterContact.css';

const FooterContact = () => {
    const { handleSubmit, register, errors } = useForm({
        mode: onchange
    });
    const onSubmit = (values) => {
        console.log(values);
    }
    return (
        <div className="card footer_card">
            <form onSubmit={handleSubmit(onSubmit)} className="form-group">
                <input className="form-control input_field" type="email" placeholder="Your email address" name="email" ref={register({ required: "email address is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address" } })} />
                <p className="error_text">{errors.email && errors.email.message}</p>

                <input className="form-control input_field" type="text" placeholder="Your name / company's name" name="name" ref={register({ required: "name is required", pattern: { value: /[a-zA-Z]+\s[a-zA-Z-]/, message: "invalid name" } })} />
                <p className="error_text">{errors.name && errors.name.message}</p>

                <textarea className="form-control input_field" rows="8" placeholder="Your message" name="message" ref={register({ required: "message is required", pattern: { value: /[a-zA-Z]+\s[a-zA-Z-]/, message: "invalid message" } })} />
                <p className="error_text">{errors.message && errors.message.message}</p>

                <div className="mt-3">
                    <Button type={"submit"} buttonName={"Send"} className={"dark_button"} />
                </div>
            </form>
        </div>
    );
};

export default FooterContact;