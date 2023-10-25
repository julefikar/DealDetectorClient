import React from 'react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:5000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                }),
            });

            const data = await response.json();
            if (response.status === 200) {
                console.log(data.message);
            } else {
                console.error(data.error);
            }
        } catch (error) {
            console.error('Error submitting:', error);
        }
    };
    

    return (
        <div className='flex h-screen bg-ashGray'>
            <div className='m-auto w-1/3 text-jet flex flex-wrap justify-center shadow-lg rounded-lg bg-azure'>
                <h1 className='w-full text-4xl tracking-widest text-center mb-6'>
                    Contact Us
                </h1>
                <form className='m-8 w-2/3' onSubmit={handleSubmit}>
                    <input
                        className='p-2 rounded shadow w-full mb-4'
                        type='text'
                        placeholder='Full Name'
                        name='name'
                        onChange={handleInputChange}
                    />
                    <input
                        className='p-2 rounded shadow w-full mb-4'
                        type='email'
                        placeholder='Enter Email'
                        name='email'
                        onChange={handleInputChange}
                    />
                    <input
                        className='p-2 rounded shadow w-full mb-4'
                        type='text'
                        placeholder='Write Message'
                        name='subject'
                        onChange={handleInputChange}
                    />

                    <button
                        className='w-full p-2 rounded shadow bg-ashGray text-jet mb-4'
                        type='submit'
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;