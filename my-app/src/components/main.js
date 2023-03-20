import React from "react";
import svg from '../assets/14.svg'

const Main = () =>{
    return(
        <div>
            <div className="main">
            <div className="column">
                <div className="intro">
                <h1>Architectural Designer/Interior Design Studio</h1>
                <p>We aim to spread the best of Architecture + Design to Architects and <br /> all enthusiasts of Architecture around the world. 

We try to feed <br />your imagination by picking up and delivering a daily dose of <br /> the most exciting and outstanding selection of  Design & Architectural ideas.</p>
                
                </div>
                
                

                <div className="contact">
                    <button><a href="mailto:mhasan@2squarebd.com">Contact us</a></button>
                </div>
               
                
            </div>
            <div className="svg">
                <img src={svg} alt="svg" width="400px" height="500px" />

            </div>

        </div>
        <footer className="footer">
                <p><b>5/1 Joykali Mondir Road, Wari, Dhaka-1203</b></p>
                <p>Contact: +8801729094633,+8801675453602</p>
                <p>Email: mhasan@2squarebd.com</p>
            </footer>
            
        </div>
        

    );
}

export default Main