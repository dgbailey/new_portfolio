import React from "react";
import styled from "styled-components"
import {Circle} from "./Circle";

export function ImageCountVisual(props){
    

   
    return(

        <StyledCircleFeedbackContainer className="slide-num-visual">
            {props.imageArray.map(
                (element,index) => 
                <Circle
                key={index} 
                id={index}
                goToIndex={props.goToIndex}
                
                currentPage={props.currentPage}
                />)}
        </StyledCircleFeedbackContainer>



    )
    
}


const StyledCircleFeedbackContainer = styled.div`

    overflow:hidden;
    
    display:flex;
    
    transition:0s linear;
    margin:10px auto 0px;
    @media(max-width:590px){
        
    }

`