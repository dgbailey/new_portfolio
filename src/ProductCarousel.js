import React, {Component} from "react";
import styled from "styled-components";

import ImageStylingContainer from "./ImageStylingContainer";

export class ProductCarousel extends Component{
    constructor(props){
    super(props);

        this.state = {
            currentPage:0,
            imageArray:["tieme_light","talweg_light","flocks_light","new_tieme_mark"]
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

    render(){
        return(
            <StyledProductCarousel>
                
                <StyledBtnDiv className="btn-div">
                    <button className="increment-btn" onClick={this.increment}><i class="fas fa-chevron-left"></i></button>
                    <button className="decrement-btn" onClick={this.decrement}><i class="fas fa-chevron-right"></i></button>
                </StyledBtnDiv>
        
                {this.props.imageArray.map(
                    (image,index) => 
                    <ImageStylingContainer top={this.props.top}
                    key={index} id={index} 
                    image={image}
                    currentPage={this.state.currentPage}
                    />)}

                
            
            </StyledProductCarousel>

        )
    }

}

const custom_theme = {
    width: "146vh"
  }

const theme = {
    origin:"transform-origin: 30% 50%",
    zScaling:"transform: translateZ(60px) scale(.8)"
}

const StyledProductCarousel = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    transform: ${props => props.theme.scaling};
    transform-origin: ${props => props.theme.origin};
    position:relative;
    
    .btn-div{
        margin-bottom:20px;
        
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
            background:lightgreen;

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