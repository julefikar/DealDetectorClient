import React, { useState, useContext } from 'react';
import { AuthContext } from '../Authorization/AuthContext';
import { IconButton, TextField, InputAdornment } from '@mui/material';
import { FormControlLabel, Checkbox } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
    const { setIsLoggedIn } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(''); // New state for error message
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(false); // remember me
    const navigate = useNavigate();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const setRemember = (event) => {
        setChecked(event.target.checked); // remember me
    };

    const [formData, setFormData] = useState({
        identifier: '', // This will handle either email or username
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const createAccount = () => {
        navigate("/register");
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
                setIsLoggedIn(true);
                setErrorMessage('');

                //redirect to front page

                navigate("/");


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
        <div className="LoginBackground">
            <div className="LoginContainer">
                <h1 className="LoginText">
                    SIGN IN
                </h1>
                <form className="LoginForm" onSubmit={handleSubmit}>
                    <div className="LoginBox">
                        <TextField
                            className="LoginField"
                            type='text'
                            placeholder='Email/Username'
                            name='identifier'
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
                    <div className="LoginBox">
                        <TextField
                            className="LoginField"
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
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
                    <div className="LoginSubmit">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={setRemember}
                                />
                            }
                            label="Remember me"
                        />
                        <button
                            className='w-1/2 p-2 rounded shadow bg-[#BFDBF7] text-jet'
                            type='submit'
                        >
                            Sign In
                        </button>

                        {errorMessage && (
                            <p className="RegError">
                                {errorMessage}
                            </p>
                        )}

                    </div>
                </form>

                <div className='w-full text-center my-6'>
                    <span className='text-jet text-sm'>Forgot Password?</span>
                </div>

                <div className="NewAccount">
                    <button className='w-1/3 p-2 rounded shadow bg-[#BFDBF7] text-jet  my-6' onClick={createAccount}>Create Account</button>
                </div>

            </div>

        </div>
    );
};

export default Login;
