import React, {useState} from 'react';
import {IoIosArrowForward} from "react-icons/io";
import '../assets/Css/Promotion.css';

const Promotion = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleRedirect = () => {
        setIsLoading(!isLoading);
        props.loadingFilter(isLoading);
    }

    return (
        <>
            <div class="sp-container">
                <div class="sp-content">
                    <div class="sp-globe"></div>
                    <h2 class="frame-1">세상을 바꿀 <br/>아이디어가 있나요?</h2>
                    <h2 class="frame-2">열정과 시간만 가져오세요.</h2>
                    <h2 class="frame-3">도전합니다.</h2>
                    <h2 class="frame-4">멋쟁이 사자처럼.</h2>
                    <h2 class="frame-5">
                        <span>멋쟁이사자처럼 at SCH</span>
                        <span>9기 아기사자 모집</span>
                        <span>02. 22. ~ 03. 03. PM 10:00</span> 
                        <span onClick={handleRedirect}>이동하기<IoIosArrowForward color={'white'}size={'30px'}/></span>
                    </h2>
                </div>
            </div>
        </>
    );
}

export default Promotion;
