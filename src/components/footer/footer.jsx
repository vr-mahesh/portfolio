import React, { Component } from 'react';
import './footer.css';
import Typed from 'react-typed';
import mahesh from '../../Images/mahesh1.png';
class Footer extends Component{
    
  
    render(){
        return(
     <div id="footer_id" class="row">
     <div className="connectt row">Connect with me</div>
<div className="foot1 col-md-4">
<div><b>Phone : </b><p>(857)-800-4548</p></div><br/>
<div><b>Email ID : </b><p>vatalurenukaprasad.m@husky.neu.edu</p></div><br/>
  <button style={{textDecoration:"none",color:"#929292"}} className="btn btn_white"><a href="mailto:vatalurenukaprasad.m@husky.neu.edu"> Email me</a></button>
</div>
<div className=" foot2 col-md-4">
<a className="a_icons" href="https://github.com/MaheshPrasad44"><i style={{'font-size': "40px",
    "color": "white"}} class="fa fa-github" aria-hidden="true"></i></a>
 <a className="a_icons" href="https://www.facebook.com/mahesh.prasad.56808"><i  style={{'font-size': "40px",
    "color": "white"}} class="fa fa-facebook-square" aria-hidden="true"></i></a>
 <a  className="a_icons" href="https://www.instagram.com/being.n0_0ne/"><i  style={{'font-size': "40px",
    "color": "white"}} class="fa fa-instagram" aria-hidden="true"></i></a>
<a className="a_icons" href="https://www.linkedin.com/in/maheshprasad44/"><i style={{'font-size': "40px",
    "color": "white"}}  class="fa fa-linkedin" aria-hidden="true"></i></a>
 
</div>
<div className=" foot3 col-md-4">
<div><b>Location : </b><br/><p>Boston, MA</p></div>
</div>
     </div>
  
          
        
        )
    }
}
export default Footer;