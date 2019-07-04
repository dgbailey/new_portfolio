import React, {Compoent} from "react";
import styled from "styled-components";
import {theme} from "./config";
import {ProductCarousel} from "./ProductCarousel";

export const GlobalTopContainer = () => {
    return(
        <StyledGlobalTopContainer>
            <div className="content-container">
                <h2 className="portfolio-sub-name">FULL STACK ENGINEER</h2>
                <h1 className="portfolio-name">Dustin Bailey</h1>
               
                <p className="longer-bio">A full stack engineer with immense appreciation for beautifully designed products.
                Dustin is currently a student a Lambda School.
                
                </p>
            </div>
            <h1 className="front-end-project-title">Front End</h1>
            <ProductCarousel/>
            
   

        </StyledGlobalTopContainer>
    )
}



const StyledGlobalTopContainer = styled.section`

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:100px;

    .content-container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding:0px 0px 100px;
    }
    .portfolio-name{
        font-family:${theme.largeFont};
        font-size:8rem;
        
        margin: 0px 0px 20px;
        
    }

    .portfolio-sub-name{
        font-family:${theme.experimentalFont};
       font-size: 1.6rem;
       letter-spacing:2px;
       color:#00000073;
       
    }

    .longer-bio{
        font-size:2rem;
        ${theme.globalTextFont};
        color: #000000a6;
        text-align: left;
        width:474px;
        line-height: 3rem;
    }

    .front-end-project-title{
            margin:20px 0px;
            text-align:left;
            font-family:${theme.largeFont};
    }



`



    
   

