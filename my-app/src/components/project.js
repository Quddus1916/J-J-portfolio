import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import p11 from '../assets/p1.1.jpg'
import p12 from '../assets/p1.2.jpg'
import p13 from '../assets/p1.3.jpg'
import p21 from '../assets/p2.1.jpg'
import p22 from '../assets/p2.2.jpg'
import p23 from '../assets/p2.3.jpg'
import p31 from '../assets/p3.1.jpg'
import p32 from '../assets/p3.2.jpg'
import p33 from '../assets/p3.3.jpg'
import p41 from '../assets/p4.1.jpg'
import p42 from '../assets/p4.2.jpg'
import p43 from '../assets/p4.3.jpg'
import p51 from '../assets/p5.1.jpg'
import p52 from '../assets/p5.2.jpg'
import p53 from '../assets/p5.3.jpg'



const Project = () =>{
  
    const slideImages = [p11,p12,p13]
    const slideImages2 = [p21,p22,p23]
    const slideImages3 = [p31,p32,p33]
    const slideImages4 = [p41,p42,p43]
    const slideImages5 = [p51,p52,p53]
    return(
       <div className="contents">
         <div className="row1">
         <div className="card">
            <div className="cardimage">
                <Slide>
                {slideImages.map((slideImage, index)=> (
                <div key={index}>
                  <img src={slideImage} alt={index}/>
                </div>
                ))} 
                </Slide>
             
            </div>        
            <div className="description">
            <h4>Mirpur Apartment Proposal</h4>
          </div>  
          </div>
          <div className="card">
            <div className="cardimage">
                <Slide>
                {slideImages2.map((slideImage, index)=> (
                <div key={index}>
                  <img src={slideImage} alt={index}/>
                </div>
                ))} 
                </Slide>
             
            </div>        
            <div className="description">
            <h4>Under Construction Noakhali Project</h4>
          </div>  
         </div>
         </div>
         <div className="row2">
         <div className="card">
            <div className="cardimage">
                <Slide>
                {slideImages3.map((slideImage, index)=> (
                <div key={index}>
                  <img src={slideImage} alt={index}/>
                </div>
                ))} 
                </Slide>
             
            </div>        
            <div className="description">
            <h4>Dhaka Club - Tennis lounge</h4>
          </div>  
         </div>
         <div className="card">
            <div className="cardimage">
                <Slide>
                {slideImages4.map((slideImage, index)=> (
                <div key={index}>
                  <img src={slideImage} alt={index}/>
                </div>
                ))} 
                </Slide>
             
            </div>        
            <div className="description">
            <h4>Under Construction 'lotto - elephant road'</h4>
          </div>  
         </div>
         </div>
         <div className="row3">
         <div className="card">
            <div className="cardimage">
                <Slide>
                {slideImages5.map((slideImage, index)=> (
                <div key={index}>
                  <img src={slideImage} alt={index}/>
                </div>
                ))} 
                </Slide>
             
            </div>        
            <div className="description">
            <h4>Under Construction Noakhali Project</h4>
          </div>  
         </div>         
         
         </div>    
        </div>
    );
}

export default Project