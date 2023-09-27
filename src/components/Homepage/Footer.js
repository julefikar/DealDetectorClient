// src/components/Homepage/Footer.js

import React from "react"
import styled from "styled-components"
import Accessories from "../../images/accessories.png"
import Electronics from "../../images/electronics.png"
import Pets from "../../images/pets.png"
import Beauty from "../../images/beauty.png"
import Gaming from "../../images/gaming.png"
import School from "../../images/school.png"
import Camera from "../../images/camera.png"
import Home from "../../images/home.png"
import Sports from "../../images/sports.png"

function Footer (){
  return (
    <Wrapper>
        <ImageContainer>
        <img src = {Accessories} alt = "Accessories"/> Accessories
        <img src = {Electronics} alt = "Electronics"/> Electronics
        <img src = {Pets} alt = "Pets"/> Pets
        </ImageContainer>

        <ImageContainer>
        <img src = {Beauty} alt = "Beauty"/> Beauty
        <img src = {Gaming} alt = "Gaming"/> Gaming
        <img src = {School} alt = "School"/> School
        </ImageContainer>

        <ImageContainer>
        <img src = {Camera} alt = "Camera"/> Camera
        <img src = {Home} alt = "Home"/> Home
        <img src = {Sports} alt = "Sports"/> Sports
        </ImageContainer>

    </Wrapper>
  )
}

export default Footer;
const Wrapper = styled.div`
    display: flex-wrap:wrap;
    background-color: lightblue;
    padding: 100px;
    bottom: 0;
    margin-top:200px;
    margin-bottom:10px;
    position: relative;
`;

const ImageContainer = styled.div`
    img {
        display: flex-wrap:nowrap
        max-width: 20px; 
        height: 20px;
        position: relative;
        padding: 10px;
    }
`; 



