import React, {Component} from "react";
import styled from "styled-components";
import {theme} from "./config";
import {ProductCarousel} from "./ProductCarousel";
import {Footer} from "./Footer";
import { debounce } from "underscore";

export class GlobalTopContainer extends Component{


    
    componentDidMount(){
        
        if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        
        ){
            //     // what you want to run in mobile
            document.addEventListener('scroll', this.dropTextAndOpacity,true)
            document.addEventListener('scroll', this.titleTextAndOpacity,true)
            document.addEventListener('scroll', this.uCdTextAndOpacity,true)
            document.addEventListener('scroll', this.showFooter,true)
        }
        else{
            
            document.addEventListener('scroll', this.dropTextAndOpacity,true);
            document.addEventListener('scroll', this.titleTextAndOpacity,true);
            document.addEventListener('scroll', this.iconDescTextAndOpacity,true);
            document.addEventListener('scroll', this.uCdTextAndOpacity,true)
            document.addEventListener('scroll', this.showFooter,true)
        
            // document.addEventListener('scroll', debounce(this.dropTextAndOpacity,true),2000,true);
            // document.addEventListener('scroll', debounce(this.titleTextAndOpacity,true),2000,true);
            // document.addEventListener('scroll', debounce(this.iconDescTextAndOpacity,true),2000,true);
            // document.addEventListener('scroll', debounce(this.uCdTextAndOpacity,true),2000,true)
            // document.addEventListener('scroll', debounce(this.showFooter,true),2000,true);
           
           
        }
        
