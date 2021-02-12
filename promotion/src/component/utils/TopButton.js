import React from 'react';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
const TopButton = () => {
    return (
            <ScrollUpButton
            style={{
                fill: "white",
                backgroundColor: 'transparent',
                bottom: 70
            }}>
            </ScrollUpButton>
    );
}

export default TopButton;
