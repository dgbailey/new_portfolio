import React from 'react';
import styled from 'styled-components';
import {theme} from "./config";

export const Footer = () => {
    return(
        <StyledFooter>
         
            <span className="dropdown-link"><a className="dropdown-icon" href="MAILTO:bailey.dust@gmail.com"><span className="footer-text">Dustin Bailey 2019 | Contact</span></a></span>
        </StyledFooter>
    )

    
}

const StyledFooter = styled.section`

    width:100%;
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:5px;


    a{
        display: flex;
        align-items: center;
        
    }
    .dropdown-icon{
            padding:10px;
            font-size:2.2rem;

     }

    .fas.fa-envelope{
        -webkit-animation: fade-in-opacity-only-animation 1s both; /* Safari 4+ */
        -moz-animation:    fade-in-opacity-only-animation 1s both; /* Fx 5+ */
        -o-animation:      fade-in-opacity-only-animation 1s both; /* Opera 12+ */
        animation:         fade-in-opacity-only-animation 1s both; /* IE 10+, Fx 29+ */

        animation-delay:.1s;
        color:gray;
    }

    .footer-text{
        font-family:${theme.globalTextFont};
        font-size:1.5rem;
        margin:0px 5px;
        
        color:#0080ff;

        @media(max-width:590px){
            font-size:1rem
        }
    }

    

`