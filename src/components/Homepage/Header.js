import React, { useState } from "react";
import styled from "styled-components";
import BestPrice from "../../images/best_price.jpeg";
import LoginIcon from "@mui/icons-material/Login";
import Login from './Login';
import SearchBar from '../Miscellaneous/SearchBar';
import Register from './Register';

const Header = () => {
    const [modalType, setModalType] = useState('none');  // 'none', 'login', or 'register'

    return (
        <Wrapper>
            <Navbar>
                <ImageContainer>
                    <img src={BestPrice} alt="Best Price" />
                </ImageContainer>
                <Title>DealDetector</Title>
            </Navbar>
            <SearchBar />
            <ButtonContainer>
                <Button onClick={() => setModalType('login')} login>
                    <StyledIcon />
                    <ButtonText>Login</ButtonText>
                </Button>
                <Button onClick={() => setModalType('register')}>
                    <ButtonText>Register</ButtonText>
                </Button>
            </ButtonContainer>
            {modalType === 'login' && <Login closeModal={() => setModalType('none')} />}
            {modalType === 'register' && <Register closeModal={() => setModalType('none')} />}
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #BFDBF7;
    padding: 10px;
    margin-bottom: 90px;
    height: 70px;
`;

const Navbar = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.h1`
    font-family: 'Pacifico', cursive;
    font-size: 24px;
`;

const ImageContainer = styled.div`
    margin-right: 10px;

    img {
        max-width: 100px;
        height: auto;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Button = styled.button`
    background-color: ${props => (props.login ? "#0366d6" : "#28a745")};
    color: white;
    border: none;
    border-radius: 6px;
    padding: 12px 16px; /* Increase padding as needed */
    margin-right: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 36px; /* Set a fixed height for both buttons */

    &:hover {
        opacity: 0.8;
    }
`;

const StyledIcon = styled(LoginIcon)`
    margin-right: 8px;
`;

const ButtonText = styled.span`
    font-weight: bold;
`;
