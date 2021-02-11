import React, {useState} from 'react';
import {FcAdvance} from "react-icons/fc";
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
                    <h2 class="frame-1">멋쟁이 사자처럼 ?</h2>
                    <h2 class="frame-2">아이디어 많아?</h2>
                    <h2 class="frame-3">열정 가득 <br/>유노윤호야?</h2>
                    <h2 class="frame-4">그렇다면 잘 왔어</h2>
                    <h2 class="frame-5">
                        <span>멋쟁이사자처럼 at SCH</span>
                        <span>9기 아기사자 모집</span>
                        <span>02. 22. ~ 03. 03. PM 10:00</span> 
                        <span onClick={handleRedirect}>이동하기<FcAdvance size={'75px'}/></span>
                    </h2>
                </div>
            </div>
        </>
    );
}

export default Promotion;
