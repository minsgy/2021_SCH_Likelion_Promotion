import React from 'react';
import styled from 'styled-components';
import {FaHtml5} from "react-icons/fa";
import {RiPagesFill, RiUserVoiceFill} from "react-icons/ri"
import {SiDjango} from "react-icons/si"


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

        @media screen and (max-width: 768px) {
            flex-basis: 33.33%;
        }
    `;

    const InnerStep = styled.div`
        padding: 10px;
        color: #fff;
        text-align: center;
    `;

    const BoxThumb = styled.div`
        position: relative;
        font-size: 40px;

        svg {
            position: absolute;
            top: 30px;
            left: 50%;
            transform: translateX(-20px);
        }

        &::before {
            display: block;
            margin: 0 auto;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.3);
            content: '';
        }
    `;

    const TitleStep = styled.strong`
        display: block;
        margin-top: 8px;
        font-size: 16px;
        font-weight: 500;
    `;

    const KeywordStep = styled.span`
        display: inline-block;
        padding: 4px;
        margin-top: 4px;
        background-color: #034B61;
        font-size: 8px;
        font-weight: 500;
    `;

    const DescStep = styled.p`
        margin-top: 4px;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.8);
    `;

    return (
        <div>
            <WrapList>
                <ListStep>
                    <ListItemStep>
                        <InnerStep>
                            <BoxThumb><RiPagesFill/></BoxThumb>
                            <TitleStep>UX/UI설계</TitleStep>
                            <KeywordStep>UI/UX</KeywordStep>
                            <DescStep>
                                다양한 UI/UX 기법을 활용해 본인이 만들고 싶은 서비스를 기획
                            </DescStep>
                        </InnerStep>
                    </ListItemStep>
                    <ListItemStep>
                        <InnerStep>
                            <BoxThumb><FaHtml5/></BoxThumb>
                            <TitleStep>Front-End 구현</TitleStep>
                            <KeywordStep>HTML/CSS</KeywordStep>
                            <DescStep>
                                HTML, CSS를 활용해 웹서비스의 화면을 구현
                            </DescStep>
                        </InnerStep>
                    </ListItemStep>
                    <ListItemStep>
                        <InnerStep>
                            <BoxThumb><SiDjango/></BoxThumb>
                            <TitleStep>Back-End 구현</TitleStep>
                            <KeywordStep>PYTHON/DJANGO</KeywordStep>
                            <DescStep>
                                Python 기반 Full-Stack Framework 인 Django를 활용해 웹서비스 동작 구현
                            </DescStep>
                        </InnerStep>
                    </ListItemStep>
                    <ListItemStep>
                        <InnerStep>
                            <BoxThumb><RiUserVoiceFill/></BoxThumb>
                            <TitleStep>프로젝트 발표</TitleStep>
                            <KeywordStep>HACKATHON</KeywordStep>
                            <DescStep>
                                Python 기반 Full-Stack Framework 인 Django를 활용해 웹서비스 동작 구현
                            </DescStep>
                        </InnerStep>
                    </ListItemStep>
                    <ListItemStep>
                        <InnerStep>
                            <BoxThumb><RiUserVoiceFill/></BoxThumb>
                            <TitleStep>컨퍼런스</TitleStep>
                            <KeywordStep>FINAL PROJECT</KeywordStep>
                            <DescStep>
                                다음 기수를 위한 최종 프로젝트 진행(유지보수 및 추가 기능 개발)
                            </DescStep>
                        </InnerStep>
                    </ListItemStep>
                    <ListItemStep>
                        <InnerStep>
                            <BoxThumb><RiUserVoiceFill/></BoxThumb>
                            <TitleStep>최종 프로젝트</TitleStep>
                            <KeywordStep>FINAL PROJECT</KeywordStep>
                            <DescStep>
                                다음 기수를 위한 최종 프로젝트 진행(유지보수 및 추가 기능 개발)
                            </DescStep>
                        </InnerStep>
                    </ListItemStep>
                </ListStep>
            </WrapList>
        </div>
    );
}

export default Curriculum;