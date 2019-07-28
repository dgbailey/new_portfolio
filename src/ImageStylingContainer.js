import React from "react";
import styled from "styled-components";


function ImageStylingContainer(props) {
   


        const {image,currentPage,id} = props;
        return(
            
                <StyledTopPageGraphicsContainer   className={currentPage === id ? "":"hidden"}>
            
                    
                    <div className="image-style-container">
                        
                        <img alt={"screenshot of product"} onTouchMove={props.onScroll} className="product-image" src={require(`./images/${image}.png`)}/>
                        
                    </div>
                
            
                </StyledTopPageGraphicsContainer>
           
            
            
        )
    
}

export default ImageStylingContainer




const StyledTopPageGraphicsContainer = styled.div`
    
    width:100%;
    position: relative;
    
    
   @media(max-width:590px){
        scroll-snap-align: start;
        

   }



    

    .image-style-container{
            
            width:943.6px;
            max-width:997px;
            border-radius: 4px;

            @media(max-width:1000px){
                width:70vw;
               
            }

            @media(max-width:590px){
                width:82vw;
                box-shadow: none;
            
            }  
        
        .product-image{
            box-shadow: -12px 11px 27px 0px rgba(0,0,0,0.3);
            object-fit:contain;
            border-radius: 4px;

            @media(max-width:590px){
                box-shadow: none;
            } 
        }


        
       

        

        
    }
`

