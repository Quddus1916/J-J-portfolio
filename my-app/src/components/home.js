import React from "react";
import Header from "./header";
import Main from "./main";
import Project from './project';
import Contact from './contact';
import About from './about';

const Home = () =>{
    let component;
    switch(window.location.pathname){
        case "/":
            component = <Main/>
            break
        case "/project":
            component = <Project/>
            break
        case "/about":
            component = <About/>
            break
        case "/contact":
            component = <Contact/>
            break
        default:
            component =<Main/>
            break              
    }
    return(
        <div className="home">
            <Header/>
            {component}

        </div>

    );
}

export default Home