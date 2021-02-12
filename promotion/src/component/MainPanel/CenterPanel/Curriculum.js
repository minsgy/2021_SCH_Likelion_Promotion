import React from 'react';
import styled from 'styled-components';
import {FaHtml5} from "react-icons/fa";
import {RiPagesFill, RiUserVoiceFill, RiTeamFill} from "react-icons/ri"
import {SiDjango} from "react-icons/si";
import {VscGlobe} from "react-icons/vsc";
const Curriculum = () => {

    const WrapList = styled.div`
        padding: 0 10px;
    `;

    const ListStep = styled.ol`
        display: flex;
        flex-wrap: wrap;
    `;

    const ListItemStep = styled.li`
        flex-basis: 50%;

        @media screen and (min-width: 768px) {
            flex-basis: 33.33%;
        }
    `;

    const InnerStep = styled.div`
        padding: 10px;
        color: #fff;
        text-align: center;

        @media screen and (min-width: 768px) {
            padding: 20px;
        }
    `;

    const BoxThumb = styled.div`
        position: relative;
        margin: 0 auto;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        content: '';
        font-size: 40px;

        svg {
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-20px);
        }

        @media screen and (min-width: 768px) {
            width: 140px;
            height: 140px;
            font-size: 60px;

            svg {
                top: 40px;
                transform: translateX(-30px);
            }
        }
    `;

    const TitleStep = styled.strong`
        display: block;
        margin-top: 8px;
        font-size: 16px;
        text-shadow: 1px 2px 3px #000;
        @media screen and (min-width: 768px) {
            margin-top: 12px;
            font-size: 20px;
        }
    `;

    const KeywordStep = styled.span`
        display: inline-block;
        padding: 4px;
        margin-top: 4px;
        background-color: #1BBCF0;
        font-size: 8px;
        vertical-align: top;

        @media screen and (min-width: 768px) {
            margin-top: 6px;
            padding: 4px 8px;
            font-size: 14px;
        }
    `;

    const DescStep = styled.p`
        margin-top: 4px;
        font-size: 12px;
        line-height: 18px;
        color: rgba(255, 255, 255, 0.8);
        text-shadow: 1px 2px 3px #000;
        @media screen and (min-width: 768px) {
            font-size: 16px;
            line-height: 20px;
        }
    `;

    return (
        <div>
            <WrapList>
                <ListStep>
                    <ListItemStep>
                        <InnerStep>
                            <BoxThumb><RiPagesFill/></BoxThumb>
                            <TitleStep>아이디어설계</TitleStep>
                            <KeywordStep>IDEA</KeywordStep>
                            <DescStep>
                                팀을 구성해, 본인이 만들고 싶은 서비스 기획
                            </DescStep>
                        </InnerStep>
                    </ListItemStep>
                    <ListItemStep>
                        <InnerStep>
                            <BoxThumb><FaHtml5/></BoxThumb>
                            <TitleStep>Front-End</TitleStep>
                            <KeywordStep>HTML/CSS/JS</KeywordStep>
                            <DescStep>
                                HTML, CSS, JS를 활용해 웹서비스의 화면을 구현
                            </DescStep>
                        </InnerStep>
                    </ListItemStep>
                    <ListItemStep>
                        <InnerStep>
                            <BoxThumb><SiDjango/></BoxThumb>
                            <TitleStep>Back-End</TitleStep>
                            <KeywordStep>PYTHON/DJANGO</KeywordStep>
                            <DescStep>
                                Python기반 웹프레임워크 Django를 이용한 서버 구현
                            </DescStep>
                        </InnerStep>
                    </ListItemStep>
                    <ListItemStep>
                        <InnerStep>
                            <BoxThumb><RiTeamFill/></BoxThumb>
                            <TitleStep>해커톤 대회</TitleStep>
                            <KeywordStep>HACKATHON</KeywordStep>
                            <DescStep>
                            앞서 배운 기술 스택을 가지고 기획한 서비스를 구현 
                            </DescStep>
                        </InnerStep>
                    </ListItemStep>
                    <ListItemStep>
                        <InnerStep>
                            <BoxThumb><RiUserVoiceFill/></BoxThumb>
                            <TitleStep>컨퍼런스</TitleStep>
                            <KeywordStep>CONFERENCE</KeywordStep>
                            <DescStep>
                                외부인사 및 멋사 OB 초청 강연
                            </DescStep>
                        </InnerStep>
                    </ListItemStep>
                    <ListItemStep>
                        <InnerStep>
                            <BoxThumb><VscGlobe/></BoxThumb>
                            <TitleStep>최종 프로젝트</TitleStep>
                            <KeywordStep>FINAL PROJECT</KeywordStep>
                            <DescStep>
                                다음 기수를 위한 최종 프로젝트 진행
                            </DescStep>
                        </InnerStep>
                    </ListItemStep>
                </ListStep>
            </WrapList>
        </div>
    );
}

export default Curriculum;