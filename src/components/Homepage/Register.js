import React, { useState } from 'react';
import PasswordChecklist from 'react-password-checklist';
import { IconButton, TextField, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); // New state for error message

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

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
            setErrorMessage('Passwords do not match');
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
                setErrorMessage('');

                //redirect to login
                navigate("/login");

            } else {
                console.error(data.error);
                setErrorMessage(data.error);
            }
        } catch (error) {
            console.error('Error registering:', error);
            setErrorMessage('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div className="RegisterBG">
            <div className="RegContainer">
                <h1 className="RegText">
                    SIGN UP
                </h1>
                <form className="RegForm" onSubmit={handleSubmit}>
                    <div className="RegBox">
                        <TextField
                            className="RegField"
                            type='text'
                            placeholder='Create Username'
                            name='username'
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className="RegBox">
                        <TextField
                            className="RegField"
                            type='email'
                            placeholder='Enter Email'
                            name='email'
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className="RegBox">
                        <TextField
                            className="RegField"
                            type='password'
                            placeholder='Create Password'
                            name='password'
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleShowPassword} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton >
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className="RegBox">
                        <TextField
                            className="RegField"
                            type='password'
                            placeholder='Confirm Password'
                            name='confirmPassword'
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleShowPassword} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton >
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                   
                    <PasswordChecklist
                        rules={[
                            'minLength',
                            'capital',
                            'lowercase',
                            'number',
                            'match',
                        ]}
                        minLength={6}
                        value={formData.password}
                        valueAgain={formData.confirmPassword}
                        className='mb-4'
                    />
                    <div className="RegSubmit">
                        <button
                            className='w-1/2 p-2 rounded shadow bg-[#BFDBF7] text-jet'
                            type='submit'
                        >
                            Sign Up
                        </button>

                        {errorMessage && (
                            <p className="RegError">
                                {errorMessage}
                            </p>
                        )}
                    </div>

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
