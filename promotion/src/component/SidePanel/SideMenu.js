import React from 'react';
import styled from 'styled-components';
import {slide as Menu} from 'react-burger-menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const SideMenu = () => {
    const MenuItem = styled(AnchorLink)`
        
    `;

    return (
        <Menu right >
            <MenuItem href="#About">멋쟁이사자처럼?</MenuItem>
            <MenuItem href="#History">8기 활동 보기</MenuItem>
            <MenuItem href="#Curriculum">커리 큘럼</MenuItem>
            <MenuItem href="#Recruit">지원 안내</MenuItem>
            <MenuItem href="#SNS">SNS</MenuItem>
        </Menu>
    );
}

export default SideMenu;
