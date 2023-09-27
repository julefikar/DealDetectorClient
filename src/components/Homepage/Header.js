import React from "react";
import styled from "styled-components";
import BestPrice from "../../images/best_price.jpeg";
import LoginIcon from '@mui/icons-material/Login';

import SearchBar from "../Miscellaneous/SearchBar";


const Header = () => {
    return (
        <Wrapper>
            <Navbar>
                <ImageContainer>
                    <img src={BestPrice} alt="Best Price" />
                </ImageContainer>
                <Title>DealDetector</Title>
            </Navbar>
            <SearchBar />
            <LoginContainer>
                <LoginIcon />
                <StyledP>Login/Register</StyledP>
            </LoginContainer>
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

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StyledP = styled.p`
    margin-left: 5px; 
    font-weight: bold;
`;
