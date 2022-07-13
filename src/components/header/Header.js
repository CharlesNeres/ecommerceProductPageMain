import React from "react";
import Nav from "./nav/Nav";
import SlidGallery from "./slidGallery/SlidGallery";

class Header extends React.Component{
    render(){
        return(
            <header>
                <Nav />
                <SlidGallery />
            </header>
        )
    }
}

export default Header;