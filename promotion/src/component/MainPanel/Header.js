import React from 'react';
import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll'; // 풀페이지용 ㄸ

const Header = () => {
    const HeaderContainer = styled.div`
        height:60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000;
        border-bottom: 1px solid rgba(255, 255, 255, 0.7);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    `;

    const HeaderNav = styled.div`
        display: flex;
        padding: 0 20px;
        justify-content: space-between;
        flex: 1;
    `;

    // Page 이동 - 라이브러리
    const HeaderNavItem = styled(AnchorLink)`
        color: #fff;
        font-size: 20px;
        text-decoration: none;

        & + & {
            margin-left: 10px;
        }

        @media screen and (min-width: 768px) {
            & + & {
                margin-left: 20px;
            }
        }
    `;

    return (
        <HeaderContainer>
            <HeaderNav>
                <HeaderNavItem href="#About" style={{marginRight: 'auto'}}>LikeLion</HeaderNavItem>
                <HeaderNavItem href="#Curriculum">커리큘럼</HeaderNavItem>
                <HeaderNavItem href="#Recruit">지원하기</HeaderNavItem>
                <HeaderNavItem href="#SNS">SNS</HeaderNavItem>
            </HeaderNav>
        </HeaderContainer>
    );
}

export default Header;
