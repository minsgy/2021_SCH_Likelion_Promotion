import React from 'react';
import styled from "styled-components";
import AboutImg from '../assets/Image/about_img.png';
import About from './CenterPanel/About';
import History from './CenterPanel/History';
import Curriculum from './CenterPanel/Curriculum';
import Recruit from './CenterPanel/Recruit';
import SNS from './CenterPanel/SNS';
const Center = () => {
    const CenterContainer = styled.div`
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        &#About{
            padding-top: 80px;
        }
      
    `;

    const CenterDisplay = styled.div`
        position: fixed;
        top:0;
        left:0;
        bottom:0;
        right: 0;
        background: url(${AboutImg})  no-repeat;
        background-size: cover;
        z-index: -1;
    `;

    return (
        <>
        <CenterDisplay/>
        <CenterContainer id="About">
            <About />
        </CenterContainer>
        <CenterContainer id="History">
            <History />
        </CenterContainer>
        <CenterContainer id="Curriculum">
            <Curriculum />
        </CenterContainer>
        <CenterContainer id="Recruit">
            <Recruit />
        </CenterContainer>
        <CenterContainer id="SNS">
            <SNS />
        </CenterContainer>
        </>
    );

}

export default Center;
