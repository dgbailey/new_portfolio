import React, {Compoent} from "react";
import styled from "styled-components";
import {theme} from "./config";
import {ProductCarousel} from "./ProductCarousel";

export const GlobalTopContainer = () => {
    return(
        <StyledGlobalTopContainer>
            <div className="parallax__layer parallax__layer--intro">
                <div className="scroll-content-container">
                    <h2 className="portfolio-sub-name">FULL STACK ENGINEER</h2>
                    <h1 className="portfolio-name">Dustin Bailey</h1>
                                    
                    <p className="longer-bio">A developer with immense appreciation for beautiful design throughout the technical stack.
                        Currently residing in San Francisco.
                                        
                    </p>
                </div>
            </div>
           
            <div className="parallax__layer parallax__layer--a">
                <div className="front-end-description-container">
                    <h1 className="front-end-project title">Professional &<br></br>personal projects.</h1>
                    <div className="front-end-project text"><br></br> <strong>Tieme Ndo CRM.</strong><br></br>  <strong>React &</strong> <strong>Redux.</strong><br></br> <strong> Java Spring &</strong> <strong>PostgreSQL.</strong></div>
                    
                </div>
            </div>
            <div className="parallax__layer parallax__layer--c">
                
                <div className="content-container full">
                    
                    <ProductCarousel imageArray={["tieme_mark_s","tieme_click_s","tieme_home_s"]}/>
                </div>
            </div>
            <div className="parallax__layer parallax__layer--b">
                <div className="front-end-description-container">
            
                    <div className="front-end-project text"><strong>Flocks</strong><br></br><strong>React &</strong> <strong>Redux. </strong><br></br> Sentiment analysis UI.</div>
                    
                </div>
            
                <div className="content-container full">
                    
                    <ProductCarousel imageArray={["flocks_s","flocks_g_s"]}/>
                </div>
            </div>
            
            <div className="parallax__layer parallax__layer--d">
                <div className="front-end-description-container">
                
                    <div className="front-end-project text"> <strong>Talweg</strong> <br></br> <strong>React &</strong> <strong>Redux.</strong><br></br>Subscription management.</div>
                
                </div>
                <div className="content-container full">
                    
                    <ProductCarousel imageArray={["talweg_s"]}/>
                </div>
            </div>
           

                
            
           
            
           
            
   

        </StyledGlobalTopContainer>
    )
}



