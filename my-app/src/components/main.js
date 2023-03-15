import React from "react";
import svg from '../assets/14.svg'

const Main = () =>{
    return(
        <div className="main">
            <div className="col">
                <h2>Your Interior Designer</h2>
                <p>calhsckhskvfsnv,n s,n vnsf v shkbfkhaebkfwejfbjbfaljdfbjebfljbfb,dv,n sndvkrbfjefljnefj</p>
                
                <div className="price">
                <h4>Price:</h4>
                <h5 className="dollar">$$$$</h5>
                </div>
                
                <div className="contact">
                    <button><a href="mailto:2squareofficial@gmail.com">Contact us</a></button>
                </div>
               
                
            </div>
            <div className="svg">
                <img src={svg} alt="svg" width="400px" height="500px" />

            </div>

        </div>

    );
}

export default Main