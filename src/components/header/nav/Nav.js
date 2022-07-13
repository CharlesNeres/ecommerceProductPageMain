import React from "react";
import iconMenu from '../../../images/icon-menu.svg';
import logo from '../../../images/logo.svg';
import cart from '../../../images/icon-cart.svg';
import avatar from '../../../images/image-avatar.png';
import NavCss from "./NavCss";

class Nav extends React.Component{
    render(){
        return(
            <NavCss>
                
                <div className="iconLeft">
                    <img src={iconMenu} id="iconMenu" alt="icon menu" />
                    <img src={logo} id="logo" alt="logo" />
                </div>
                <div className="iconRight">
                    <img src={cart} id="cart" alt="cart" />
                    <img src={avatar} id="avatar" alt="avatar" />
                </div>
            </NavCss>
        )
    }
}

export default Nav;