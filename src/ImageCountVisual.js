import React from "react";
import styled from "styled-components"
import {Circle} from "./Circle";

export function ImageCountVisual(props){
    

   
    return(

        <StyledCircleFeedbackContainer>
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
    
    
    margin:10px auto 0px;
    @media(max-width:590px){
        
    }

`