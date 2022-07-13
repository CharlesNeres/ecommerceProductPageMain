import React from "react";
import PricesCss from "./PricesCss";

class Prices extends React.Component{
    render(){
        return(
            <PricesCss>
                <span>$125.00</span>
                <span>50%</span>
                <span>$250.00</span>
            </PricesCss>
        )
    }
}

export default Prices;