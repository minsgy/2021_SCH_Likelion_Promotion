import React, {useState} from 'react';

import Center from './MainPanel/Center';
import Footer from './MainPanel/Footer';
import Header from './MainPanel/Header';
import Promotion from './PromotionPanel/Promotion';
import TopButton from './utils/TopButton';

import './assets/Css/Main.css';



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
                <Header />
                <Center />
                <Footer />
                <TopButton/>
            </div>
            }
        </>
    );
}

export default MainPage;
