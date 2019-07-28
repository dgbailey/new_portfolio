import React from 'react';
import styled from 'styled-components';
import {theme} from "./config";

export const Footer = () => {
    return(
        <StyledFooter>
         
            <a className="footer-contact-link" href="MAILTO:bailey.dust@gmail.com"><div className="footer-text">Dustin Bailey 2019 | Contact</div></a>
        </StyledFooter>
    )

    
}

const StyledFooter = styled.section`

    width:100%;
    height: 70px;
    display:flex;
    justify-content:center;
    align-items:center;



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