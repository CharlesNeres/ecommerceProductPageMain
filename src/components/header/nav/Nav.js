import React from "react";
import iconMenu from '../../../images/icon-menu.svg';
import logo from '../../../images/logo.svg';
import cart from '../../../images/icon-cart.svg';
import avatar from '../../../images/image-avatar.png';
import NavCss from "./NavCss";
import PopupCart from "../../popupCart/PopupCart";

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.openNav = this.openNav.bind(this);
        this.showHideCart = this.showHideCart.bind(this);
        this.state = {
            visible: false
        }
    }

    openNav(e){
        e.preventDefault();
        const divApp = e.target.closest(".App");
        const menuSlid = divApp.lastElementChild;
        menuSlid.style.width = '60%';
    }

    showHideCart(e){
        e.preventDefault();
        const header = e.target.closest('header');
        const cart = header.children[1];
        if(cart.style.display == 'block'){
            cart.style.display = 'none';
        }else{
            cart.style.display = 'block';
        }
    }

    render(){
        return(
            <>
                <NavCss>                
                    <div className="iconLeft">
                        <img src={iconMenu} onClick={this.openNav} id="iconMenu" alt="icon menu" />
                        <img src={logo} id="logo" alt="logo" />
                    </div>
                    <div className="iconRight">
                        <img src={cart} onClick={this.showHideCart} id="cart" alt="cart" />
                        <img src={avatar} id="avatar" alt="avatar" />
                    </div>
                </NavCss>
                <PopupCart />
            </>
        )
    }
}

export default Nav;