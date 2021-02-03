import React, { Component } from 'react';
import './Aboutme.css';
import Typed from 'react-typed';
import AOS from 'aos'; 
import Particles from 'react-particles-js';
import mahesh from '../../Images/mahesh1.png';
import { Route, Switch } from 'react-router-dom';
import {Navbar, Nav,NavItem} from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import Skills from '../skills/skills';
import Projects from '../projects/projects';
import Education from '../education/Education';
import Experience from '../experience/experience';
class Aboutme extends Component{
    
  
    render(){
        return(
          <div id="Mahesh" className="row newabout_sec">
          <div className="leafs"><div className="Main_Image"><img src={mahesh} alt="Smiley face" height="200" width="200"/></div>
          <div className="typed_block"><div className="typed">
          <Typed
                 strings={[" Hi, I'm Mahesh!",
           ` I'm Software Engineer`,
           `I like Coding and Coffee`]
                }
                 typeSpeed={60}
              showCursor={false}
              loop
           ></Typed></div></div>
          </div>
    
          
          {/* <div  className="marginWidhtsetter">
           <div className="Main_Image"><img src={mahesh} alt="Smiley face" height="200" width="200"/></div>
           </div>
          
           </div>
   */}
  </div>
  
          
        
        )
    }
}
export default Aboutme;