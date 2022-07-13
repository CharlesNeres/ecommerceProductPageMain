import React from "react";
import DescriptionProduct from "./descriptionProduct/DescriptionProduct";
import Prices from "./prices/Prices";
class Content extends React.Component{
    render(){
        return(
            <main>
                <DescriptionProduct />
                <Prices />
            </main>
        )
    }
}

export default Content;