        // adding true here was extremely important for react
    }

   

    
    
    hideContactPopup(){
       
       
            let contactInfo = document.querySelector(".hidden-contact-info")
            contactInfo.classList.add("hidden")
        

    }

    showFooter = debounce(() =>{
    
          
            let globalSlideContainer_rect = document.querySelector(".begin-footer-marker").getBoundingClientRect()
            let hidden_footer = document.querySelector(".contact-footer")
            console.log()
           
            console.log("scrolling")
            if (globalSlideContainer_rect.top <= window.innerHeight){
               
                console.log("winner")
                hidden_footer.classList.remove("hidden-footer")
            }
            else{
                
                hidden_footer.classList.add("hidden-footer")
            }
        
    },5,true);

    dropTextAndOpacity = debounce((e) => {
        
        let elementList = document.querySelectorAll(".big-overview-text")
        elementList.forEach( element => {

            let elDistFromTop = element.getBoundingClientRect().top
            let innerWindowSize = window.innerHeight

            if(elDistFromTop < innerWindowSize){
                element.classList.add("fade-up-delay")
            }




        })
      
        console.log('scrolling');
        
      // do something at end of scroll
        
            
    
        
    },5,true);

    

    titleTextAndOpacity = debounce((e) => {
        
        let elementList = document.querySelectorAll(".strong-title")
        elementList.forEach( element => {

            let elDistFromTop = element.getBoundingClientRect().top
            let innerWindowSize = window.innerHeight

            if(elDistFromTop < innerWindowSize){
                element.classList.add("fade-up")
            }




        })

        // console.log(y,innerWindowSize
    },5,true);

    iconDescTextAndOpacity = debounce((e) => {
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
    },5,true);

    uCdTextAndOpacity = debounce((e) => {
        
        let elementList = document.querySelectorAll(".ucd-paragraph")
        elementList.forEach( element => {

            let elDistFromTop = element.getBoundingClientRect().top
            let innerWindowSize = window.innerHeight

            if(elDistFromTop < innerWindowSize){
                element.classList.add("fade-up")
            }




        })


        
        // console.log(y,innerWindowSize
    },5,true);

    

    render(){

        return(
            <StyledGlobalTopContainer className="global-slide-container" onClick={this.hideContactPopup}>
                {/* <Nav/> */}
                <div className="parallax__layer parallax__layer--intro">
                    <div className="scroll-content-container">
                        <h2 className="portfolio-sub-name">FULL STACK ENGINEER</h2>
                        <h1 className="portfolio-name">Documenting the detail.</h1>
                                        
                        <div className="longer-bio">
                            <p>I am a developer living in San Francisco.  It is my strong belief that small details make all the difference in the quality we perceive in the people and things that surround us.  <span className="hidden-mobile">My goal is to continue learning, appreciating, and contributing to some of those details.</span></p>

                            
                            <a href="#project-quick-anchor"><i className="fas fa-chevron-down"></i></a>   
                        </div>
                        
                      
                    </div>
                </div>
                
                <div  className="parallax__layer parallax__layer--a" >
                    <div className="front-end-description-container">
                        <a href="" className="project-quick-anchor" id="project-quick-anchor"></a>
                        <h1 className="front-end-project title">Professional &<br></br>personal projects.</h1>
                        
                    </div>
                </div>
                <div className="parallax__layer parallax__layer--c">
                    
                    <div className="content-container full">
                    <div className="front-end-description-container">
                        
                        <div className="front-end-project text"><br></br> <strong className="strong-title"><em>Tieme Ndo</em> CRM</strong> <div className="big-overview-text"> <strong>React & Redux</strong><br></br> <strong> Java Spring &</strong> <strong>PostgreSQL</strong></div></div>
                        
                    </div>
                        <ProductCarousel className="product-carousel" imageArray={["tieme_mark_s","tieme_home_s","tieme_click_s"]}/>
                        <div className="under-carousel-description-cont">
                        <p className="ucd-paragraph">The Tieme Ndo CRM was developed for an <a href="http://tiemendo.com/cord" rel="noopener noreferrer" target="_blank">organization</a> that supports the operational needs of rural Ghanaian farmers with little to no upfront cost. 
                            Project scope was the largest concern for the team ultimately resulting in the prioritization of code extensibility over a full feature set. <br></br><br></br>I was involved in every part of the technical stack for this project skewing toward front end & design. Peek at one implementation of pageable resources on the <a href="https://github.com/labs13-agriculture/front-end/blob/master/src/components/ClientView/ClientResultsBtn.js">front end</a> & <a href="https://github.com/labs13-agriculture/Tiemendo-Back-End/commit/75cec8a5039a74f2b85bea24a817781e860c6719#diff-1be246628e927478032aee8ec0432917">back end</a>. Or <a href="https://github.com/labs13-agriculture/front-end/blob/master/src/components/ClientView/ClientCard.js">check out</a> how a react-strap modal was extended into a spacially aware drop down for a better search result experience. Still reading? <a href="https://github.com/labs13-agriculture/front-end/blob/master/src/components/ManageUsers/SearchUsers.js">Search as you type</a> and <a href="https://github.com/labs13-agriculture/front-end/blob/master/src/components/ManageUsers/UserDetails.js">pre-populated</a> forms were two other fun features.</p>
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
                                    <a href="http://tiemendocrm.com/" rel="noopener noreferrer" target="_blank">
                                            <div className="icon-position-container">
                                                <div className="ucd-icon"><i class="fas fa-tv"></i></div>
                                                <div className="ucd-icon-description islink">Visit Site.</div>
                                            </div>
                                        </a>
                                    </div>
                                
                                
                               
                                    <div className="icon-container">
                                        <a href="https://github.com/labs13-agriculture" rel="noopener noreferrer" target="_blank">
                                            <div className="icon-position-container">
                                                <div className="ucd-icon"><i class="fab fa-git-square"></i></div>
                                                <div className="ucd-icon-description islink">View Code.</div>
                                            </div>
                                        </a>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="parallax__layer parallax__layer--b">
                    <div className="front-end-description-container">
                
                        <div className="front-end-project text"><strong className="strong-title"><em>Flocks</em></strong><div className="big-overview-text"><strong>React & Redux </strong><br></br> <span className="elevator-line"><strong>Sentiment analysis UI</strong></span></div></div>
                        
                    </div>
                
                    <div className="content-container full">
                        
                        <ProductCarousel imageArray={["flocks_s","flocks_g_s"]}/>
                        <div className="under-carousel-description-cont">
                            <p className="ucd-paragraph">Flocks analyzes the toxicity of tweets. The front end leveraged the Twitter API to facilitate searches of <a href="https://github.com/flocks1/login/blob/master/src/components/ItemList.js">trending topics</a> and to display tweets processed by the toxicity algorithm.  Pace was a major challenge during this project as there were only three real coding days.  Consequently, sourcing and <a href ="https://github.com/flocks1/login/blob/master/src/components/DataVisVue.js">integrating</a> with third party data visualization components was an essential compromise. The team included four data science students + Google's open source natural language processing (BERT) and
                            one back-end engineer.  The Sentiment API is still in progress. I was responsible for the entire front end component architecture and design.</p>
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
                                    <a href="https://getflocks.herokuapp.com/register" rel="noopener noreferrer" target="_blank">
                                            <div className="icon-position-container">
                                                <div className="ucd-icon"><i class="fas fa-tv"></i></div>
                                                <div className="ucd-icon-description islink">Visit Site.</div>
                                            </div>
                                        </a>
                                    </div>
                                
                                
                                
                                    <div className="icon-container">
                                    <a href="https://github.com/flocks1/login" rel="noopener noreferrer" target="_blank">
                                            <div className="icon-position-container">
                                                <div className="ucd-icon"><i class="fab fa-git-square"></i></div>
                                                <div className="ucd-icon-description islink">View Code.</div>
                                            </div>
                                        </a>
                                    </div>
                                
                                

                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="parallax__layer parallax__layer--d">
                    <div className="front-end-description-container">
                    
                        <div className="front-end-project text"> <strong className="strong-title"><em>The Void</em></strong><div className="big-overview-text"><strong>React & Redux</strong><br></br><strong> Django &</strong> <strong>PostgreSQL</strong><span className="elevator-line"></span></div></div>
                    
                    </div>
                    <div className="content-container full">
                        
                        <ProductCarousel imageArray={["void_s"]}/>
                        <div className="under-carousel-description-cont">
                            <p className="ucd-paragraph">The Void is a <a href="https://en.wikipedia.org/wiki/MUD">multi-user dungeon</a> (aka a multi-player game). This project required me to learn a completely new web framework &mdash; Django &mdash; in order to extend & deploy an inherited codebase.<br></br><br></br> I collaborated with another back-end engineer to create a flexible development pipeline facilitating local development on Django's native SQLite while deploying to PostgreSQL on Heroku.  I also enjoyed implementing a <a href="https://github.com/cs-build-week1-good-dev/mud-frontend/blob/master/src/components/main/ChatWindow.js">WebSocket based chat feature</a> on the frond end and back end.  The <a href="https://pusher.com/docs/channels">Pusher API</a> provided the backbone for our room specific chat channels.</p> 
                            <div className="ucd-infographic">
                                <div className="icon-container">
                                    <div className="icon-position-container">
                                        <div className="ucd-icon"><h1 className="icon-number">5</h1></div>
                                        <div className="ucd-icon-description">Team members. 4 Full stack dev. 1 Android</div>
                                    </div>
                                </div>
                                <div className="icon-container">
                                    <div className="icon-position-container">
                                        <div className="ucd-icon"><h1 className="icon-number">4</h1></div>
                                        <div className="ucd-icon-description"> Project days.</div>
                                    </div>
                                </div>
                                
                                    <div className="icon-container">
                                        <a href="https://agitated-curran-1cd505.netlify.com/" rel="noopener noreferrer" target="_blank">
                                            <div className="icon-position-container">
                                                <div className="ucd-icon"><i class="fas fa-tv"></i></div>
                                                <div className="ucd-icon-description islink">Visit Site.</div>
                                            </div>
                                        </a>
                                    </div>
                               
                            
                                <div className="icon-container">
                                    <a href="https://github.com/cs-build-week1-good-dev/" rel="noopener noreferrer" target="_blank">
                                        <div className="icon-position-container">
                                            <div className="ucd-icon"><i class="fab fa-git-square"></i></div>
                                            <div className="ucd-icon-description islink">View Code.</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="parallax__layer parallax__layer--b">
                    <div className="front-end-description-container">
                    
                        <div className="front-end-project text"> <strong className="strong-title"><em>Talweg</em></strong><div className="big-overview-text"><strong>React & Express</strong><br></br><span className="elevator-line"><strong>Subscription management</strong></span></div></div>
                    
                    </div>
                    <div className="content-container full">
                        
                        <ProductCarousel imageArray={["talweg_s"]}/>
                        <div className="under-carousel-description-cont">
                            <p className="ucd-paragraph">Talweg is a personal project trying to address inefficiences in subscription services by providing secure credential management for its users. I entered it into the <a href="https://pioneer.app/">Pioneer</a> contest while learning React and finished in the top 20 of 100+ student entrants in peer voting. It is my first foray into Chrome extensions, password management & browser automation. It is still in progress.</p>
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
                                        <a href="https://talweg.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                                            <div className="icon-position-container">
                                                <div className="ucd-icon"><i class="fas fa-tv"></i></div>
                                                <div className="ucd-icon-description islink">Visit Site.</div>
                                            </div>
                                        </a>
                                    </div>
                               
                            
                                <div className="icon-container">
                                    <a href="https://github.com/dgbailey/talweg_be" rel="noopener noreferrer" target="_blank">
                                    
                                        <div className="icon-position-container">
                                            <div className="ucd-icon"><i class="fab fa-git-square"></i></div>
                                            <div className="ucd-icon-description islink">View Code.</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="begin-footer-marker"></div>

                    
                
            
                
            
                
    
                <Footer/>
            </StyledGlobalTopContainer>
        )

    }
            
}



