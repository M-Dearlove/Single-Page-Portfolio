import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Your name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'An email address is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address.'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'A message is required.'
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // clear errors
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        alert('Thank you for your message!');

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="container text-center">
            <h1>Hello {userName}</h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={formData.name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={formData.email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="E-mail"
                />
                <textarea
                    value={formData.message}
                    name="message"
                    onChange={handleInputChange}
                    placeholder="message"
                    rows="4"
                />
                <button type="submit">
                    Submit
                </button>
            </form>
            {errors && (
                <div>
                    <p className="error-text">{errors}</p>
                </div>
            )}
        </div>
    );
}