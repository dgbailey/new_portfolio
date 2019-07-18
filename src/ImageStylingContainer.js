import React, {Component} from "react";
import styled from "styled-components";


function ImageStylingContainer(props) {
   


        const {image,currentPage,id} = props;
        return(
            
                <StyledTopPageGraphicsContainer onClick={props.onClick} className={currentPage === id ? "":"hidden"}>
            
                    
                    <div className="image-style-container">
                        <div className="image-overlay"></div>
                        <img className="product-image" src={require(`./images/${image}.png`)}/>
                        
                    </div>
                
            
                </StyledTopPageGraphicsContainer>
           
            
            
        )
    
}

export default ImageStylingContainer




const StyledTopPageGraphicsContainer = styled.div`
    
    width:100%;
    position: relative;
    
    top: ${props => props.top}px;

    

    .image-style-container{
        
        
        .product-image{
            box-shadow: -12px 11px 27px 0px rgba(0,0,0,0.3);
            width:943.6px;
            max-width:997px;
            border-radius: 4px;

            @media(max-width:1000px){
                width:70vw;
            }

            @media(max-width:590px){
            width: 100%;

       }

        }


        
       

        .image-overlay{
        position: absolute;
        ${'' /* background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(22, 22, 26, 1) 100%); */}
        height: 100%;
        width: 100%;
        }

        
    }
`

