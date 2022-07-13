import React from "react";
import Nav from "./nav/Nav";

class Header extends React.Component{
    render(){
        return(
            <header>
                <Nav />
            </header>
        )
    }
}

export default Header;