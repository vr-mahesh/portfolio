import React from 'react';
import './Header.css';
import Typed from 'react-typed';
import AOS from 'aos'; 
import { Route, Switch } from 'react-router-dom';
import {Navbar, Nav,NavItem} from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import mahesh from '../../Images/mahesh1.png';
import Skills from '../skills/skills';
import Aboutme from '../moreaboutme/moreaboutme';
import Projects from '../projects/projects';
import Education from '../education/Education';
import Experience from '../experience/experience';
class Header extends React.Component{
    constructor(props, context) { 
        super(props, context); 
        AOS.init(); 
      } 
      componentWillReceiveProps (){ 
        AOS.refresh(); 
      } 
      componentDidMount(){
      
      }
     
render(){
    return( 
      <div className="row topnav"  id="HeaderDIV" >
 
 
      <Navbar  className="topbar" variant="dark" expand="lg">
       <Navbar.Brand className="Maheshheadline">Mahesh</Navbar.Brand>
       <Navbar.Toggle className="navbuttonresp" aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="itemsholder navvele mr-auto">
           <Nav.Link  to="/moreaboutme"  onClick={() => {window.scrollTo({ top: 600, behavior: 'smooth' }) }}>About Me</Nav.Link>
           <Nav.Link  to="/skills"  onClick={() => {window.scrollTo({ top: 1200, behavior: 'smooth' }) }}>Skills</Nav.Link>
           <Nav.Link  to="/projects" onClick={() => {window.scrollTo({ top: 1900, behavior: 'smooth' }) }}>Projects</Nav.Link>
           <Nav.Link  to="/education"  onClick={() => {window.scrollTo({ top: 4450, behavior: 'smooth' }) }}>Education</Nav.Link>
           <Nav.Link  to="/experience"  onClick={() => {window.scrollTo({ top: 5250, behavior: 'smooth' }) }}>Experience</Nav.Link>
         </Nav>
       </Navbar.Collapse>
     </Navbar>
      </div>  
      
 
    )
}
myFunction=() => {
    var x = document.getElementById("HeaderDIV");
    console.log(x);
  }
}
export default Header;