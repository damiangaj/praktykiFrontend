import React from 'react';
import './FormFrame.css';
import { useNavigate } from 'react-router-dom';
function FormFrame({ form }) {
    let navigate = useNavigate();
    const handleFormClick = (form) => {
        navigate(`/edit/${form.id}`);
    }
    return (

            <div className="form-frame"  onClick={() => handleFormClick(form)}>
                <h3>{form.firstName} {form.lastName}</h3>
                <p>Phone: {form.phone}</p>
                <p>Gender: {form.gender}</p>
                <p>Hobbies: {form.hobbies}</p>
            </div>

    );
}

export default FormFrame;
