import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/Image/logo.png';
import {FaTrophy} from "react-icons/fa";
import RecruitButton from '../../utils/RecruitButton';


const About = () => {
    
    const AboutContainer = styled.div`
        
    `;

    /* 동아리 소개 Container */
    const AboutWrapContent = styled.div`
        width: 100%;
        color: white;
        padding : 0 20px 1rem;
        display: flex;
    `;

    const AboutTextWrap = styled.div`
        
    `;
    
    const AboutTitleText = styled.h2`
    color: white;
    text-shadow: 1px 2px 3px #000;
    margin-bottom: 1em;
        @media screen and (max-width: 768px) {
            font-size: 30px;
        }
    `;

    const AboutText = styled.p`
    margin-bottom: 0.2em;
    text-shadow: 1px 2px 3px #000;
        @media screen and (max-width: 768px) {
            font-size: 15px;
            margin-bottom: 0.5em;
        }
    `;

    const AboutSubText = styled.p`
    margin-bottom: 0.5em;
    font-size: 0.75em;
    color: rgb(255,255,255,0.8);
        @media screen and (max-width: 768px) {
            display:none;
        }
    `;

    return (
        <AboutContainer>
            {/* 소개파트 */}
            <AboutWrapContent>
                <AboutTextWrap>
                    <AboutTitleText>멋쟁이사자처럼은,</AboutTitleText>
                    <AboutText>
                        프로그래밍 교육 대학생 연합동아리
                    </AboutText>
                    <AboutSubText>
                        ㅎㅇㄹ
                    </AboutSubText>
                    <AboutText>
                        다양한 오프라인 활동과 온라인 강의!
                    </AboutText>
                    <AboutText>
                        자신 만의 서비스를 직접 프로그래밍?
                    </AboutText>

                    <RecruitButton />
                </AboutTextWrap>
                
            </AboutWrapContent>   
        </AboutContainer>
    );
}

export default About;
