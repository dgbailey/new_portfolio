import React from "react";
import styled from "styled-components"

export const Circle = (props) => {
    return(
        <StyledCircle className={props.currentPage === props.id ? "active":''}>

        </StyledCircle>
    )
}

const StyledCircle = styled.div`

    height: 10px;

    width: 10px;

    margin: 3px;

    border-radius: 50%;

    background: lightgray;
    transition:.3s ease;
    transform:scale(0.8);


    &.active{
        
        background:gray;
        transform:scale(1);
    }


`