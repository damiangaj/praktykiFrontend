import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './FormComponent.css';

function FormComponent({ initialValues, onSubmit }) {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(3, 'First Name must be at least 3 characters long')
            .required('First Name is required'),
        lastName: Yup.string()
            .min(3, 'Last Name must be at least 3 characters long')
            .required('Last Name is required'),
        phone: Yup.string()
            .matches(/^[0-9]+$/, 'Phone number must contain only digits')
            .min(9, 'Phone number must be exactly 9 digits')
            .max(9, 'Phone number must be exactly 9 digits')
            .required('Phone number is required'),
        gender: Yup.string().required('Gender is required'),
        hobbies: Yup.string()
            .required('Hobbies are required')
            .max(29, 'Hobbies must be at most 29 characters long'),

    });

    return (
        <div className="form-container">
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    onSubmit(values);
                    resetForm();
                }}
            >
                {({ errors, touched }) => (
                    <Form className="form-wrapper">
                        <div className="form-field">
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" className="form-input" />
                            <ErrorMessage name="firstName" component="div" className="error" style={{ color: 'red', fontSize: '12px' }} />
                        </div>
                        <div className="form-field">
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" className="form-input" />
                            <ErrorMessage name="lastName" component="div" className="error" style={{ color: 'red', fontSize: '12px' }} />
                        </div>
                        <div className="form-field">
                            <label htmlFor="phone">Phone number</label>
                            <Field name="phone" type="phone" className="form-input" />
                            <ErrorMessage name="phone" component="div" className="error" style={{ color: 'red', fontSize: '12px' }} />
                        </div>
                        <div className="form-field">
                            <label htmlFor="gender">Gender</label>
                            <Field name="gender" as="select" className="form-select">
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Field>
                            <ErrorMessage name="gender" component="div" className="error" style={{ color: 'red', fontSize: '12px' }} />
                        </div>
                        <div className="form-field">
                            <label htmlFor="hobbies">Hobbies</label>
                            <Field name="hobbies" type="text" className="form-input" />
                            <ErrorMessage name="hobbies" component="div" className="error" style={{ color: 'red', fontSize: '12px' }} />
                        </div>
                        <button type="submit" className="form-button">Save Changes</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormComponent;
