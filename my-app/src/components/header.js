import React from "react";
import Logo from '../assets/sq.jpg'

const Header = () =>{
    return(
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="logo" width="70px" height="90px"/> 
                <h3>2 SQUARE DESIGN</h3>           
            </div>
            <div className="navigation">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/project">Project</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
            </div>
            
        </div>

    );
}

export default Header