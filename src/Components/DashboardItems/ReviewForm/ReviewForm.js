import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Button from '../../Shared/Button/Button';

const ReviewForm = () => {
    const { handleSubmit, register, errors } = useForm({
        mode: onchange
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = (values) => {
        const userInfo = loggedInUser;
        const newReview = { ...values, userInfo }
        fetch('https://intense-castle-43970.herokuapp.com/addReview', {
            method: 'POST',
            body: JSON.stringify(newReview),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    alert('Review Send Successfully');
                }
            })
    }
    return (
        <div className="card order_card">
            <form onSubmit={handleSubmit(onSubmit)} className="form-group">

                {/* Name */}
                <input className="form-control text_field" type="text" placeholder="Your name" name="name" ref={register({ required: "name is required", pattern: { value: /[a-zA-Z]+\s[a-zA-Z-]/, message: "invalid name" } })} />
                <p className="error_text">{errors.name && errors.name.message}</p>

                {/* Designation */}
                <input className="form-control text_field" type="text" placeholder="Company’s name, Designation" name="designation" ref={register({ required: "designation is required", pattern: { value: /[a-zA-Z]+\s[a-zA-Z-]/, message: "invalid designation" } })} />
                <p className="error_text">{errors.designation && errors.designation.message}</p>

                {/* Description */}
                <textarea className="form-control text_field" rows="3" placeholder="Description" name="description" ref={register({ required: "description is required", pattern: { value: /[a-zA-Z]+\s[a-zA-Z-]/, message: "invalid description" } })} />
                <p className="error_text">{errors.description && errors.description.message}</p>

                {/* Button */}
                <div className="mt-3">
                    <Button type={"submit"} buttonName={"Submit"} className={"dark_button"} />
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;