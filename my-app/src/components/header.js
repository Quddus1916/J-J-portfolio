import React from "react";
import Logo from '../assets/sq.jpg'


const Header = () =>{
    return(
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="logo" width="70px" height="90px"/> 
                <h3>2 SQUARE</h3>           
            </div>
            <div className="navigation">
            <nav>
                <ul>
                    <li><a href="/"><b>Home</b></a></li>
                    <li><a href="/project"><b>Project</b></a></li>
                    <li><a href="/contact"><b>Contact</b></a></li>
                    <li><a href="/about"><b>About</b></a></li>
                </ul>
            </nav>
            </div>
            
        </div>

    );
}

export default Header