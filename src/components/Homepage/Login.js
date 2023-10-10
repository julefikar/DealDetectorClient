import React, { useState } from 'react';
import styled from 'styled-components';

const Login = ({ closeModal }) => {
    const [formData, setFormData] = useState({
        identifier: '',  // This will handle either email or username
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: formData.identifier,  // Assuming backend uses 'username' for both email & username
                    password: formData.password
                })
            });

            const data = await response.json();
            if (response.status === 200) {
                console.log(data.message);
                // Handle successful login, like setting user session or redirecting
            } else {
                console.error(data.error);
                // Handle login errors, like showing an error message to the user
            }
        } catch (error) {
            console.error("Error logging in:", error);
            // Handle other errors, like network issues
        }
    };

    return (
        <Overlay onClick={closeModal}>
            <LoginContainer onClick={e => e.stopPropagation()}>
                <Title>Login</Title>
                <Input name="identifier" type="text" placeholder="Email/Username" onChange={handleInputChange} />
                <Input name="password" type="password" placeholder="Password" onChange={handleInputChange} />
                <CheckboxContainer>
                    <input type="checkbox" id="rememberMe" />
                    <label htmlFor="rememberMe">Remember Me</label>
                </CheckboxContainer>
                <Button onClick={handleSubmit}>Sign In</Button>
                <ForgotPassword>Forgot Password?</ForgotPassword>
            </LoginContainer>
        </Overlay>
    );
}

export default Login;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginContainer = styled.div`
    background-color: #BFDBF7;
    padding: 40px;
    border-radius: 10px;
    width: 300px;
    text-align: center;
`;

const Title = styled.h1`
    color: black;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    background-color: white;
    color: black;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const CheckboxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;

    input[type="checkbox"] {
        margin-right: 5px;
    }
`;

const Button = styled.button`
    background-color: #231FE8;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    display: block;
    width: 100%;
`;

const ForgotPassword = styled.p`
    margin-top: 10px;
    color: black;
    cursor: pointer;
`;

