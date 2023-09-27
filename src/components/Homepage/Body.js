import React from 'react';
import styled from 'styled-components';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareIcon from '@mui/icons-material/Compare';

const Body = () => {
    return (
        <Wrapper>
            <TextContainer>
                <StyledH1>Find the right price and best deals when shopping!</StyledH1>
            </TextContainer>
            <IconContainer>
                <IconWrapper>
                    <NotificationsIcon fontSize="large" />
                    <IconLabel>Notifications</IconLabel>
                </IconWrapper>
                <IconWrapper>
                    <FavoriteIcon fontSize="large" />
                    <IconLabel>Favorites</IconLabel>
                </IconWrapper>
                <IconWrapper>
                    <CompareIcon fontSize="large" />
                    <IconLabel>Compare Pricing</IconLabel>
                </IconWrapper>
            </IconContainer>
        </Wrapper>
    );
}

export default Body;

const Wrapper = styled.div`
    padding: 20px;
    text-align: center;
    background-color: #BFDBF7;
`;

const TextContainer = styled.div`
    margin-bottom: 20px;
`;

const StyledH1 = styled.h1`
    font-size: 24px;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const IconLabel = styled.p`
    margin-top: 10px;
    font-size: 18px;
`;
