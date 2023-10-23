import React, { useState } from 'react';

const Login = () => {
    const [formData, setFormData] = useState({
        identifier: '', // This will handle either email or username
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState(''); // New state for error message

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.identifier,
                    password: formData.password,
                }),
            });

            const data = await response.json();
            if (response.status === 200) {
                console.log(data.message);
                // TODO: Handle successful login here
                setErrorMessage('');
            } else {
                console.error(data.error);
                // Set the error message
                setErrorMessage(data.error);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div className='flex h-screen bg-ashGray'>
            <div className='m-auto w-1/3 text-jet flex flex-wrap justify-center shadow-lg rounded-lg bg-azure'>
                <h1 className='w-full text-4xl tracking-widest text-center'>
                    Login
                </h1>
                {errorMessage && (
                    <p className='w-full text-center text-red-600'>
                        {errorMessage}
                    </p>
                )}
                <form className='m-8 w-1/2' onSubmit={handleSubmit}>
                    <div className='w-full my-6'>
                        <input
                            className='p-2 rounded shadow w-full'
                            type='text'
                            placeholder='Email/Username'
                            name='identifier'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='w-full my-6'>
                        <input
                            className='p-2 rounded shadow w-full'
                            type='password'
                            placeholder='Password'
                            name='password'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <label className='block text-jet text-sm font-bold'>
                            <input
                                className='mr-2 leading-tight'
                                type='checkbox'
                            />
                            <span className='text-sm'>Remember Me</span>
                        </label>
                        <button
                            className='w-1/2 p-2 rounded shadow bg-ashGray text-jet'
                            type='submit'
                        >
                            Sign In
                        </button>
                    </div>
                </form>
                <div className='w-full text-center my-6'>
                    <span className='text-jet text-sm'>Forgot Password?</span>
                </div>
            </div>
        </div>
    );
};

export default Login;
