import React from 'react';
import styled from "styled-components";
import {FaTrophy} from "react-icons/fa";

const History = () => {
    /* 연혁 Container */

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
        text-shadow: 1px 2px 3px #000;

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

        @media screen and (max-width: 768px) {
            display: none;
        }
    `;

    return (
        <div>
            {/* 연혁 영역 */}
            <WrapHistory>
                <ListHistory>
                    <ItemHistory>
                        <InnerHistory>
                            <TitleHistory>2020 멋쟁이사자처럼 아이디어톤</TitleHistory>
                            <DescHistory>팀별로 웹 서비스에 대한 아이디어를 발표</DescHistory>
                        </InnerHistory>
                    </ItemHistory>
                    <ItemHistory>
                        <InnerHistory>
                            <TitleHistory>HTML/CSS, 협업 툴(Git)교육</TitleHistory>
                            <DescHistory>기초적인 웹 기초 및 협업 프로그램 사용법 교육</DescHistory>
                        </InnerHistory>
                    </ItemHistory>
                    <ItemHistory>
                        <InnerHistory>
                            <TitleHistory>Python 교육 및 LevelTest 실시</TitleHistory>
                            <DescHistory>기초적인 웹 기초 및 협업 프로그램 사용법 교육</DescHistory>
                        </InnerHistory>
                    </ItemHistory>
                    <ItemHistory>
                        <InnerHistory>
                            <TitleHistory>Django 교육 및 ToyProject 진행</TitleHistory>
                            <DescHistory>풀스택 웹프레임워크 Django 교육 및 드리머리, 자소설닷컴 등 클론 프로젝트 진행</DescHistory>
                        </InnerHistory>
                    </ItemHistory>
                    <ItemHistory>
                        <InnerHistory>
                            <TitleHistory>2020 순멋사톤 개최</TitleHistory>
                            <DescHistory>순천향대학교 멋쟁이사자처럼 자체 1박2일 해커톤 진행(온라인)</DescHistory>
                        </InnerHistory>
                    </ItemHistory>
                    <ItemHistory>
                        <InnerHistory>
                            <TitleHistory>심화 Class반 운영</TitleHistory>
                            <DescHistory>FullStack, Flutter, 심화 Django, JS 반으로 나누어서 교육 진행</DescHistory>
                        </InnerHistory>
                    </ItemHistory>
                    <ItemHistory className="award">
                        <InnerHistory>
                            <TitleHistory><FaTrophy/>롯데 해커톤 웹프로젝트 은상 수상</TitleHistory>
                            <DescHistory>2020 전국 멋쟁이사자처럼x롯데그룹 해커톤에서 웹 프로젝트 분야에서 은상 수상</DescHistory>
                        </InnerHistory>
                    </ItemHistory>
                    <ItemHistory className="award">
                        <InnerHistory>
                            <TitleHistory><FaTrophy/>롯데 해커톤 인공지능 대회 준우승</TitleHistory>
                            <DescHistory>2020 전국 멋쟁이사자처럼x롯데그룹 해커톤에서 인공지능 게임 분야에서 준우승 수상</DescHistory>
                        </InnerHistory>
                    </ItemHistory>
                    <ItemHistory>
                        <InnerHistory>
                            <TitleHistory>2020 순천향대 x 선문대학교 연합해커톤 개최</TitleHistory>
                            <DescHistory>순천향대학교 멋사와 선문대학교 멋사와 합동 연합해커톤을 진행.</DescHistory>
                        </InnerHistory>
                    </ItemHistory>
                    <ItemHistory>
                        <InnerHistory>
                            <TitleHistory>2020 최종프로젝트 - 순천향대 공식 홈페이지 제작 </TitleHistory>
                            <DescHistory>8기 멤버들의 멋쟁이사자처럼 at 순천향대학교 공식 홈페이지를 제작.</DescHistory>
                        </InnerHistory>
                    </ItemHistory>
                </ListHistory>
            </WrapHistory>
        </div>
    );
}

export default History;
