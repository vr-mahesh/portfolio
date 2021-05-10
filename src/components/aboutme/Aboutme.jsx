import React, { Component } from 'react';
import './Aboutme.css';
import Typed from 'react-typed';
import AOS from 'aos'; 
import Particles from 'react-particles-js';
import mahesh from '../../Images/mahesh1.png';
import { Route, Switch } from 'react-router-dom';
import {Navbar, Nav,NavItem} from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
class Aboutme extends Component{
    
  
    render(){
        return(
          <div id="Mahesh" className="row newabout_sec">
          <div className="mid_left"></div>
          <div className="mid_box">
    
         <div className="row">
         <div className="Main_Image col-md-6 col-sm-12 col-xs-12"><img src={mahesh} className="maheshimg" alt="Smiley face" /></div>
         <div className="col-md-6 col-sm-12 col-xs-12"> <div className=" helloholder row">
           <div className="hello col-md-12 col-sm-12">"Hello World"</div>
           <div className="moreintroinfo col-md-12 col-sm-12">I'm Mahesh, A Software developer with 2+ years of experience in developing in dynamic and responsive websites, building APIs, CICD pipelines and designing user interfaces. </div>
           
         </div> </div>
         </div>
         <div className="row">
         <div className="textdata col-md-6 col-sm-12 col-xs-12 ">
         <div className="row"><hr class="hrclass"/>
         <div className="myintro col-md-12 col-sm-12">I'm Mahesh</div>
         <div className="texty col-md-12 col-sm-12">Software Engineer</div>
         </div>
          </div>
         <div className="rightside col-md-6 col-xs-12">
         <div className="row">
          <div className="col-md-12 col-sm-12"><div className="typed_block col-md-12 col-sm-12 col-xs-12"><div className="typed">
          <Typed
                 strings={[`I like Coding !!`,
           `I like Coffee !!`]
                }
                 typeSpeed={60}
              showCursor={false}
              loop
           ></Typed></div></div></div>
        </div><div className="row"> <div className="col-md-12 col-sm-12"><button type="button" class="btn btn-secondary">Resume</button></div><div></div>
           <div></div>
         </div></div>
           
        </div>
        
         <div className="row icon_section">
         <div className="icon_holder">         <a className="a_icons" href="https://github.com/MaheshPrasad44"><i style={{'font-size': "20px",
    "color": "black"}} class="fa fa-github" aria-hidden="true"></i></a>
    <a className="a_icons" href="https://www.facebook.com/mahesh.prasad.56808"><i  style={{'font-size': "20px",
    "color": "black"}} class="fa fa-facebook-square" aria-hidden="true"></i></a>
    <a  className="a_icons" href="https://www.instagram.com/being.n0_0ne/"><i  style={{'font-size': "20px",
    "color": "black"}} class="fa fa-instagram" aria-hidden="true"></i></a>
    <a className="a_icons" href="https://www.linkedin.com/in/maheshprasad44/"><i style={{'font-size': "20px",
    "color": "black"}}  class="fa fa-linkedin" aria-hidden="true"></i></a>
         </div>
</div>
          </div> </div>
  
          
        
        )
    }
}
export default Aboutme;