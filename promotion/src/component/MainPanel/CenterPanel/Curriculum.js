import React from 'react';
import styled from 'styled-components';

const Curriculum = () => {

    const BoxContainer = styled.div`
        width: 300px;
    `;
    const BoxIcon = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.4);
        font-size: 50px;
        font-align: center;
        font-weight: bolder;
        color: #fff;
    `;
    const IconTextEm = styled.em`
        font-style: normal;
        color: #00c73c;
    `;

    const IconText = styled.div`
        
    `;


    return (
        <div>
            <BoxContainer>
                <BoxIcon>
                    <IconTextEm style={{color: 'red'}}>HACKA</IconTextEm><IconText>THON</IconText>
                </BoxIcon>
                <BoxIcon>
                    <IconTextEm style={{color: 'red'}}>IDEA</IconTextEm><IconText>THON</IconText>
                </BoxIcon>
            </BoxContainer>
        </div>
    );
}

export default Curriculum;
