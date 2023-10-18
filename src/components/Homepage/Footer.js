  // src/components/Homepage/Footer.js

  import React from "react"
  import styled from "styled-components"
  import Grid from '@mui/material/Grid';
  import IconButton from '@mui/material/IconButton';
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
            <Grid container spacing={6} alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}> 
                <Grid item xs={4}>
                    <IconWrapper>
                      <IconButton color="inherit">
                        <BuildIcon fontSize="large" />
                      </IconButton>
                      <IconLabel>Accessosries</IconLabel>
                    </IconWrapper>
                </Grid>

                <Grid item xs={4}>
                    <IconWrapper>
                      <IconButton color="inherit">
                          <ComputerIcon fontSize="large" />
                      </IconButton>
                      <IconLabel>Electronics</IconLabel>
                    </IconWrapper>
                </Grid>

                <Grid item xs={4}>
                    <IconWrapper>
                      <IconButton color="inherit">
                          <PetsIcon fontSize="large" />
                      </IconButton>
                      <IconLabel>Pets</IconLabel>
                    </IconWrapper>
                </Grid>

                <Grid item xs={4}>
                    <IconWrapper>
                      <IconButton color="inherit">
                          <BrushIcon fontSize="large" />
                      </IconButton>
                      <IconLabel>Beauty</IconLabel>
                    </IconWrapper>
                </Grid>

                <Grid item xs={4}>
                    <IconWrapper>
                      <IconButton color="inherit">
                          <SportsEsportsIcon fontSize="large" />
                      </IconButton>
                      <IconLabel>Gaming</IconLabel>
                    </IconWrapper>
                </Grid>

                <Grid item xs={4}>
                    <IconWrapper>
                      <IconButton color="inherit">
                          <SchoolIcon fontSize="large" />
                      </IconButton>
                      <IconLabel>School</IconLabel>
                    </IconWrapper>
                </Grid>

                <Grid item xs={4}>
                    <IconWrapper>
                      <IconButton color="inherit">
                          <PhotoCameraBackIcon fontSize="large" />
                      </IconButton>
                      <IconLabel>Camera</IconLabel>
                    </IconWrapper>
                </Grid>

                <Grid item xs={4}>
                    <IconWrapper>
                      <IconButton color="inherit">
                          <HouseIcon fontSize="large" />
                      </IconButton>
                      <IconLabel>Home</IconLabel>
                    </IconWrapper>
                </Grid>

                <Grid item xs={4}>
                    <IconWrapper>
                      <IconButton color="inherit">
                         <SportsBasketballIcon fontSize="large" />
                      </IconButton>
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
    text-align: center;
    padding: 20px;
    margin-top: 100px;
    margin-bottom: 50px;
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
    flex-direction: column;
    align-items: center; /* Center horizontally */
    justify-content: center; /* Center vertically */
    height: 100%; /* Ensure the IconWrapper takes the full height of its container */
  `;

  const IconLabel = styled.p`
    margin-top: 10px;
    font-size: 18px;
  `;