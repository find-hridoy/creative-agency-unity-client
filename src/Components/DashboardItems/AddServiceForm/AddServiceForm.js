import React from 'react';
import { useForm } from "react-hook-form";
import Button from '../../Shared/Button/Button';
import './AddServiceForm.css';

const AddServiceForm = () => {
    const { handleSubmit, register, errors } = useForm({
        mode: onchange
    });
    const onSubmit = (values) => {
        const formData = new FormData();
        formData.append('file', values.file[0]);
        formData.append('title', values.title);
        formData.append('description', values.description);
        fetch('https://intense-castle-43970.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Add Service Successfully");
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="form-group">
                <div className="card add_service_card">
                    <div className="row">
                        <div className="col-md-6">
                            {/* Service  Title*/}
                            <label className="label">Service Title</label>
                            <input className="form-control add_text_field" type="text" placeholder="Enter Title" name="title" ref={register({ required: "title is required", pattern: { value: /[a-zA-Z]+\s[a-zA-Z-]/, message: "invalid title" } })} />
                            <p className="error_text">{errors.title && errors.title.message}</p>
                        </div>
                        <div className="col-md-6">
                            {/* File*/}
                            <label className="label">Icon</label>
                            <input className="form-file add_text_field" name="file" type="file" ref={register({ required: "icon is required" })} />
                            <p className="error_text">{errors.file && errors.file.message}</p>
                        </div>
                        <div className="col-md-6">
                            {/* Description */}
                            <label className="label">Description</label>
                            <textarea className="form-control add_text_field" rows="3" placeholder="Enter Description" name="description" ref={register({ required: "description is required", pattern: { value: /[a-zA-Z]+\s[a-zA-Z-]/, message: "invalid description" } })} />
                            <p className="error_text">{errors.description && errors.description.message}</p>
                        </div>
                    </div>
                </div>
                {/* Button */}
                <div className="text-right mt-4">
                    <Button type={"submit"} buttonName={"Submit"} className={"success_button"} />
                </div>
            </form>
        </>
    );
};

export default AddServiceForm;