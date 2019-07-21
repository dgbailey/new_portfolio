import React from "react";
import styled from "styled-components";
import {theme} from "./config";


export const Nav = () => {
    
    return(
        <StyledNavigation>
            <div className="nav-width-container">
                <div className="nav-portfolio-name">Dustin Bailey</div>
                <button className="contact-btn"><span>Contact</span><i class="fas fa-bars"></i></button>
            </div>
        </StyledNavigation>
    )
    
}

const StyledNavigation = styled.nav`

    width:100%;
    
    position:fixed;
    
   
    font-family:${theme.largeFont};
    
    height:50px;
    display:flex;
    justify-content: center;
    z-index: 5;
    top: 0;
    border-bottom: 1px solid lightgray;
    background: #ffffffc9;
    opacity: .8;
   

    .nav-width-container{
        width: 938px;
        max-width: 938px;
        display:flex;
        justify-content:space-between;
        @media(max-width:590px){
            padding: 10px 30px;
        }
        @media(max-width:1000px){
            width: 82vw;
        }
    }

    .nav-portfolio-name{
        background: Transparent;
        width: auto;
        font-size: 2rem;
        font-weight: 600;
        align-items: center;
        display: flex;
        letter-spacing: .75px;


    }

    .contact-btn{
        border:none;
        background:Transparent;
        padding:0px;
        
        
        font-size: 1.4rem;
        width:auto;
        font-family:${theme.globalTextFont};
        &:hover{
            cursor:pointer;
        }

        span{
            display:none;
            
            @media(min-width:590px){
            

                display:inline-block;
            }
        

        }
       

        .fas.fa-bars{
            display:inline-block;
            font-size:2rem;

            @media(min-width:590px){
                

                display:none;
            }
            
        }

                
        

        
    }

`