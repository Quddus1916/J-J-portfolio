import React from "react";
import Header from "./header";
import Main from "./main";
import Project from './project';
//import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Contact from './contact';
import About from './about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//import { Routes, Route } from "react-router-dom";
const Home = () =>{
  //   let component;
  //   switch(window.location.pathname){
  //       case "/":
  //           component = <Main/>
  //           break
  //       case "/project":
  //           component = <Project/>
  //           break
  //       case "/about":
  //           component = <About/>
  //           break
  //       case "/contact":
  //           component = <Contact/>
  //           break
  //       default:
  //           component =<Main/>
  //           break              
  //  }

//    const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Main/>,
//     },
//     {
//         path: "/project",
//         element: <Project/>,
//     },
//     {
//         path: "/contact",
//         element: <Contact/>,
//     },
//     {
//         path: "/about",
//         element: <About/>,
//     },


//   ]);
    return(
            <div className="home">
            <Header/>
           
            <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      
      </Routes>
           </BrowserRouter>
            </div>

        

    );
}

export default Home