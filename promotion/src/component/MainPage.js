import React, {useState} from 'react';
import Center from './MainPanel/Center';
import Footer from './MainPanel/Footer';
import Promotion from './PromotionPanel/Promotion';
import TopButton from './utils/TopButton';
import LogoImage from './assets/Image/likelion-logo.png';


import './assets/Css/Main.css';
import './assets/Css/SideMenu.css';
import SideMenu from './SidePanel/SideMenu';
import styled from 'styled-components';


const LogoImg = styled.div`
        background: url(${LogoImage}) center center no-repeat;
        position: fixed;
        top: 10px;
        left: 24px;
        width: 200px;
        height: 60px;
        background-size: contain;
        z-index: 400;
        
    `;
const MainPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const loadingFilter = (e) => {
        setIsLoading(e);
    }
    return (
        <> 
            {
            isLoading ? <div className='Promotion'>
            <Promotion 
                isLoading={isLoading}
                loadingFilter = {e => loadingFilter(e)}
            />
            </div> :
            <div class="Main">
                <LogoImg />
                <SideMenu />
                <Center />
                <Footer />
                <TopButton/>
            </div>
            }
        </>
    );
}

export default MainPage;
