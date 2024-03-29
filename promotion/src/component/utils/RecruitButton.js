import React from 'react';
import styled from 'styled-components';

const RecruitButton = () => {
    const RecruitLink = styled.a`
        display: block;
        width: 220px;
        height: 70px;
        margin: 0 auto;
        background: linear-gradient(120deg, #ff9424, #ffdb25, #ff9f36);
        background-size: 400% 400%;
        color: #fff;
        text-align: center;
        letter-spacing: -0.5px;
        line-height: 70px;
        animation: gradient 3s ease-in-out infinite;
        border-radius: 50px;

        @media screen and (max-width: 400px) {
            width: 200px;
            height: 40px;
            line-height: 40px;
        }
    `;

    const RecruitText = styled.span`
        color: white;
        font-size: 28px;
        text-shadow: 1px 2px 3px #000;
        @media screen and (max-width: 400px) {
            font-size: 15px;
        }
    `;
       
    return (
        <RecruitLink href="https://apply.likelion.org" className="RecruitButton">
            <RecruitText>지원하기</RecruitText>
        </RecruitLink>
    );
}

export default RecruitButton;
