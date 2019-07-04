import React, {Component} from "react";
import styled from "styled-components";
import {tieme} from "./images/search.png";
import {talweg} from "./images/talweg_portfolio.png";
import {ImageStylingContainer} from "./ImageStylingContainer";

export class ProductCarousel extends Component{
    constructor(props){
    super(props);

        this.state = {
            currentPage:0,
            imageArray:["search","talweg_portfolio","flocks_portfolio"]
        }

    }

    increment = () =>{
        if(this.state.currentPage === this.state.imageArray.length -1){
            this.setState({currentPage:0})
        }
        else{
            this.setState({currentPage:this.state.currentPage + 1})
        }
        
    }

    decrement = () =>{
        if(this.state.currentPage === 0){
            this.setState({currentPage:this.state.imageArray.length -1})
        }
        else{
            this.setState({currentPage:this.state.currentPage - 1})
        }
        
    }

    render(){
        return(
            <StyledProductCarousel>
                
                <StyledBtnDiv className="btn-div">
                    <button className="increment-btn" onClick={this.increment}>Next</button>
                    <button className="decrement-btn" onClick={this.decrement}>Prev</button>
                </StyledBtnDiv>
        
                {this.state.imageArray.map(
                    (image,index) => 
                    <ImageStylingContainer 
                    key={index} id={index} 
                    image={image}
                    currentPage={this.state.currentPage}
                    />)}

                
                
            </StyledProductCarousel>

        )
    }

}

const StyledProductCarousel = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    
    .btn-div{
        margin-bottom:20px;
    }
  
    


`

const StyledBtnDiv = styled.div`

    display:flex;
    justify-content:flex-end;

    
`