import React from "react";
import iconClose from "../../images/icon-close.svg";
import MobileMenuCss from "./MobileMenuCss";

class MobileMenu extends React.Component{
    constructor(props){
        super(props);
        this.closeNav = this.closeNav.bind(this);
    }

    closeNav(e){
        e.preventDefault();
        const menuSlid = e.target.closest("div");
        menuSlid.style.width = "0";
    }

    render(){
        return(
            <MobileMenuCss className="mobileMenu">                
                <a href="#" className="closebtn" onClick={this.closeNav}>&times;</a>
                <a href="#">colletions</a>
                <a href="#">men</a>
                <a href="#">women</a>
                <a href="#">about</a>                       
                <a href="#">contact</a>                       
            </MobileMenuCss>
        )
    }
}

export default MobileMenu;