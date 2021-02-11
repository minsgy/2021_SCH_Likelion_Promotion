import React from 'react';
import styled from "styled-components";
import About from './CenterPanel/About';
import Curriculum from './CenterPanel/Curriculum';
import Recruit from './CenterPanel/Recruit';
import SNS from './CenterPanel/SNS';
const Center = () => {
    const CenterContainer = styled.div`
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        background-color: black;
    `;

    return (
        <>
        <CenterContainer id="About">
            <About />
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
