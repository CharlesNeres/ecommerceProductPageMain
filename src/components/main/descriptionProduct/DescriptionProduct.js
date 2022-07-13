import React from "react";
import DescriptionProductCss from "./DescriptionProductCss";

class DescriptionProduct extends React.Component{
    render(){
        return(
            <DescriptionProductCss>
                <p>sneaker company</p>        
                <h1>fall limited edition sneakers</h1>
                <p>
                    These low-profile sneakers are your perfect
                    casual wear companion.  Featuring a durable 
                    rubber outer sole, they'll withstand everything
                    the weather can offer.
                </p>
            </DescriptionProductCss>
        )
    }
}

export default DescriptionProduct;