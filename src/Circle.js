import React from "react";
import styled from "styled-components"

export const Circle = (props) => {
    return(
        <StyledCircle onClick={() => props.goToIndex(props.id)} className={props.currentPage === props.id ? "active":''}>

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

    &:hover{
        cursor:pointer;
    }


    &.active{
        
        background:#0080ffc9;
        transform:scale(1);
    }


`