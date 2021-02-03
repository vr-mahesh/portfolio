import React, { Component } from 'react';
import './skills.css';
import js from './../../Images/tech/js.jpg'
import aspnet from './../../Images/tech/aspnet.jfif'
import aws from './../../Images/tech/aws.png'
import azuredevops from './../../Images/tech/azuredevops.png'
import circleci from './../../Images/tech/circleci.png'
import css from './../../Images/tech/css.png'
import docker from './../../Images/tech/docker.png'
import git from './../../Images/tech/git.png'
import html from './../../Images/tech/html.png'
import java from './../../Images/tech/java.png'

import jquery from './../../Images/tech/jquery.png'

import mongo from './../../Images/tech/mongo.png'
import mssql from './../../Images/tech/mssql.png'
import mysql from './../../Images/tech/mysql.png'
import netcore from './../../Images/tech/netcore.png'
import node from './../../Images/tech/node.png'
import react from './../../Images/tech/react.png'
import sharepoint from './../../Images/tech/sharepoint.png'
import terraform from './../../Images/tech/terraform.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Skills extends Component{
    render(){
        return(
            <div id="id_Skills" className="row" >
 <div id="Skills" class="container text-center bg-grey page-view">
    <h2 className="h2_skill" data-aos="fade-left">Skills</h2>
    <div className="skillsintro"> What I do?... Here's something I love to do</div>
    <div className="Services_provided row">
        <div className="servicescard col-md-2 col-sm-12">
        <i class="fas fa-globe-americas fa-lg"></i>
            <div>Web Design and Development</div>
        </div>
        <div className="servicescard col-md-2 col-sm-12">
        <i class="fas fa-cloud fa-lg"></i>
            <div>Cloud, CI/CD and Networking</div>
        </div>
        <div className="servicescard col-md-2 col-sm-12">
        <i class="fas fa-cogs fa-lg"></i>
            <div>APIs & Web Services</div>
        </div>
        <div className="servicescard col-md-2 col-sm-12">
        <i class="fas fa-desktop fa-lg"></i>
            <div>Designing User Interface (UI/UX)</div>
        </div>
        <div className="servicescard col-md-2 col-sm-12">
        <i class="fas fa-database fa-lg"></i>
            <div>Database Design and Management</div>
        </div>
    </div>
    <div className="skillsintro">Here's some technology stack that I have worked on...</div>
    <div id="boxyy">
    <div className="techimages">
   <div className="tecahimageitems"><img  className="techimage" src={js} height="100" width="100"/> <div className="techimagename">JavaScript</div> </div>
    <div className="tecahimageitems"> <img className="techimage" src={aspnet} height="100" width="100"/> <div className="techimagename">ASP.NET</div> </div>
    <div className="tecahimageitems"><img className="techimage" src={aws} height="100" width="100"/> <div className="techimagename">AWS</div> </div>
    <div className="tecahimageitems"> <img className="techimage" src={azuredevops} height="100" width="100"/><div className="techimagename">Azure Devops</div>  </div>
    <div className="tecahimageitems"><img  className="techimage" src={circleci} height="100" width="100"/><div className="techimagename">CircleCi</div> </div>
    <div className="tecahimageitems"><img className="techimage" src={css} height="100" width="100"/> <div className="techimagename">CSS</div></div>
    <div className="tecahimageitems"><img className="techimage" src={docker} height="100" width="100"/> <div className="techimagename">Docker</div></div>
    {/* <div className="tecahimageitems"><img className="techimage" src={git} height="100" width="100"/> <div className="techimagename">Git</div></div> */}
    <div className="tecahimageitems"><img className="techimage" src={html} height="100" width="100"/> <div className="techimagename">HTML</div></div>
    <div className="tecahimageitems"><img className="techimage" src={java} height="100" width="100"/> <div className="techimagename">Java</div></div>
    <div className="tecahimageitems"><img  className="techimage" src={jquery} height="100" width="100"/> <div className="techimagename">jQuery</div></div>
    <div className="tecahimageitems"><img className="techimage" src={mongo} height="100" width="100"/> <div className="techimagename">MongoDB</div></div>
    <div className="tecahimageitems"><img className="techimage" src={mssql} height="100" width="100"/> <div className="techimagename">MS SQL</div></div>
    <div className="tecahimageitems"><img className="techimage" src={mysql} height="100" width="100"/><div className="techimagename">MySQL</div> </div>
    <div className="tecahimageitems"><img className="techimage" src={netcore} height="100" width="100"/> <div className="techimagename">.NetCore</div></div>
    <div className="tecahimageitems"><img className="techimage" src={node} height="100" width="100"/> <div className="techimagename">NodeJS</div></div>
    <div className="tecahimageitems"><img className="techimage" src={react} height="100" width="100"/> <div className="techimagename">React</div></div>
    <div className="tecahimageitems"><img className="techimage" src={sharepoint} height="100" width="100"/> <div className="techimagename">SharePoint</div></div>
    <div className="tecahimageitems"><img className="techimage" src={terraform} height="100" width="100"/></div><div className="techimagename">Terraform</div></div></div>
  </div>

 </div>
        )

    }
}
export default Skills;