import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Button from '../../Shared/Button/Button';

const MakeAdminForm = () => {
    const { handleSubmit, register, errors } = useForm({
        mode: onchange
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = (values) => {
        const userInfo = loggedInUser;
        const newAdmin = { ...values, userInfo }
        fetch('https://intense-castle-43970.herokuapp.com/makeAdmin', {
            method: 'POST',
            body: JSON.stringify(newAdmin),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    alert('Successfully Add a New Admin');
                }
            })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-group">
            <div className="card add_service_card">
                <div className="row g-2">
                    <div className="col-md-6">
                        {/* Email */}
                        <input className="form-control add_text_field" type="email" placeholder="Enter admin email address" name="email" ref={register({ required: "email address is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address" } })} />
                        <p className="error_text">{errors.email && errors.email.message}</p>
                    </div>
                    <div className="col-md-2">
                        {/* Button */}
                        <Button type={"submit"} buttonName={"Submit"} className={"success_button"} />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default MakeAdminForm;