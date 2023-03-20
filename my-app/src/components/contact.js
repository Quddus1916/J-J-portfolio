import React from "react";
import svg from '../assets/15.svg'
import location from '../assets/location.png'
import phn from '../assets/tele1.png'
import email from '../assets/email.png'

const Contact = () =>{
    return(
        <div className="page2">
            <div className="col1">
                <div className="loc">
                <h2> <img src={location} alt="location" width="40px" height="30px"/></h2>
                <p>5/1 Joykali Mondir Road, Wari, Dhaka-1203</p>  
                </div>
                <div className="con">
                <h2> <img src={phn} alt="location" width="30px" height="30px"/></h2>
                <br />
                <p> +8801729094633,+8801675453602</p>  
                </div>
                <div className="email">
                <h2> <img src={email} alt="location" width="30px" height="30px"/></h2>
                <br />
                <p>info@2squarebd.com</p>  
                </div>                       
            </div>
            <div className="svg2">
                <img src={svg} alt="svg" width="400px" height="500px" />
            </div>

        </div>

    );
}

export default Contact