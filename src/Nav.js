import React, {Component} from "react";
import styled from "styled-components";
import {theme} from "./config";


export class Nav extends Component{

    
    constructor(){
        super();
        this.state = {
            infoHidden:true
        }
    

    }

    componentDidMount(){
        document.addEventListener('scroll', this.scrollToCloseContactMenu,true)
    }
    
     scrollToCloseContactMenu(){
       
        
        let element = document.querySelector(".hidden-contact-info");
        
        element.classList.remove('false')
        element.classList.add('hidden')
        

       

    }

    clickForContactMenu(){
       
        
        let element = document.querySelector(".hidden-contact-info");
        
       if( element.classList.contains('hidden')){
           element.classList.remove('hidden')
       }
       else{
            element.classList.add('hidden')
       }
     
        

       

    }

   
    

    
    

    
    render(){
        return(
            <StyledNavigation>
                <div className="nav-width-container">
                    <div className="nav-portfolio-name">Dustin Bailey</div>
                    <div className="contact-dropdown-container">
                        
                        <button onClick={this.clickForContactMenu} onScroll={this.scrollCloseContactInfo} className="contact-btn"><span>Contact</span><i class="fas fa-bars"></i></button>
                            <div className={`hidden-contact-info ${this.state.infoHidden && 'hidden'}`}>
                                <div className="dropdown-arrow"></div>
                                <div className="dropdown-menu">
                                    <span className="dropdown-link"><a className="dropdown-icon" href="MAILTO:bailey.dust@gmail.com"><i class="fas fa-envelope"></i></a></span>
                                    <span className="dropdown-link"><a className="dropdown-icon" href="https://github.com/dgbailey"><i class="fab fa-git-square"></i></a></span>
                                    <span className="dropdown-link"><a className="dropdown-icon" href="https://www.linkedin.com/in/dustin-bailey-758ab195/"><i class="fab fa-linkedin"></i></a></span>
                                </div>
                            </div>
                      
                    </div>
                    
                </div>
            </StyledNavigation>
        )

    }
    
    
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
        align-items:center;
        
        @media(max-width:1000px){
            width: 82vw;
        }

        @media(max-width:590px){
            padding: 10px 30px;
            width: 97vw;
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
        background:#0080ff;
        padding:5px;
        color:white;
        transition:.15s ease;
        
       
        font-size: 1.4rem;
        width:auto;
        font-family:${theme.globalTextFont};
        &:hover{
                cursor:pointer;
                background:#0069d2;
                
                
            
            
            
            }
        

        span{
            
           

            
            @media(max-width:590px){
            
                ${'' /* background:lightgray;
                border-radius:5px;
                padding:0px 10px;
                display:inline-block;
                color:white; */}
            }
            
        

        }
       

        .fas.fa-bars{
            display:none;
            font-size:2rem;

            @media(max-width:590px){
                

                display:none;
            }
            
        }

       
        

        
    }

    .contact-dropdown-container{
            display:flex;
            flex-direction:column;
            position:relative;
           
            

            .dropdown-arrow{
                
                top: -6px;
                margin: 0 0 0 -6px;
                width: 12px;
                height: 12px;
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
                border-radius: 4px 0 0 0;
                background: white;
                -webkit-box-shadow: -3px -3px 5px rgba(82,95,127,.04);
                box-shadow: -3px -3px 5px rgba(82,95,127,.04);
                will-change: transform;
                right: 23px;
                
                position:absolute;
                top: 54px;
                z-index:60;
                border-style:solid;
                border-color:lightgray;
                border-width: 1px 0px 0px 1px;
                -webkit-animation: fade-in-opacity-only-animation .3s both; /* Safari 4+ */
                    -moz-animation:    fade-in-opacity-only-animation .3s both; /* Fx 5+ */
                    -o-animation:      fade-in-opacity-only-animation .3s both; /* Opera 12+ */
                    animation:         fade-in-opacity-only-animation .3s both; /* IE 10+, Fx 29+ */
            }

            .dropdown-menu{
                
                width:200px;
                display:flex;
                justify-content:center;
                align-items:center;
                padding:20px;
                position:absolute;
                top:60px;
                left: 3px;
                transform: translateX(-73px);
                box-shadow: 0px 9px 14px -6px rgba(0,0,0,0.11);
                border-radius: 5px;
                color: white;
                border: 1px solid lightgray;
                z-index: 50;
                background: white;
                opacity:1.0;
                justify-content: space-between;
                -webkit-animation: fade-in-opacity-only-animation .3s both; /* Safari 4+ */
                    -moz-animation:    fade-in-opacity-only-animation .3s both; /* Fx 5+ */
                    -o-animation:      fade-in-opacity-only-animation .3s both; /* Opera 12+ */
                    animation:         fade-in-opacity-only-animation .3s both; /* IE 10+, Fx 29+ */
                animation-delay:.01s;
                
                @media(max-width:1000px){
                    flex-direction: column;
                    align-items: center;
                    align-items: center;
                    left: 73px;
                    width: 58px;
                    height: 155px;
                    padding: 15px 0px;
                }



                    
                
                .dropdown-icon{
                    padding:10px;
                    font-size:2.2rem;

                }

                i{
                    color:black;
                    transition:.2s ease;
                    &:hover{
                        transform:scale(1.1);
                    }
                }

                .fas.fa-envelope{
                    -webkit-animation: fade-in-opacity-only-animation 1s both; /* Safari 4+ */
                    -moz-animation:    fade-in-opacity-only-animation 1s both; /* Fx 5+ */
                    -o-animation:      fade-in-opacity-only-animation 1s both; /* Opera 12+ */
                    animation:         fade-in-opacity-only-animation 1s both; /* IE 10+, Fx 29+ */

                    animation-delay:.1s;
                    color:#D44638;
                }

                .fab.fa-git-square{
                    -webkit-animation: fade-in-opacity-only-animation 1s both; /* Safari 4+ */
                    -moz-animation:    fade-in-opacity-only-animation 1s both; /* Fx 5+ */
                    -o-animation:      fade-in-opacity-only-animation 1s both; /* Opera 12+ */
                    animation:         fade-in-opacity-only-animation 1s both; /* IE 10+, Fx 29+ */
                    animation-delay:.2s;
                    color:#24292e;
                }

                .fab.fa-linkedin{
                    -webkit-animation: fade-in-opacity-only-animation 1s both; /* Safari 4+ */
                    -moz-animation:    fade-in-opacity-only-animation 1s both; /* Fx 5+ */
                    -o-animation:      fade-in-opacity-only-animation 1s both; /* Opera 12+ */
                    animation:         fade-in-opacity-only-animation 1s both; /* IE 10+, Fx 29+ */
                    animation-delay:.3s;
                    color:#0077B5;
                }


            }
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

`