const StyledGlobalTopContainer = styled.section`

${'' /* https://developers.google.com/web/updates/2016/12/performant-parallaxing */}

    overflow-x: hidden;
    overflow-y: scroll;
    white-space: nowrap;
  
   
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    
    
    perspective: 300px;
    scroll-behavior: smooth;
    width: 100%;
    height:100%;

    ${'' /* DUSTIN FLEXING THIS LAYER CAUSES BIG PROBS WITH PARALLAX IN SAFARI */}
    a{
        color: #0080ffc9;
                &:link{
                    color: #0080ffc9;
                   
                }



                
            }
   
   
    .parallax__layer {
    ${'' /* will-change:transform; */}
    width: 100%;
    vertical-align: middle;
    white-space: normal;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
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
    
    justify-content:center;
    flex-direction:column;
    
    background: #f7f7f7;
    height:900px;

    @media(max-width:1000px){
        height:1024px;
        padding:0px;

    }

    @media(max-width:590px){
        height:736px;
        padding:0px;
                
           
             
    }

    @media(max-width:400px){
        height:667px;
        padding:0px;
                
           
             
    }

    

    

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
                color:#5f5f5f;
                
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
   
   .project-quick-anchor{
  
        display: block;
        position: relative;
        top: -70px;
        visibility: hidden;


   }

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
            margin-top: 10%;
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
            width: 84vw;
        }
    }
    .portfolio-name{
        font-family:${theme.largeFont};
        font-size: 8rem;
        font-weight:500;
        color:black;
        

        margin: 20px 0px 20px;

        text-align: center;
        -webkit-animation: fade-in-animation .5s both; /* Safari 4+ */
        -moz-animation:    fade-in-animation 1s both; /* Fx 5+ */
        -o-animation:      fade-in-animation 1s both; /* Opera 12+ */
        animation:         fade-in-animation 1s both; /* IE 10+, Fx 29+ */

        @media(max-width:1000px){
            font-size: 6rem;
        }

        animation-delay:.3s;
        @media (max-width:590px){
            font-size: 5.2rem;
            width:100%;
            
        }
        @media (max-width:570px){
            font-size: 3.2rem;
            
            width: 92vw;
            
        }
    }

    .portfolio-sub-name{
        
        font-family:${theme.experimentalFont};
        font-size: 1.7rem;
       letter-spacing:8px;
       color:#5f5f5f;
       padding: 5px 5px 10px;
       text-align: center;
       animation:transform-animation 1s ease; /* IE 10+, Fx 29+ */
      
        @media (max-width:590px){
            
            font-size: 1.3rem;
            padding: 5px 0px 10px;
           
        }
    }
       
    

    .longer-bio{
        
        font-size:2.5rem;
        ${theme.globalTextFont};
        -webkit-animation: fade-in-animation .5s both; /* Safari 4+ */
        -moz-animation:fade-in-animation 1.3s both; /* Fx 5+ */
        -o-animation:fade-in-animation 1.3s both; /* Opera 12+ */
        animation:fade-in-animation 1.3s both; /* IE 10+, Fx 29+ */

        animation-delay:.5s;
        ${'' /* https://stackoverflow.com/questions/42446163/elements-with-animation-delay-briefly-appear-before-fading-in-using-purely-css3 */}
        ${'' /* transition-delay: .15s;
        animation-delay: .15s; */}
        color: #5f5f5f;
        text-align: center;
        width: 853px;
        line-height: 3.5rem;


        .fas.fa-chevron-down {

            padding: 40px;
            font-size: 4rem;
            color: #d3d3d363;
            transition:.5s ease;

            &:hover{
                cursor:pointer;
                color:lightgray;
            }
        }

        @media(max-width:1000px){
            font-size: 2rem;
            width:600px;
       }

        @media(max-width:590px){
           
           width:100%;
           font-size:1.7rem;
           line-height: 2.5rem;
           width: 100%;
           .hidden-mobile{
               display:none;
           }
       }

       

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
        color:#5f5f5f;
        
    }

    .under-carousel-description-cont{
        display:flex;
        justify-content:space-between;
        width: 60vw;
        margin-top: 10%;
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
            color: #5f5f5f;
            line-height: 2.75rem;

            @media(max-width:1000px){
            
            flex-direction:column;
            width:100%;

            }
            
        
        }

        .ucd-infographic {
            color:#5f5f5f;
            width: 45%;
            display:grid;
            grid-template-columns:repeat(2,auto);
            grid-template-row:repeat(2,auto);
            height: 300px;
            a{
            text-decoration:none;
            &:link{color:#5f5f5f;
            }

            &:visited{
                color:#5f5f5f;
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
            &:hover{
                .islink{
                    color:#5b2dff;
                }
                
            }

        }

        .icon-position-container {

            display: flex;
            flex-direction: column;
            align-items: flex-start;
           

            }


    }

    #hidden-nav{
        visibility:hidden;
    }
    .sticky-expand{
        ${'' /* these first two styles fixed jumping sticky carousel in safari */}
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        
        
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        transform: scale(1.23,1.28);
        ${'' /* margin-top:38px; */}
        -webkit-perspective: 1000;
        
        z-index:1000;
        
        .product-image{
          
            border-radius:0px;
            margin-top: 12px;
        }

        .slide-num-visual{
            display:none;
        }
       
    
    }

    .begin-footer-marker{
        height: 40px;
        width: 100%;

    }

   
    

    .fab.fa-git-square {
    font-size: 4.2rem;
    }

    .fade-in{
    -webkit-animation: fade-in-animation .5s both; /* Safari 4+ */
    -moz-animation:    fade-in-animation 2s both; /* Fx 5+ */
    -o-animation:      fade-in-animation 2s both; /* Opera 12+ */
    animation:         fade-in-animation 2s both; /* IE 10+, Fx 29+ */
    }

    .fade-in-opacity-only{
    -webkit-animation: fade-in-opacity-only-animation .5s both; /* Safari 4+ */
    -moz-animation:    fade-in-opacity-only-animation 2s both; /* Fx 5+ */
    -o-animation:      fade-in-opacity-only-animation 2s both; /* Opera 12+ */
    animation:         fade-in-opacity-only-animation 2s both; /* IE 10+, Fx 29+ */
    }

    .fade-in-icon{
    -webkit-animation: fade-in-icon .5s both; /* Safari 4+ */
    -moz-animation:    fade-in-icon 1.1s both; /* Fx 5+ */
    -o-animation:      fade-in-icon 1.1s both; /* Opera 12+ */
    animation:         fade-in-icon 1.1s both; /* IE 10+, Fx 29+ */
    }

    .fade-up{
    -webkit-animation: fade-up-animation .5s both; /* Safari 4+ */
    -moz-animation:    fade-up-animation 1.1s both; /* Fx 5+ */
    -o-animation:      fade-up-animation 1.1s both; /* Opera 12+ */
    animation:         fade-up-animation 1.1s both; /* IE 10+, Fx 29+ */
    }

    .fade-up-delay{
    -webkit-animation: fade-up-animation .5s both; /* Safari 4+ */
    -moz-animation:    fade-up-animation 1.4s both; /* Fx 5+ */
    -o-animation:      fade-up-animation 1.4s both; /* Opera 12+ */
    animation:         fade-up-animation 1.4s both; /* IE 10+, Fx 29+ */
    }

    .transform-animation{
    -webkit-animation: fade-up-animation .5s both; /* Safari 4+ */
    -moz-animation:    fade-up-animation 1.4s both; /* Fx 5+ */
    -o-animation:      fade-up-animation 1.4s both; /* Opera 12+ */
    animation:         fade-up-animation 1.4s both; /* IE 10+, Fx 29+ */
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
            transform:translateY(5px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @-moz-keyframes fade-in-icon {
        0%   { opacity: 0; 
            transform:translateY(5px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @-o-keyframes fade-in-icon {
        0%   { opacity: 0; 
            transform:translateY(5px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @keyframes fade-in-icon {
        0%   { opacity: 0; 
            transform:translateY(5px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }


    ${'' /* fadeup */}
    @-webkit-keyframes fade-up-animation {
    0%   { opacity: 0; 
            transform:translateY(40px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @-moz-keyframes fade-up-animation {
        0%   { opacity: 0; 
            transform:translateY(40px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @-o-keyframes fade-up-animation {
        0%   { opacity: 0; 
            transform:translateY(40px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @keyframes fade-up-animation {
        0%   { opacity: 0; 
            transform:translateY(40px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }

    ${'' /* fadeup-delay */}
    @-webkit-keyframes fade-up-delay-animation {
    0%   { opacity: 0; 
            transform:translateY(20px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @-moz-keyframes fade-up-delay-animation {
        0%   { opacity: 0; 
            transform:translateY(20px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @-o-keyframes fade-up-delay-animation {
        0%   { opacity: 0; 
            transform:translateY(20px)}
            
    100% { opacity: 1; 
        transform:translateY(0px)}
    }
    @keyframes fade-up-delay-animation {
        0%   { opacity: 0; 
            transform:translateY(20px)}
            
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



    
   

