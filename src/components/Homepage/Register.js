import React from 'react';
import styled from 'styled-components';

const Register = ({ closeModal }) => {
    return (
        <Overlay onClick={closeModal}>
            <RegisterContainer onClick={e => e.stopPropagation()}>
                <Title>Register</Title>
                <Input type="text" placeholder="Create Username" />
                <Input type="email" placeholder="Enter Email" />
                <Input type="password" placeholder="Create Password" />
                <Input type="password" placeholder="Confirm Password" />
                <Button>Sign Up</Button>
                <AlreadyUser>Already a User? <ClickableText>Click Here</ClickableText></AlreadyUser>
            </RegisterContainer>
        </Overlay>
    );
}

export default Register;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const RegisterContainer = styled.div`
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

const ClickableText = styled.p`
    color: black;
    cursor: pointer;
`;

const AlreadyUser = styled.div`
    margin-top: 20px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;

    ${ClickableText} {
        margin-left: 5px;
    }
`;


