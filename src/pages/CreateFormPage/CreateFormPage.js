import React, { useState } from 'react';
import FormComponent from "../../components/FormComponent/FormComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './CreateFormPage.css';
import config from "../../config";

function CreateFormPage() {
    let navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        gender: '',
        hobbies: ''
    });
    const handleFormSubmit = (values) => {
        setInitialValues(values);
        axios.post(config.CREATE_FORM_URL, values)
            .then(response => {
                console.log('Form created successfully', response.data);
                navigate(`/`);
            })
            .catch(error => {
                console.error('There was an error creating the form!', error);
            });
    };

    return (
        <div className="page-container">
            <h1 className="page-title">Create Form</h1>
            <FormComponent initialValues={initialValues} onSubmit={handleFormSubmit} />
        </div>
    );
}

export default CreateFormPage;
