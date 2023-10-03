  // src/components/Homepage/Footer.js

  import React from "react"
  import styled from "styled-components"
  import Grid from '@mui/material/Grid';
  import BuildIcon from '@mui/icons-material/Build';
  import ComputerIcon from '@mui/icons-material/Computer';
  import PetsIcon from '@mui/icons-material/Pets';
  import BrushIcon from '@mui/icons-material/Brush';
  import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
  import SchoolIcon from '@mui/icons-material/School';
  import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
  import HouseIcon from '@mui/icons-material/House';
  import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

  const Footer = () => {
    return (
      <Wrapper>
          <TextContainer>
              <StyledH1>Categories</StyledH1>
          </TextContainer>
            <Grid container spacing={6} direction="row" justifyContent="space-around"   alignItems="flex-end" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}> 
                <Grid item xs={4}>
                    <IconWrapper>
                      <BuildIcon fontSize="large" />
                      <IconLabel>Accessories</IconLabel>
                    </IconWrapper>
                </Grid>

                <Grid item xs={4}>
                    <IconWrapper>
                      <ComputerIcon fontSize="large" />
                      <IconLabel>Electronics</IconLabel>
                    </IconWrapper>
                </Grid>

                <Grid item xs={4}>
                    <IconWrapper>
                      <PetsIcon fontSize="large" />
                      <IconLabel>Pets</IconLabel>
                    </IconWrapper>
                </Grid>

                <Grid item xs={4}>
                    <IconWrapper>
                      <BrushIcon fontSize="large" />
                      <IconLabel>Beauty</IconLabel>
                    </IconWrapper>
                </Grid>

                <Grid item xs={4}>
                    <IconWrapper>
                      <SportsEsportsIcon fontSize="large" />
                      <IconLabel>Gaming</IconLabel>
                    </IconWrapper>
                </Grid>

                <Grid item xs={4}>
                    <IconWrapper>
                      <SchoolIcon fontSize="large" />
                      <IconLabel>School</IconLabel>
                    </IconWrapper>
                </Grid>

                <Grid item xs={4}>
                    <IconWrapper>
                      <PhotoCameraBackIcon fontSize="large" />
                      <IconLabel>Camera</IconLabel>
                    </IconWrapper>
                </Grid>

                <Grid item xs={4}>
                    <IconWrapper>
                      <HouseIcon fontSize="large" />
                      <IconLabel>Home</IconLabel>
                    </IconWrapper>
                </Grid>

                <Grid item xs={4}>
                    <IconWrapper>
                      <SportsBasketballIcon fontSize="large" />
                      <IconLabel>Sports</IconLabel>
                    </IconWrapper>
                </Grid>
          </Grid>      
      </Wrapper>
    )
  }

  export default Footer;

  const Wrapper = styled.div`
      background-color: #BFDBF7;
      text-align: left;
      padding: 20px;
      margin-top:100px;
      margin-bottom:50px;
  `;

  const TextContainer = styled.div`
      margin-bottom: 20px;
  `;

  const StyledH1 = styled.h1`
      font-size: 20px;
      font-weight: 700;
    `;

  const IconWrapper = styled.div`
      display: flex;
      align-items: center;
  `;

  const IconLabel = styled.p`
      margin-top: 15px;
      font-size: 18px;
  `;
