import React, { useState } from 'react';
import PasswordChecklist from 'react-password-checklist';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            console.error('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();
            if (response.status === 200) {
                console.log(data.message);
            } else {
                console.error(data.error);
            }
        } catch (error) {
            console.error('Error registering:', error);
        }
    };

    return (
        <div className='flex h-screen bg-ashGray'>
            <div className='m-auto w-1/3 text-jet flex flex-wrap justify-center shadow-lg rounded-lg bg-azure'>
                <h1 className='w-full text-4xl tracking-widest text-center mb-6'>
                    Register
                </h1>
                <form className='m-8 w-2/3' onSubmit={handleSubmit}>
                    <input
                        className='p-2 rounded shadow w-full mb-4'
                        type='text'
                        placeholder='Create Username'
                        name='username'
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
                        type='password'
                        placeholder='Create Password'
                        name='password'
                        onChange={handleInputChange}
                    />
                    <input
                        className='p-2 rounded shadow w-full mb-4'
                        type='password'
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        onChange={handleInputChange}
                    />

                    <PasswordChecklist
                        rules={[
                            'minLength',
                            'capital',
                            'lowercase',
                            'specialChar',
                            'number',
                            'match',
                        ]}
                        minLength={10}
                        value={formData.password}
                        valueAgain={formData.confirmPassword}
                        className='mb-4'
                    />

                    <button
                        className='w-full p-2 rounded shadow bg-ashGray text-jet mb-4'
                        type='submit'
                    >
                        Sign Up
                    </button>
                    <div className='text-center'>
                        <span className='text-jet text-sm'>
                            Already a User?
                            <Link
                                to='/login'
                                className='ml-2 text-jet underline'
                            >
                                Login
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
