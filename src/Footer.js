import React from 'react';
import styled from 'styled-components';
import {theme} from "./config";

export const Footer = () => {
    return(
        <StyledFooter className="contact-footer hidden-footer">
         
            <a className="footer-contact-link" href="MAILTO:bailey.dust@gmail.com"><div className="footer-text">Dustin Bailey 2020 | Contact</div></a>
        </StyledFooter>
    )

    
}

const StyledFooter = styled.section`

    width:100%;
    height: 40px;
    display:flex;
    justify-content:center;
    align-items:center;
    -webkit-backface-visibility: hidden;
    background:white;
   
   
    z-index:1000;
    perspective:300px;
    bottom:0;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    @media(max-width:590px){
            
            position:relative;
            height:100vh;
        }

    &.hidden-footer{
       visibility:hidden;
    }

    a{
        display: flex;
        align-items: center;
        
    }
    .dropdown-icon{
            padding:10px;
            font-size:2.2rem;

     }

   

    .footer-text{
        font-family:${theme.globalTextFont};
        font-size:1.5rem;
        
        
        color:#0080ff;

        @media(max-width:590px){
            font-size: 1.5rem;
           
        }
    }

    
    

`