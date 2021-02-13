import React from "react";
import styled from 'styled-components';
import RecruitButton from "../../utils/RecruitButton";
import {GoX} from 'react-icons/go';
import {FaCheck} from 'react-icons/fa';
const RecruitContainer = styled.div`

`;

const RecruitWrapWanted = styled.div`
        margin-bottom: 7vh;
`;

const RecruitTitle = styled.h2`
    color: #fad207;
    text-shadow: 1px 2px 1px #000;
    margin-bottom: 2vh;
    font-size: 30px;
    svg{
        vertical-align: top;
        margin-right: 1vw;
    }
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
`;

const RecruitWantedList = styled.ol`
    display: flex;
    flex-direction: column;
`;
const RecruitWantedItem = styled.li`
    color: #fff;
    margin-bottom: 1vh;
    text-shadow: 3px 2px 1px #000;
    font-size: 20px;
    // 체크
    &.check{
        svg{
            color: #1BBCF0;
        }
    }
    // 엑스
    &.sorry{
        svg{ 
            color: #F6BB43;
        }
    }

    @media screen and (max-width: 768px) {
        font-size: 15px;
        svg{
            font-size: 20px;
        }
    }
`;

const SubmitDescription = styled.span`
    color: white;
        display: block;
        text-align: center;
        text-shadow: 1px 2px 3px #000;
        margin-bottom: 1vh;   
        font-size: 14px; 
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Recruit = () => {
    return (
        <RecruitContainer>
            {/* 인재상 */}
            <RecruitWrapWanted>
                <RecruitTitle><FaCheck color={'green'}/> 어떤 사람을 원하나요?</RecruitTitle>
                <RecruitWantedList>
                    <RecruitWantedItem className="check">- 웹 서비스 개발에 관심 있는 분</RecruitWantedItem>
                    <RecruitWantedItem className="check">- 협업과 네트워킹이 잘 되시는 분</RecruitWantedItem>
                    <RecruitWantedItem className="check">- 아이디어가 풍부 하신 분</RecruitWantedItem>
                    <RecruitWantedItem className="check">- 1년 동안 꾸준히 참여 가능하신 분</RecruitWantedItem>
                    <RecruitWantedItem className="check">- 개발은 모르셔도 열정이 넘치는 분</RecruitWantedItem>
                    <RecruitWantedItem className="check">- 시간을 많이 투자 하실 수 있는 분</RecruitWantedItem>
                </RecruitWantedList>
            </RecruitWrapWanted>
            {/* 이런분은.. 저랑 안맞아용.. ㅠ */}
            <RecruitWrapWanted>
                <RecruitTitle><GoX color={'red'}/>이런 분은 저희와 맞지 않아요..</RecruitTitle>
                <RecruitWantedList>
                    <RecruitWantedItem className="sorry">- 할 일이 많고 시간이 없으신 분</RecruitWantedItem>
                    <RecruitWantedItem className="sorry">- 개인적인 목적 달성</RecruitWantedItem>
                    <RecruitWantedItem className="sorry">- 이미 웹에 대해서 잘 아시는 분</RecruitWantedItem>
                </RecruitWantedList>
            </RecruitWrapWanted>
            <SubmitDescription>해당 버튼을 클릭 하시면 지원 페이지로 이동합니다.</SubmitDescription>
            <RecruitButton />
        </RecruitContainer>
    )
};

export default Recruit;
