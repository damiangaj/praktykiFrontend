import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import FormComponent from "../../components/FormComponent/FormComponent";
import config from "../../config";
function EditFormPage() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [initialValues, setInitialValues] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        gender: '',
        hobbies: ''
    });

    useEffect(() => {
        axios.get(`${config.GET_FORM_URL}/${id}`)
            .then(response => {
                setInitialValues(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the form!', error);
            });
    }, [id]);

    const handleFormSubmit = (values) => {
        setInitialValues(values);
        axios.patch(`${config.EDIT_FORM_URL}/${id}`, values)
            .then(response => {
                console.log('Form updated successfully', response.data);
                navigate(`/`);
            })
            .catch(error => {
                console.error('There was an error updating the form!', error);
            });
    };

    return (
        <div className="page-container">
            <h1 className="page-title">Edit Form</h1>
            <FormComponent initialValues={initialValues} onSubmit={handleFormSubmit} />
        </div>
    );
}

export default EditFormPage;
