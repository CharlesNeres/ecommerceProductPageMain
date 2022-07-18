import React from "react";
import iconMenu from '../../../images/icon-menu.svg';
import logo from '../../../images/logo.svg';
import cart from '../../../images/icon-cart.svg';
import avatar from '../../../images/image-avatar.png';
import NavCss from "./NavCss";

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.openNav = this.openNav.bind(this);
    }

    openNav(e){
        e.preventDefault();
        const divApp = e.target.closest(".App");
        const menuSlid = divApp.lastElementChild;
        menuSlid.style.width = '60%';
    }

    render(){
        return(
            <NavCss>
                
                <div className="iconLeft">
                    <img src={iconMenu} onClick={this.openNav} id="iconMenu" alt="icon menu" />
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