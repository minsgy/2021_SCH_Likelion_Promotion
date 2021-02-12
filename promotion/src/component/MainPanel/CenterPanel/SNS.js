import React from 'react';
import styled from 'styled-components';
import {AiFillInstagram, AiFillFacebook} from "react-icons/ai"

const Wrap = styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Title = styled.strong`
    font-size: 20px;
    color: #fff;
`;

const Desc = styled.p`
    margin-top: 8px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
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

    svg {
        margin: 4px 4px 0 0;
        font-size: 22px;
        vertical-align: top;
    }
`;

const SNS = () => {
    return (
        <>
            <Wrap>
                <Title>텍스트텍스트텍스트</Title>
                <Desc>
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
                </Desc>
                <WrapLink>
                    <LinkSNS><AiFillInstagram/>Instagram</LinkSNS>
                    <LinkSNS><AiFillFacebook/>Facebook</LinkSNS>
                </WrapLink>
            </Wrap>
        </>
    );
}

export default SNS;
