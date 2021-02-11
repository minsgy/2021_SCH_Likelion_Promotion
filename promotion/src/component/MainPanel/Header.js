import React from 'react';
import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll'; // 풀페이지용 ㄸ

const Header = () => {
    const HeaderContainer = styled.div`
        width:100%;
        height:80px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid black;
        margin-bottom: 2rem;
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
        padding: 0px 10px;
        text-decoration: none;
    `;
    

    const HeaderNavText = styled.div`
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
    `;

    return (
        <HeaderContainer>
            <HeaderNav>
                <HeaderNavItem href="#About">
                    <HeaderNavText>About</HeaderNavText>
                </HeaderNavItem>
                <HeaderNavItem href="#Curriculum">
                    <HeaderNavText>Curriculum</HeaderNavText>
                </HeaderNavItem>
                <HeaderNavItem href="#Recruit">
                    <HeaderNavText>Recruit</HeaderNavText>
                </HeaderNavItem>
                <HeaderNavItem href="#SNS">
                    <HeaderNavText>SNS</HeaderNavText>
                </HeaderNavItem>
            </HeaderNav>
        </HeaderContainer>
    );
}

export default Header;
