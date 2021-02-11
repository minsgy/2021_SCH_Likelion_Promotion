import React from 'react';
import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll'; // 풀페이지용 ㄸ

const Header = () => {
    const HeaderContainer = styled.div`
        width:100%;
        height:60px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: black;
        border-bottom: 1px solid white;
        margin-bottom: 1rem;
        position: fixed;
        top: 0;
        z-index: 2;
    `;

    const HeaderNav = styled.div`
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        font-size: 1em;
    `;

    // Page 이동 - 라이브러리
    const HeaderNavItem = styled(AnchorLink)`
        text-decoration: none;
    `;
    

    const HeaderNavText = styled.div`
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        color: white;
    `;

    return (
        <HeaderContainer>
            <HeaderNav>
                <HeaderNavItem href="#About">
                    <HeaderNavText>LikeLion</HeaderNavText>
                </HeaderNavItem>
                <HeaderNavItem href="#Curriculum">
                    <HeaderNavText>커리큘럼</HeaderNavText>
                </HeaderNavItem>
                <HeaderNavItem href="#Recruit">
                    <HeaderNavText>지원하기</HeaderNavText>
                </HeaderNavItem>
                <HeaderNavItem href="#SNS">
                    <HeaderNavText>SNS</HeaderNavText>
                </HeaderNavItem>
            </HeaderNav>
        </HeaderContainer>
    );
}

export default Header;
