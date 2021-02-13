import React from 'react';
import styled from 'styled-components';

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
    font-size: 50px;
        @media screen and (max-width: 600px) {
            font-size: 30px;
        }
    `;

    const AboutText = styled.p` // 인라인 스타일 처럼 하나를 정의를함. p태그에 들어 갈 AboutText라는 고유의 태그 
    margin-bottom: 0.5em;
    text-shadow: 1px 2px 3px #000;
    font-size: 30px;
        @media screen and (max-width: 600px) {
            font-size: 20px;
            margin-bottom: 0.5em;
        }
    `;

    const AboutSubText = styled.p`
    margin-bottom: 0.5em;
    font-size: 15px;
    color: rgb(255,255,255,0.8);
        @media screen and (max-width: 600px) {
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
                        전국 100여개의 대학과 함께하는 전국 연합 동아리
                    </AboutSubText>
                    <AboutText>
                        다양한 오프라인 활동과 온라인 강의
                    </AboutText>
                    <AboutSubText>
                    해커톤, 아이디어톤, 오프라인 세션, 중앙 멋사에서 제공되는 온라인 강의
                    </AboutSubText>
                    <AboutText>
                        자신 만의 서비스를 직접 구현 
                    </AboutText>
                    <AboutSubText>
                        1년간 수많은 팀프로젝트를 통하여 구상한 서비스를 직접 구현해내는 과정을 경험
                    </AboutSubText>
                </AboutTextWrap>
                
            </AboutWrapContent>
               
        </AboutContainer>
    );
}

export default About;
