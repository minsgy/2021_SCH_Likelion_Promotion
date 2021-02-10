import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const TopButton = () => {

    const TopButtonLink = styled(AnchorLink)`
        padding: 0 10px;
    `;
    
    const TopButtonDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid black;
        margin-right: 4rem;
        margin-bottom: 8rem;
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 2;
    `;

    return (
        <TopButtonLink href="#top">
            <TopButtonDiv>
                Top
            </TopButtonDiv>
        </TopButtonLink>
    );
}

export default TopButton;
