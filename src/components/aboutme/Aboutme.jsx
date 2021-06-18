import React, { Component } from 'react';
import './Aboutme.css';
import Typed from 'react-typed';
import AOS from 'aos';
import Particles from 'react-particles-js';
import mahesh from '../../Images/mahesh1.png';
import { Route, Switch } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
class Aboutme extends Component {
  showresume = () => {
    window.location.href = "https://drive.google.com/open?id=17XL_jRfzymD6p4yqNhWel5PlgryFMxN2"
  }
  render() {
    return (
      <div id="Mahesh" className="row newabout_sec">
        <div className="mid_box">
          <div className="imageholder">
            <img src={mahesh} className="maheshimg" alt="Smiley face" />
          </div>

          <div className="introholder">
            <div className="hello">Hello World;</div>
            <div className="myintro">I'm Mahesh</div>
            <div className="texty ">Software Engineer</div>
          </div>
          <div className="extraholder">
           <div>Creative.&nbsp;&nbsp; Coding. &nbsp;&nbsp; Coffee.</div>
          </div>
          <div className="resumeholder">
            <button type="button" onClick={this.showresume} class="btn btn-secondary">Resume</button>
          </div>
          
          <div className="iconholder">
       <a className="a_icons" href="https://github.com/vr-mahesh"><i style={{
                'font-size': "28px",
                "color": "black"
              }} class="fa fa-github" aria-hidden="true"></i></a>
                <a className="a_icons" href="https://www.facebook.com/mahesh.prasad.56808"><i style={{
                  'font-size': "28px",
                  "color": "black"
                }} class="fa fa-facebook-square" aria-hidden="true"></i></a>
                <a className="a_icons" href="https://www.instagram.com/butterflynhurricane/"><i style={{
                  'font-size': "28px",
                  "color": "black"
                }} class="fa fa-instagram" aria-hidden="true"></i></a>
                <a className="a_icons" href="https://www.linkedin.com/in/vrmahesh/"><i style={{
                  'font-size': "28px",
                  "color": "black"
                }} class="fa fa-linkedin" aria-hidden="true"></i></a>
            
          </div>

        </div>
      </div>



    )
  }
}
export default Aboutme;