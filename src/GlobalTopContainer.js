import React, {Component} from "react";
import styled from "styled-components";
import {theme} from "./config";
import {ProductCarousel} from "./ProductCarousel";

export class GlobalTopContainer extends Component{


    
    componentDidMount(){
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            // what you want to run in mobile

        }
        else{
            document.addEventListener('scroll', this.dropTextAndOpacity,true)
            document.addEventListener('scroll', this.titleTextAndOpacity,true)
            document.addEventListener('scroll', this.iconDescTextAndOpacity,true)
            document.addEventListener('scroll', this.uCdTextAndOpacity,true)
        }
        
        // adding true here was extremely important
    }
    

    dropTextAndOpacity = (e) => {
        
        let elementList = document.querySelectorAll(".big-overview-text")
        elementList.forEach( element => {

            let elDistFromTop = element.getBoundingClientRect().top
            let innerWindowSize = window.innerHeight

            if(elDistFromTop < innerWindowSize){
                element.classList.add("fade-up-delay")
            }




        })
      
        
        
      // do something at end of scroll
        
            
    
        
    }

    titleTextAndOpacity = (e) => {
        
        let elementList = document.querySelectorAll(".strong-title")
        elementList.forEach( element => {

            let elDistFromTop = element.getBoundingClientRect().top
            let innerWindowSize = window.innerHeight

            if(elDistFromTop < innerWindowSize){
                element.classList.add("fade-up")
            }




        })

        // console.log(y,innerWindowSize
    }

    iconDescTextAndOpacity = (e) => {
        let subElementList = document.querySelectorAll(".ucd-icon-description")
        let elementList = document.querySelectorAll(".icon-position-container")
        elementList.forEach( element => {

            let elDistFromTop = element.getBoundingClientRect().top
            let innerWindowSize = window.innerHeight

            if(elDistFromTop < innerWindowSize){
                element.classList.add("fade-in-icon")
            }




        })

        subElementList.forEach( element => {

            let elDistFromTop = element.getBoundingClientRect().top
            let innerWindowSize = window.innerHeight

            if(elDistFromTop < innerWindowSize){
                element.classList.add("fade-in-opacity-only")
            }




        })


        
        // console.log(y,innerWindowSize
    }

    uCdTextAndOpacity = (e) => {
        
        let elementList = document.querySelectorAll(".ucd-paragraph")
        elementList.forEach( element => {

            let elDistFromTop = element.getBoundingClientRect().top
            let innerWindowSize = window.innerHeight

            if(elDistFromTop < innerWindowSize){
                element.classList.add("fade-up")
            }




        })


        
        // console.log(y,innerWindowSize
    }

    

    render(){

        return(
            <StyledGlobalTopContainer>
                <div className="parallax__layer parallax__layer--intro">
                    <div className="scroll-content-container">
                        <h2 className="portfolio-sub-name">FULL STACK ENGINEER</h2>
                        <h1 className="portfolio-name">Dustin Bailey</h1>
                                        
                        <div className="longer-bio">
                            <p>San Francisco, CA</p>

                            <div className="contact-icon-container">
                                <a href="mailto:bailey.dust@gmail.com?subject=Saw Your Portfolio" ><i class="fas fa-at"></i></a>
                                <a href="https://github.com/dgbailey" target="_blank"><i class="fab fa-github-alt"></i></a>
                                <a href="https://www.linkedin.com/in/dustin-bailey-758ab195/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                                            
                        </div>
                      
                    </div>
                </div>
            
                <div  className="parallax__layer parallax__layer--a">
                    <div className="front-end-description-container">
                        <h1 className="front-end-project title">Professional &<br></br>personal projects.</h1>
                        
                    </div>
                </div>
                <div className="parallax__layer parallax__layer--c">
                    
                    <div className="content-container full">
                    <div className="front-end-description-container">
                        
                        <div className="front-end-project text"><br></br> <strong className="strong-title"><em>Tieme Ndo</em> CRM</strong> <div className="big-overview-text"> <strong>React & Redux.</strong><br></br> <strong> Java Spring &</strong> <strong>PostgreSQL.</strong></div></div>
                        
                    </div>
                        <ProductCarousel imageArray={["tieme_mark_s","tieme_home_s","tieme_click_s"]}/>
                        <div className="under-carousel-description-cont">
                        <p className="ucd-paragraph">The Tieme Ndo CRM was developed for an <a href="http://tiemendo.com/cord" target="_blank">organization</a> that supports the operational needs of rural Ghanaian farmers with little to no upfront cost. 
                            Project scope was the largest concern for the team, ultimately resulting in the prioritization of code extensibility over a full feature set. <br></br><br></br>I was involved in every part of the technical stack for this project skewing toward front end. Peek at one implementation of pageable resources on the <a href="https://github.com/labs13-agriculture/front-end/blob/master/src/components/ClientView/ClientResultsBtn.js">front end</a> & <a href="https://github.com/labs13-agriculture/Tiemendo-Back-End/commit/75cec8a5039a74f2b85bea24a817781e860c6719#diff-1be246628e927478032aee8ec0432917">back end</a>. Or <a href="https://github.com/labs13-agriculture/front-end/blob/master/src/components/ClientView/ClientCard.js">check out</a> how a react-strap modal was extended into a spacially aware drop down for a better search result experience. Still reading? <a href="https://github.com/labs13-agriculture/front-end/blob/master/src/components/ManageUsers/SearchUsers.js">Search as you type</a> and <a href="https://github.com/labs13-agriculture/front-end/blob/master/src/components/ManageUsers/UserDetails.js">pre-populated</a> forms were two other fun features.</p>
                            <div className="ucd-infographic">
                                <div className="icon-container">
                                    <div className="icon-position-container">
                                        <div className="ucd-icon"><h1 className="icon-number">6</h1></div>
                                        <div className="ucd-icon-description">Team members. Full stack dev, android & team lead.</div> 
                                    </div>
                                </div>
                                <div className="icon-container">
                                    <div className="icon-position-container">
                                        <div className="ucd-icon"><h1 className="icon-number">6</h1></div>
                                        <div className="ucd-icon-description"> Project weeks.</div>
                                    </div>
                                </div>
                                
                                    <div className="icon-container">
                                    <a href="http://tiemendocrm.com/" target="_blank">
                                            <div className="icon-position-container">
                                                <div className="ucd-icon"><i class="fas fa-tv"></i></div>
                                                <div className="ucd-icon-description">Website.</div>
                                            </div>
                                        </a>
                                    </div>
                                
                                
                               
                                    <div className="icon-container">
                                        <a href="https://github.com/labs13-agriculture" target="_blank">
                                            <div className="icon-position-container">
                                                <div className="ucd-icon"><i class="fab fa-git-square"></i></div>
                                                <div className="ucd-icon-description">Codebase.</div>
                                            </div>
                                        </a>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="parallax__layer parallax__layer--b">
                    <div className="front-end-description-container">
                
                        <div className="front-end-project text"><strong className="strong-title"><em>Flocks</em></strong><div className="big-overview-text"><strong>React & Redux. </strong><br></br> <span className="elevator-line"><strong>Sentiment analysis UI.</strong></span></div></div>
                        
                    </div>
                
                    <div className="content-container full">
                        
                        <ProductCarousel imageArray={["flocks_s","flocks_g_s"]}/>
                        <div className="under-carousel-description-cont">
                            <p className="ucd-paragraph">Flocks analyzes the toxcicity of tweets. The front end leveraged the Twitter API to facilitate searches of <a href="https://github.com/flocks1/login/blob/master/src/components/ItemList.js">trending topics</a> and to display tweets processed by the toxcicity algorithm.  Pace was a major challenge during this project as there were only three real coding days.  Consequently, sourcing and <a href ="https://github.com/flocks1/login/blob/master/src/components/DataVisVue.js">integrating</a> with third party data visualization components was an essential compromise. The team included four data science students + Google's open source natural language processing (BERT) and
                            one backend engineer.  The Sentiment API is still in progress. I was responsible for the entire front end component architecture and design.</p>
                            <div className="ucd-infographic">
                                <div className="icon-container">
                                    <div className="icon-position-container">
                                        <div className="ucd-icon"><h1 className="icon-number">6</h1></div>
                                        <div className="ucd-icon-description">Team members. Data science, full stack dev & team lead.</div>
                                    </div>
                                </div>
                                <div className="icon-container">
                                    <div className="icon-position-container">
                                        <div className="ucd-icon"><h1 className="icon-number">4</h1></div>
                                        <div className="ucd-icon-description"> Project days.</div>
                                    </div>
                                </div>

                                
                                    <div className="icon-container">
                                    <a href="https://getflocks.herokuapp.com/register" target="_blank">
                                            <div className="icon-position-container">
                                                <div className="ucd-icon"><i class="fas fa-tv"></i></div>
                                                <div className="ucd-icon-description">Website.</div>
                                            </div>
                                        </a>
                                    </div>
                                
                                
                                
                                    <div className="icon-container">
                                    <a href="https://github.com/flocks1/login" target="_blank">
                                            <div className="icon-position-container">
                                                <div className="ucd-icon"><i class="fab fa-git-square"></i></div>
                                                <div className="ucd-icon-description">Codebase.</div>
                                            </div>
                                        </a>
                                    </div>
                                
                                

                                
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="parallax__layer parallax__layer--d">
                    <div className="front-end-description-container">
                    
                        <div className="front-end-project text"> <strong className="strong-title"><em>Talweg</em></strong><div className="big-overview-text"><strong>React & Redux.</strong><br></br><span className="elevator-line"><strong>Subscription management.</strong></span></div></div>
                    
                    </div>
                    <div className="content-container full">
                        
                        <ProductCarousel imageArray={["talweg_s"]}/>
                        <div className="under-carousel-description-cont">
                            <p className="ucd-paragraph">Talweg is a personal project trying to address inefficiences in subscription services by providing secure credential sharing for its users. I entered it into the Pioneer contest and finished in the top 20 of 100+ student entrants. It is my first foray into Chrome extensions, password management & browser automation. It is still in progress.</p>
                            <div className="ucd-infographic">
                                <div className="icon-container">
                                    <div className="icon-position-container">
                                        <div className="ucd-icon"><h1 className="icon-number">1</h1></div>
                                        <div className="ucd-icon-description">Team members. Full stack dev.</div>
                                    </div>
                                </div>
                                <div className="icon-container">
                                    <div className="icon-position-container">
                                        <div className="ucd-icon"><h1 className="icon-number">3</h1></div>
                                        <div className="ucd-icon-description"> Project days.</div>
                                    </div>
                                </div>
                                
                                    <div className="icon-container">
                                        <a href="https://talweg.herokuapp.com/" target="_blank">
                                            <div className="icon-position-container">
                                                <div className="ucd-icon"><i class="fas fa-tv"></i></div>
                                                <div className="ucd-icon-description">Website.</div>
                                            </div>
                                        </a>
                                    </div>
                               
                            
                                <div className="icon-container">
                                    <div className="icon-position-container">
                                        <div className="ucd-icon"><i class="fab fa-git-square"></i></div>
                                        <div className="ucd-icon-description">Codebase.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            

                    
                
            
                
            
                
    

            </StyledGlobalTopContainer>
        )

    }
            
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
    a{
        color: #5b2dff;
                &:link{
                    color: #5b2dff;
                   
                }



                
            }
   
   
    .parallax__layer {
    
    width: 100%;
    vertical-align: middle;
    white-space: normal;
    .front-end-description-container{
        display:flex;
        flex-direction:column;
        width:943.6px;
        max-width:997px;
        border-radius: 4px;

            @media(max-width:1000px){
                width:70vw;
            
            }

            @media(max-width:589px){
                width: 82vw;

                margin: 0px;
            }

        .text{
            font-size: 4.2rem;
            width: 700px;
            display: flex;
            text-align:left;
            flex-direction: column;
            margin: 5% 0%;
            @media(max-width:1000px){
               font-size:4rem;
            
            }
            @media(max-width:589px){
                    font-size:2.4rem;
                }

        }
    }
    ${'' /* transform-style:preserve-3d; */}
    
    }
    .parallax__layer--intro {
    transform: translateZ(0);
    
    white-space: normal;
    display:flex;
    align-items:center;
    padding: 12% 0% 20% 0%;
    justify-content:center;
    flex-direction:column;
    
    background: #f7f6f6;

    .contact-icon-container{
        display:flex:
        width:300px;
        justify-content:space-between;

        margin:10px;

        @media(max-width:590){
             
                
                margin:10px;
        }
        
        a{
            text-decoration:none;
                    
           

            &:link{color:#dcdcdc;
            }

            &:visited{
                color:#dcdcdc;
            }

           

            
        }
        
        i{
            padding:10px 10px 0px;
            &:hover{
                cursor:pointer;
                transition:.5s ease;
                color:gray;
            }
            @media(max-width:590px){
                font-size: 3rem;
                color:#dcdcdc;
            }
        }
    }
}
    .parallax__layer--a {
    transform: translateZ(0);
    
    
    white-space: normal;
    display:flex;
    align-items:center;
    margin-top: 12%;
    justify-content:center;
    flex-direction:column;
   

    }
    .parallax__layer--b {
    margin-top: -5%;
    transform: translateZ(0);
    ${'' /* display: inline-block; */}
    white-space: normal;
    display:flex;
    align-items:center;
    
    justify-content:center;
    flex-direction:column;

    @media(max-width:590px){
        margin-top: 15%;
    }
        
${'' /* 
        .front-end-description-container{
            width:70vw;
            justify-content:flex-start;
            .text{
                font-size: 5rem;
                width: 700px;
                display: flex;
                flex-direction: column;
                margin-top: 5%;
            }
        
        } */}
    }

    .parallax__layer--c {
   
    transform: translateZ(60px) scale(.8);
    ${'' /* display: inline-block; */}
    white-space: normal;
    display:flex;
    align-items:flex-end;
    transform-origin: 50% 25%;
    
    position:relative;
    justify-content: center;
    flex-direction:column;
    align-items:center;
    
    @media(max-width:590px){
        transform: translateZ(0);
    }
    
    }

    
    

    .parallax__layer--d{
        margin-top: 4%;
        transform: translateZ(60px) scale(.8);
        ${'' /* display: inline-block; */}
        white-space: normal;
        display:flex;
        align-items:flex-end;
        
        position:relative;
        justify-content: center;
        flex-direction:column;
        align-items:center;

        @media(max-width:590px){
        transform: translateZ(0);
        
        margin-top: 15%;
        }
        
        
        ${'' /* .front-end-description-container{
            width:70vw;
            justify-content:flex-start;
            .text{
                font-size: 5rem;
                width: 700px;
                display: flex;
                flex-direction: column;
                margin-top: 5%;
            }
        
        } */}
    

    
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
        flex-direction: column;
        align-items: center;
        transform: translateZ(60px) scale(1);
        height:100%;
        border-bottom: 1px solid lightgray;

        padding-bottom: 60px;
       @media(max-width:590px){
        width: 82vw;

       }
    }

    .scroll-content-container{
        transform: translateZ(60px) scale(1);
        height:100%;
        
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:400px;
        @media(max-width:590px){
            width: 82vw;
        }
    }
    .portfolio-name{
        font-family:${theme.largeFont};
        font-size: 8rem;
        font-weight:500;
        

        margin: 0px 0px 20px;

        text-align: center;
        -webkit-animation: fade-in-animation 1s both; /* Safari 4+ */
        -moz-animation:    fade-in-animation 1s both; /* Fx 5+ */
        -o-animation:      fade-in-animation 1s both; /* Opera 12+ */
        animation:         fade-in-animation 1s both; /* IE 10+, Fx 29+ */

        animation-delay:.3s;
        @media (max-width:590px){
            font-size: 5.2rem;
            width:100%;
        }
        @media (max-width:570px){
            font-size: 4.5rem;
            
        }
    }

    .portfolio-sub-name{
        font-family:${theme.experimentalFont};
       font-size: 1.4rem;
       letter-spacing:8px;
       color:#00000073;
       padding: 5px 5px 10px;
       text-align: center;
       animation:transform-animation 1s ease; /* IE 10+, Fx 29+ */
       width: 357.14px;

        @media (max-width:590px){
            font-size: 1.05rem;
        }
    }
       
    

    .longer-bio{
        
        font-size:1.7rem;
        ${theme.globalTextFont};
        -webkit-animation: fade-in-animation 1.1s both; /* Safari 4+ */
        -moz-animation:fade-in-animation 1.1s both; /* Fx 5+ */
        -o-animation:fade-in-animation 1.1s both; /* Opera 12+ */
        animation:fade-in-animation 1.1s both; /* IE 10+, Fx 29+ */

        animation-delay:.3s;
        ${'' /* https://stackoverflow.com/questions/42446163/elements-with-animation-delay-briefly-appear-before-fading-in-using-purely-css3 */}
        ${'' /* transition-delay: .15s;
        animation-delay: .15s; */}
        color: gray;
        text-align: center;
        width: 357.14px;
       

        @media (max-width:590px){
            padding:0px 22px;
            width:100%;
            font-size:1.7rem;
        }
       

        
        

        
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
                font-size: 7rem;
                @media(max-width:1000px){
                    font-size:6rem;
                }
                @media(max-width:589px){
                    font-size:4rem;
                }

                @media(max-width:570px){
                    font-size:3.5xrem;
                }


            }
            ${'' /* .text{
                font-size: 4.5rem;
                color: #000000c2;
                

                text-align: left;

                width: 500px;
            } */}

            
    }
    .strong-title{
        color:black;
        
        
    }

    .elevator-line{
        color:gray;
        
    }

    .under-carousel-description-cont{
        display:flex;
        justify-content:space-between;
        width: 60vw;
        margin-top: 7%;
        overflow:hidden;
        max-width: 947px;
        @media(max-width:1000px){
            width: 70vw;
            flex-direction:column;

        }

        @media(max-width:590px){
            width: 100%;
        }

        .ucd-paragraph{
            font-size: 1.75rem;
            text-align: left;
            width: 50%;
            color: gray;
            line-height: 2.75rem;

            @media(max-width:1000px){
            
            flex-direction:column;
            width:100%;

            }
            
        
        }

        .ucd-infographic {
            color:gray;
            width: 45%;
            display:grid;
            grid-template-columns:repeat(2,auto);
            grid-template-row:repeat(2,auto);
            height: 300px;
            a{
            text-decoration:none;
            &:link{color:gray;
            }

            &:visited{
                color:gray;
            }
        }

            @media(max-width:1000px){
                display: flex;
                width: 100%;
                justify-content: space-between;
                margin-top: 10%;
                flex-wrap:wrap;
                height: 200px;


            }
            @media(max-width:1000px){
                height:250px;
            }

           
            
        }

        .ucd-icon{
            display:inline-block;
            
            padding-bottom:4px;

            i{
                font-size:4.2rem;
            }

            h1{
                font-size:4.2rem;
            }
        }

        .ucd-icon-description{
            display:inline-block;
            width:100px;
            font-size: 1.4rem;
            text-align:left;
        }

        .icon-container {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding-bottom:20px;
            @media(max-width:590px){
                align-items: center;

                width: 50%;
            }
            

        }

        .icon-position-container {

            display: flex;
            flex-direction: column;
            align-items: flex-start;
           

            }


    }

    .fab.fa-git-square {
    font-size: 4.2rem;
    }

    .fade-in{
    -webkit-animation: fade-in-animation 2s ease; /* Safari 4+ */
    -moz-animation:    fade-in-animation 2s ease; /* Fx 5+ */
    -o-animation:      fade-in-animation 2s ease; /* Opera 12+ */
    animation:         fade-in-animation 2s ease; /* IE 10+, Fx 29+ */
    }

    .fade-in-opacity-only{
    -webkit-animation: fade-in-opacity-only-animation 2s ease; /* Safari 4+ */
    -moz-animation:    fade-in-opacity-only-animation 2s ease; /* Fx 5+ */
    -o-animation:      fade-in-opacity-only-animation 2s ease; /* Opera 12+ */
    animation:         fade-in-opacity-only-animation 2s ease; /* IE 10+, Fx 29+ */
    }

    .fade-in-icon{
    -webkit-animation: fade-in-icon 1.1s ease; /* Safari 4+ */
    -moz-animation:    fade-in-icon 1.1s ease; /* Fx 5+ */
    -o-animation:      fade-in-icon 1.1s ease; /* Opera 12+ */
    animation:         fade-in-icon 1.1s ease; /* IE 10+, Fx 29+ */
    }

    .fade-up{
    -webkit-animation: fade-up-animation 1.1s ease; /* Safari 4+ */
    -moz-animation:    fade-up-animation 1.1s ease; /* Fx 5+ */
    -o-animation:      fade-up-animation 1.1s ease; /* Opera 12+ */
    animation:         fade-up-animation 1.1s ease; /* IE 10+, Fx 29+ */
    }

    .fade-up-delay{
    -webkit-animation: fade-up-animation 1.4s ease; /* Safari 4+ */
    -moz-animation:    fade-up-animation 1.4s ease; /* Fx 5+ */
    -o-animation:      fade-up-animation 1.4s ease; /* Opera 12+ */
    animation:         fade-up-animation 1.4s ease; /* IE 10+, Fx 29+ */
    }

    .transform-animation{
    -webkit-animation: fade-up-animation 1.4s ease; /* Safari 4+ */
    -moz-animation:    fade-up-animation 1.4s ease; /* Fx 5+ */
    -o-animation:      fade-up-animation 1.4s ease; /* Opera 12+ */
    animation:         fade-up-animation 1.4s ease; /* IE 10+, Fx 29+ */
    }

    @-webkit-keyframes fade-in-animation {
    0%   { opacity: 0; 
            transform:translateY(-20px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @-moz-keyframes fade-in-animation {
        0%   { opacity: 0; 
            transform:translateY(-20px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @-o-keyframes fade-in-animation {
        0%   { opacity: 0; 
            transform:translateY(-20px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @keyframes fade-in-animation {
        0%   { opacity: 0; 
            transform:translateY(-20px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    ${'' /* fade in opacity only */}

    @-webkit-keyframes fade-in-opacity-only-animation {
    0%   { opacity: 0; 
            }
            
    100% { opacity: 1; 
        }
    }
    @-moz-keyframes fade-in-opacity-only-animation {
        0%   { opacity: 0; 
            }
            
    100% { opacity: 1; 
        }
    }
    @-o-keyframes fade-in-opacity-only-animation {
        0%   { opacity: 0; 
           }
            
    100% { opacity: 1; 
        }
    }
    @keyframes fade-in-opacity-only-animation {
        0%   { opacity: 0; 
            }
            
    100% { opacity: 1; 
        }
    }


    ${'' /* fade in icon */}
    @-webkit-keyframes fade-in-icon {
    0%   { opacity: 0; 
            transform:translateY(10px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @-moz-keyframes fade-in-icon {
        0%   { opacity: 0; 
            transform:translateY(10px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @-o-keyframes fade-in-icon {
        0%   { opacity: 0; 
            transform:translateY(10px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @keyframes fade-in-icon {
        0%   { opacity: 0; 
            transform:translateY(10px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }


    ${'' /* fadeup */}
    @-webkit-keyframes fade-up-animation {
    0%   { opacity: 0; 
            transform:translateY(80px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @-moz-keyframes fade-up-animation {
        0%   { opacity: 0; 
            transform:translateY(80px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @-o-keyframes fade-up-animation {
        0%   { opacity: 0; 
            transform:translateY(80px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @keyframes fade-up-animation {
        0%   { opacity: 0; 
            transform:translateY(80px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }

    ${'' /* fadeup-delay */}
    @-webkit-keyframes fade-up-delay-animation {
    0%   { opacity: 0; 
            transform:translateY(50px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @-moz-keyframes fade-up-delay-animation {
        0%   { opacity: 0; 
            transform:translateY(50px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @-o-keyframes fade-up-delay-animation {
        0%   { opacity: 0; 
            transform:translateY(50px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @keyframes fade-up-delay-animation {
        0%   { opacity: 0; 
            transform:translateY(50px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }

    ${'' /* transform animation */}

    ${'' /* fadeup-delay */}
    @-webkit-keyframes transform-animation {
    0%   { opacity: 0; 
            transform:scale(0.8)}
            
    100% { opacity: 1; 
        transform:scale(1)}
    }
    @-moz-keyframes transform-animation {
        0%   { opacity: 0; 
            transform:scale(0.8)}
            
    100% { opacity: 1; 
        transform:scale(1)}
    }
    @-o-keyframes transform-animation {
        0%   { opacity: 0; 
            transform:scale(0.8)}
            
    100% { opacity: 1; 
        transform:scale(1)}
    }
    @keyframes transform-animation {
        0%   { opacity: 0; 
            transform:scale(0.8)}
            
    100% { opacity: 1; 
        transform:scale(1)}
    }
    


    
}

`



    
   