const StyledGlobalTopContainer = styled.section`

    overflow-x: hidden;
    overflow-y: auto;
    white-space: nowrap;
    position: absolute;
    
    perspective: 300px;
    scroll-behavior: smooth;
    width: 100%;
    height:100%;

    ${'' /* DUSTIN FLEXING THIS LAYER CAUSES BIG PROBS WITH PARALLAX IN SAFARI */}

   
   
    .parallax__layer {
    
    width: 100%;
   
    
    vertical-align: middle;
    white-space: normal;
    ${'' /* transform-style:preserve-3d; */}
    
    }
    .parallax__layer--intro {
    transform: translateZ(0);
    
    white-space: normal;
    display:flex;
    align-items:center;
    padding:12%;
    justify-content:center;
    flex-direction:column;
    
    background: #f7f6f6;
    }
    .parallax__layer--a {
    transform: translateZ(0);
    
    
    white-space: normal;
    display:flex;
    align-items:center;
    margin-top:12%;
    justify-content:center;
    flex-direction:column;
    .front-end-description-container{
        display:flex;
        flex-direction:column;
        width:70vw;
        .text{
            font-size:5rem;
            width:700px;
        }
    }

    }
    .parallax__layer--b {
    transform: translateZ(0);
    ${'' /* display: inline-block; */}
    white-space: normal;
    display:flex;
    align-items:center;
    margin-top:12%;
    justify-content:center;
    flex-direction:column;

        .front-end-description-container{
            width:70vw;
            justify-content:flex-start;
            .text{
                font-size:5rem;
                width:600px;
            }
        
        }
    }

    .parallax__layer--c {
    transform: translateZ(60px) scale(.8);
    ${'' /* display: inline-block; */}
    white-space: normal;
    display:flex;
    align-items:flex-end;
    top:3vh;
    position:relative;
    justify-content: center;
    flex-direction:column;
    align-items:center;
    
    

    
    }

    .parallax__layer--d{
        transform: translateZ(60px) scale(.8);
        ${'' /* display: inline-block; */}
        white-space: normal;
        display:flex;
        align-items:flex-end;
        top:3vh;
        position:relative;
        justify-content: center;
        flex-direction:column;
        align-items:center;
        transform-origin: 50% 120%;
        .front-end-description-container{
            width:70vw;
            justify-content:flex-start;
            .text{
                font-size:5rem;
                width:600px;
            }
        
        }
    

    
    }
    .parallax__layer--back {
        transform: translateZ(60px) scale(.7);
        justify-content:center;
        display: flex;
        white-space: normal;
        z-index:2;

    }

    .content-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        transform: translateZ(60px) scale(1);
        height:100%;
       
    }

    .scroll-content-container{
        transform: translateZ(60px) scale(1);
        height:100%;
        
        display:flex;
        flex-direction:column;
        justify-content:center;
        height:400px;
    }
    .portfolio-name{
        font-family:${theme.largeFont};
        font-size: 8rem;
        font-weight:500;

        margin: 0px 0px 20px;

        text-align: center;
        -webkit-animation: fade-in-animation 1s ease; /* Safari 4+ */
        -moz-animation:    fade-in-animation 1s ease; /* Fx 5+ */
        -o-animation:      fade-in-animation 1s ease; /* Opera 12+ */
        animation:         fade-in-animation 1s ease; /* IE 10+, Fx 29+ */
        
    }

    .portfolio-sub-name{
        font-family:${theme.experimentalFont};
       font-size: 1.6rem;
       letter-spacing:3px;
       color:#00000073;
       padding: 5px;
       text-align: center;
       animation:fade-in-animation 1s ease; /* IE 10+, Fx 29+ */

    }
       
    

    .longer-bio{
        
        font-size:2.8rem;
        ${theme.globalTextFont};
        -webkit-animation: fade-in-animation 1.1s both; /* Safari 4+ */
        -moz-animation:fade-in-animation 1.1s both; /* Fx 5+ */
        -o-animation:fade-in-animation 1.1s both; /* Opera 12+ */
        animation:fade-in-animation 1.1s both; /* IE 10+, Fx 29+ */

        ${'' /* https://stackoverflow.com/questions/42446163/elements-with-animation-delay-briefly-appear-before-fading-in-using-purely-css3 */}
        transition-delay: .15s;
        animation-delay: .15s;
        color: #000000a6;
        text-align: center;
        width: 600px;
        padding:0px 40px;
       

        
        

        
    }

    .front-end-project.title{
            
            text-align:left;
            font-family:${theme.largeFont};
            
            font-size: 4.2rem;
            
            

        .secondary-heading{
            font-family:${theme.experimentalFont};
            color:#00000073;
            font-size: 2.7rem;
            
            font-weight: 800;
        }

        
    }
    .front-end-description-container{
            display:flex;
            width:100%;
            justify-content:space-between;
            margin:2vh;
            

            .front-end-project{
                display:inline-block;
            }

            .title{
                font-size: 5rem;


            }
            .text{
                font-size: 3.5rem;
                color: #000000c2;
                

                text-align: left;

                width: 500px;
            }

            
    }

    .fade-in {
    -webkit-animation: fade-in-animation 2s ease; /* Safari 4+ */
    -moz-animation:    fade-in-animation 2s ease; /* Fx 5+ */
    -o-animation:      fade-in-animation 2s ease; /* Opera 12+ */
    animation:         fade-in-animation 2s ease; /* IE 10+, Fx 29+ */

    @-webkit-keyframes fade-in-animation {
    0%   { opacity: 0; 
            transform:translateY(-50px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @-moz-keyframes fade-in-animation {
        0%   { opacity: 0; 
            transform:translateY(-50px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @-o-keyframes fade-in-animation {
        0%   { opacity: 0; 
            transform:translateY(-50px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @keyframes fade-in-animation {
        0%   { opacity: 0; 
            transform:translateY(-50px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }


    
}

`



    
   

