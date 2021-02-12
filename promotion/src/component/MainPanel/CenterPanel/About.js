import React from 'react';
import styled from 'styled-components';
import {FaTrophy} from "react-icons/fa";


const About = () => {
    
    const AboutContainer = styled.div`
        
    `;

    const WrapHistory = styled.div`
        padding: 0 20px;
    `;

    const ListHistory = styled.ol`
        display: flex;
        flex-direction: column;
    `;

    const ItemHistory = styled.li`
        position: relative;
        display: flex;

        &::before {
            position: relative;
            display: inline-block;
            width: 10px;
            height: 10px;
            border: 4px solid #fff;
            border-radius: 50%;
            content: '';
            z-index: 1;
            flex-shrink: 0;
        }

        &.award {
            &::before {
                border-color: #fad207;
            }

            strong {
                color: #fad207;
            }
        }

        &::after {
            position: absolute;
            top: 18px;
            left: 9px;
            bottom: -20px;
            width: 1px;
            background-color: rgba(255, 255, 255, 0.3);
            content: '';
        }

        &:last-child {
            &::after {
                content: none;
            }
        }

        & + & {
            margin-top: 20px;
        }
    `;

    const InnerHistory = styled.div`
        padding-left: 20px;

    `;

    const TitleHistory = styled.strong`
        font-size: 20px;
        color: #fff;
        vertical-align: top;

        & + p {
            margin-top: 4px;
        }

        svg {
            margin-right: 4px;
            vertical-align: top;
        }

        @media screen and (max-width: 375px) {
            font-weight: 500;
            font-size: 18px;
        }
    `;

    const DescHistory = styled.p`
        font-size: 14px;
        color: rgba(255, 255, 255, 0.8);

        @media screen and (max-width: 375px) {
            display: none;
        }
    `;


    return (
        <AboutContainer>
            {/* 소개파트 */}

            {/* 연혁 영역 */}
            <WrapHistory>
                <ListHistory>
                    <ItemHistory>
                        <InnerHistory>
                            <TitleHistory>멋쟁이사자처럼 8기 모집</TitleHistory>
                            <DescHistory>멋쟁이사자처럼 at 순천향대학교의 8기 모집 시작</DescHistory>
                        </InnerHistory>
                    </ItemHistory>
                    <ItemHistory>
                        <InnerHistory>
                            <TitleHistory>2020 멋쟁이사자처럼 at 순천향대학교 아이디어톤</TitleHistory>
                            <DescHistory>팀별로 웹 서비스에 대한 아이디어를 발표</DescHistory>
                        </InnerHistory>
                    </ItemHistory>
                    <ItemHistory>
                        <InnerHistory>
                            <TitleHistory>HTML/CSS 및 UI/UX 강의 시작</TitleHistory>
                            <DescHistory></DescHistory>
                        </InnerHistory>
                    </ItemHistory>
                    <ItemHistory className="award">
                        <InnerHistory>
                            <TitleHistory><FaTrophy/>수상 테스트</TitleHistory>
                            <DescHistory>수상 내역은 ItemHistory 컴포넌트에 award클래스, FaTrophy 컴포넌트를 추가해서 표시</DescHistory>
                        </InnerHistory>
                    </ItemHistory>
                    <ItemHistory>
                        <InnerHistory>
                            <TitleHistory>2020 멋쟁이사자처럼 아이디어톤</TitleHistory>
                            <DescHistory>모든 대학교의 멋쟁이사자처럼 인원이 온라인으로 웹 서비스에 대한 구체적인 아이디어를 발표</DescHistory>
                        </InnerHistory>
                    </ItemHistory>
                </ListHistory>
            </WrapHistory>
        </AboutContainer>
    );
}

export default About;
