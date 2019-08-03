import React, {Component} from "react";
import styled from "styled-components";

import ImageStylingContainer from "./ImageStylingContainer";
import {ImageCountVisual} from "./ImageCountVisual";

export class ProductCarousel extends Component{
    constructor(props){
    super(props);

        this.state = {
            currentPage:0,

        }

    }

    increment = () =>{
        if(this.state.currentPage === this.props.imageArray.length -1){
            this.setState({currentPage:0})
        }
        else{
            this.setState({currentPage:this.state.currentPage + 1})
        }
        
    }

    decrement = () =>{
        if(this.state.currentPage === 0){
            this.setState({currentPage:this.props.imageArray.length -1})
        }
        else{
            this.setState({currentPage:this.state.currentPage - 1})
        }
        
    }

    countSnapPoints = (e) => {
        console.log("X movement",e.target.x)
        //61 and 38 %
        if((e.target.x > 0 ) && (e.target.x/e.target.clientWidth >.5)){
            this.setState({currentPage:this.state.currentPage -1})
        }
        else if ((e.target.x < 0 ) && (-1*e.target.x/e.target.clientWidth > .5)){
            this.setState({currentPage:this.state.currentPage + 1})
        }
        console.log("X",e.target.x)
        console.log("W",e.target.clientWidth)
       
    }

    goToIndex = (index) => {
        this.setState({currentPage:index})
    }

    render(){
        return(
            <StyledCarouselContainer className="product-carousel">
                <StyledProductCarousel>
                    
                    <StyledBtnDiv className={`btn-div ${this.props.imageArray.length === 1 && "hidden"}`}>
                        <button className="increment-btn" onClick={this.decrement}><i class="fas fa-chevron-left"></i></button>
                        <button className="decrement-btn" onClick={this.increment}><i class="fas fa-chevron-right"></i></button>
                    </StyledBtnDiv>
            
                    {this.props.imageArray.map(
                        (image,index) => 
                        <ImageStylingContainer onScroll={this.countSnapPoints}  top={this.props.top}
                        key={index} id={index} 
                        image={image}
                        currentPage={this.state.currentPage}
                        />)}

                    
                   
                </StyledProductCarousel>
                <ImageCountVisual goToIndex={this.goToIndex} imageArray={this.props.imageArray} currentPage={this.state.currentPage}/>
            </StyledCarouselContainer>
            

        )
    }

}


const StyledCarouselContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    -webkit-backface-visibility: hidden;
    @media(max-width:590px){
        width: 82vw;
        
    }
    transition:.15s ease;

`

const StyledProductCarousel = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    transform: ${props => props.theme.scaling};
    transform-origin: ${props => props.theme.origin};
    position:relative;
    

    @media(max-width:590px){
        overflow-x: scroll;
        flex-direction: row;
        width: 100%;
        scroll-snap-type: mandatory;
        scroll-snap-points-x: repeat(50%);
        scroll-snap-type: x mandatory;
        scroll-snap-align:center;
        -ms-overflow-style: none; // IE 10+
        scrollbar-width: none; // Firefox

        &::-webkit-scrollbar {
            display: none; // Safari and Chrome
        }


        
    }

    
    }

    .hidden{
            display:none;

            @media(max-width:590px){
                display:block;
            }
        }
    
    .btn-div{
        margin-bottom:20px;
        @media(max-width:590px){
            display:none;
        }
    }
  
    .feature{
            text-align:left;
            width:100%;
            font-size:3rem;
            line-height: 4rem;


        }


`

const StyledBtnDiv = styled.div`

    display:flex;

  
   background: #80808017;
    border-radius: 10%;
   
    
    button{
       
        z-index:3;
        background: Transparent;
        
        
        display:flex;
        border:none
        align-items:center;

        

        font-size: 2rem;
        transition:.5s ease;

        justify-content:center;

        i{
            color:#929292;
        }
        
        &:hover{
            cursor:pointer;
            background:lightgray;

        }

        .increment-btn{
            position:absolute;
            right:100%;
            
        }
        .decrement-btn{
            position:absolute;
            left:100%;
           
        }

        
    }
`