import React from 'react';
import styled from 'styled-components';

const Footer = () => {

    const FooterContainer = styled.div`
        bottom: 0;
        width: 100%;
        height: 30px;
        position: fixed;
        
        border-top: 1px solid #e4e4e4;

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
    `;

    const FooterText = styled.span`
        color: grey;
        @media screen and (max-width: 768px) { 
            font-size: 12px
        }
    `;

    const FooterTextStrong = styled.strong`
        font-weight: 600;
        color: white;
        @media screen and (max-width: 768px) { 
            font-size: 12px;
        }
    `;

    return (
        <FooterContainer>
            <FooterText>Copyright 2021 <FooterTextStrong>Choi Min Seok</FooterTextStrong> All rights reserved.</FooterText>
        </FooterContainer>
    );
}

export default Footer;
