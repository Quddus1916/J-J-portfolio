import React from "react";
import map from '../assets/Mask group.png'


const About = () =>{
    return(
        <div className="aboutcompany">
            <div className="columnabout">
                <div className="companyinfo">
                    <p className="des">We focus on ways to make spaces more functional and effective with the creative use of lights, space utilization, finishes into our design ideas !</p>
                    <p>All the services are given below,</p>
                    <p>
                    <ul>
                    <li>Interior design</li>
                    <li>Exterior design</li>
                    <li>Architectural design</li>
                    <li>Construction</li>
                    <li>Furniture design</li>
                    </ul>
                    </p>
                </div>           
              <div className="map">
                <img src={map} alt="svg" width="200px" height="300px" />
              </div>
            </div>
        </div>

    );
}

export default About