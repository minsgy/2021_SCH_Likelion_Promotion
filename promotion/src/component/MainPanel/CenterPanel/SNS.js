import React from 'react';
import styled from 'styled-components';
import {AiFillInstagram, AiFillFacebook} from "react-icons/ai";
import {RiKakaoTalkLine} from "react-icons/ri";
const Wrap = styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Title = styled.strong`
    text-shadow: 1px 2px 3px #000;
    font-size: 40px;
    color: #fff;
    
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

const Desc = styled.p`
    text-shadow: 1px 2px 3px #000;
    margin-top: 8px;
    font-size: 25px;
    color: rgba(255, 255, 255, 0.9);
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
    @media screen and (max-width: 380px) {
        font-size: 15px;
    }
`;

const WrapLink = styled.div`
    margin-top: 8px;
`;

const LinkSNS = styled.a`
    display: block;
    width: 50%;
    margin: 8px auto 0;
    padding: 4px 0;
    font-size: 20px;
    color: #fff;
    line-height: 30px;
    text-shadow: 1px 2px 3px #000;
    svg {
        margin: 4px 4px 0 0;
        font-size: 22px;
        vertical-align: top;
        color: #fad207;
    }
`;

const SNS = () => {
    return (
        <>
            <Wrap>
                <Desc>
                문의 사항은 인스타DM, 오픈 카카오톡 채팅방으로 문의 주시기 바랍니다.
                </Desc>
                <WrapLink>
                    <LinkSNS href="https://www.instagram.com/schlikelion/"><AiFillInstagram/>Instagram</LinkSNS>
                    <LinkSNS href="https://www.facebook.com/likelionsch/"><AiFillFacebook/>Facebook</LinkSNS>
                    <LinkSNS href="https://open.kakao.com/o/sHc1ArWc"><RiKakaoTalkLine/>OpenKaKao</LinkSNS>
                </WrapLink>
            </Wrap>
        </>
    );
}

export default SNS;
