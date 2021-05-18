import React, { Component } from 'react';
// import './projects.css';
// import card11 from '../../Images/bookingPage.PNG';
// import card22 from '../../Images/ez1.PNG';
// import card12 from '../../Images/HomePage.PNG';
// import card13 from '../../Images/ConnectAndChat.PNG';
// import card23 from '../../Images/ez2.PNG';
// import card21 from '../../Images/ez3.PNG';
// import card24 from '../../Images/ez4.PNG';
class ProjectCard extends Component{
  
loadpage(e){
window.location.href= e.target.attributes.data.nodeValue;
}

    render(){
        return(
          <div className="projectCard">
            <div className="row">
              <div className="col-md-5 col-sm-12"><img className="projectImages" src={this.props.data.image} /></div>
              <div className="col-md-7 col-sm-12"> 
              <div className="row projecttitles"> {this.props.data.name}</div>
              <div className="row projecttext">{this.props.data.text}</div>
              <div className="row"><button className="btn btn-secondary projectbutton" data={this.props.data.link} onClick={this.loadpage}>View Project</button></div>
              </div>
            </div>
          </div> 
        )

    }
}
export default ProjectCard;