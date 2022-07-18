import React from "react";
import PopupCartCss from "./PopupCartCss";
class PopupCart extends React.Component{
    render(){
        return(
            <PopupCartCss>
                <header>
                    <span>Cart</span>
                </header>
                <div className="body">
                    <p>Your cart is empty</p>
                </div>
                <footer></footer>
            </PopupCartCss>
        )
    }
}

export default PopupCart;