import React from 'react';
import styled from 'styled-components';

const RecruitButton = () => {
    const RecruitLink = styled.a`
        display: block;
        width: 220px;
        height: 70px;
        margin: 0 auto;
        background: linear-gradient(120deg, #6559ae, #ff7159, #6559ae);
        background-size: 400% 400%;
        color: #fff;
        text-align: center;
        letter-spacing: -0.5px;
        line-height: 70px;
        animation: gradient 3s ease-in-out infinite;
        border-radius: 50px;

        @media screen and (max-width: 370px) {
            font-size: 25px;
            width: 200px;
        }
    `;

    const RecruitText = styled.span`
        color: white;
        font-size: 28px;
        @media screen and (max-width: 370px) {
            font-size: 25px;
            text-shadow: 1px 1px 1px #000;
        }
    `;
    return (
        <RecruitLink href="https://github.com/minsgy" className="RecruitButton">
            <RecruitText>지원하기</RecruitText>
        </RecruitLink>
    );
}

export default RecruitButton;
