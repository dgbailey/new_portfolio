import React, {Compoent} from "react";
import styled from "styled-components";
import {theme} from "./config";
import {ProductCarousel} from "./ProductCarousel";

export const GlobalTopContainer = () => {
    return(
        <StyledGlobalTopContainer>
            <div className="parallax__layer parallax__layer--base">
                <div className="scroll-content-container">
                    <h2 className="portfolio-sub-name">FULL STACK ENGINEER</h2>
                    <h1 className="portfolio-name">Dustin Bailey</h1>
                                    
                    <p className="longer-bio">A developer with immense appreciation for beautiful design throughout the technical stack.
                        Dustin is currently a student a Lambda School.
                                        
                    </p>
                </div>
            </div>
           <div className="parallax__layer parallax__layer--back">
                
                <div className="content-container">
                    
                    <ProductCarousel/>
                </div>
            </div>
            <div className="parallax__layer parallax__layer--base">
                <div className="front-end-description-container">
                    <h1 className="front-end-project title">Professional products<br></br> and personal projects.</h1>
                    <div className="front-end-project text">Most written in <strong>React</strong> with <strong>Redux </strong>for state management. Backend powered by Java's <strong>spring framework</strong> with <strong>PostgreSQL</strong> for data persistence.</div>
                    
                </div>
            </div>
            
           

                
            
           
            
           
            
   

        </StyledGlobalTopContainer>
    )
}



const StyledGlobalTopContainer = styled.section`

    ${'' /* display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding: 50px; */}
    overflow-x: hidden;
    overflow-y: auto;
    white-space: nowrap;
    position: absolute;
    overflow-x: auto;
    overflow-y: hidden;
    perspective: 300px;
    scroll-behavior: smooth;
    width: 100%;
    display:flex;
    align-items:center;
    ${'' /* perspective: 1px;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto; */}

    .parallax__layer {
    ${'' /* position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 100vh 0; */}
    ${'' /* transform-style: preserve-3d; */}
    width: 100%;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    margin-right: -.3em
    }
    .parallax__layer--base {
    transform: translateZ(0);
    display: inline-block;
    white-space: normal;
    }
    .parallax__layer--back {
        transform: translateZ(60px) scale(.8);
        transform-origin: 10% 50%;
        display: inline-block;
        white-space: normal;

    }

    .content-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 0px 100px 100px;
    }

    .scroll-content-container{
        transform: translateZ(60px) scale(.8);
        height:100%;
        width:100%;
    }
    .portfolio-name{
        font-family:${theme.largeFont};
        font-size: 6rem;

        margin: 0px 0px 20px;

        text-align: left;
        
    }

    .portfolio-sub-name{
        font-family:${theme.experimentalFont};
       font-size: 1.6rem;
       letter-spacing:3px;
       color:#00000073;
       padding: 5px;
       text-align: left;

}
       
    }

    .longer-bio{
        font-size:2rem;
        ${theme.globalTextFont};
        color: #000000a6;
        text-align: left;
        width: 405px;
        line-height: 3rem;
        text-align:left;

        
    }

    .front-end-project-title{
            margin:20px 0px;
            padding-bottom:10px;
            text-align:left;
            font-family:${theme.largeFont};
            border-bottom:1px solid lightgray;
            font-size: 4.2rem;
            

        .secondary-heading{
            font-family:${theme.experimentalFont};
            color:#00000073;
            font-size: 1.5rem;
            
            font-weight: 800;
        }

        
    }
    .front-end-description-container{
            display:flex;
            width:100%;
            justify-content:space-between;
            

            .front-end-project{
                display:inline-block;
            }

            .title{
                font-size: 5rem;

}
            }
            .text{
                font-size: 2.5rem;
                color: #000000c2;
                

                text-align: left;

                width: 500px;
            }
        }



`



    
   

