import React, { useState } from "react";
import styled from "styled-components";
import BestPrice from "../../images/best_price.jpeg";
import LoginIcon from '@mui/icons-material/Login';
import Login from './Login';
import SearchBar from '../Miscellaneous/SearchBar';
import Register from './Register';  // Import the Register component

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
            <LoginContainer onClick={() => setModalType('login')}>
                <StyledIcon />
                <StyledP>Login</StyledP>
            </LoginContainer><RegisterContainer onClick={() => setModalType('register')}>
                <StyledP>/Register</StyledP>
            </RegisterContainer>
            {modalType === 'login' && <Login closeModal={() => setModalType('none')} />}
            {modalType === 'register' && <Register closeModal={() => setModalType('none')} />}

        </Wrapper>
    )
}



export default Header;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between; /* Distribute content evenly */
    align-items: center;
    background-color: #BFDBF7;
    padding: 10px;
    margin-bottom: 90px; 
    height:70px;
`;

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin:0px;
    padding: 0;
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
const RegisterContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0;
    padding: 0;
`;

const StyledP = styled.p`
    margin: 0; 
    margin-left: 5px;
    font-weight: bold;
`;

const StyledIcon = styled(LoginIcon)`
    margin: 0;
    margin-right: -5px;  // Adjust this value if needed
`;
