import React, { Component } from 'react';
import {Card, Button, Carousel} from 'react-bootstrap';
import './projects.css';

import ProjectCard from './projectcard/projectcard';
import trex from '../../Images/bookingPage.PNG';
import ezveteran from '../../Images/ez1.PNG';
import econeo from '../../Images/econeo.JPG';
import localink from '../../Images/localink.JPG';
import cloudy from '../../Images/cloud.png';
import minority from '../../Images/MinorityMarket.JPG';
import movie from '../../Images/MovieDatabaseDesign.JPG';

class Projects extends Component{
   state={
     json:[
       { name:"Trex - Travel Guide and Bookings WebApp", text:"Trex is Travel and Experience platform that helps customers in booking for tourist places, events and restraunts. It is developed in MEAN stack with various features like group chat functionality, Telegram Integration with Bot API, Session management and encryption using JWT & bCrypt and Node Mailer along with QR code for emails.",link:"https://github.com/MaheshPrasad44/TrEx-WebProject",image:trex},
       { name:"EzVeteran", text:"EzVeteran is JAVA-Swing Application that is used to support veterans after their military life, by providing thema with adequate healthcare, housing, jobs and educational opportunities. ",link:"https://github.com/MaheshPrasad44/EZVETERAN-JavaSwingProject",image:ezveteran},
       { name:"Infrastructure and CI/CD - Cloud Computing", text:"It is DevOps Project which involved building of a secure webapp and hosting it on AWS Infrastucture. Process involved creating of AWS AMIs, CI/CD pipelines, building Infrastucture as Code(IaC), Function as Service(FaaS). Project was carried out using Amazon Web services(AWS), CircleCI and Terraform.",link:"https://maheshprasad44.github.io/cloudlinks/",image:cloudy},
       { name:"LocaLink", text:"LocaLink is a high-fidelity prototype of the app which is used to support local businesses during COVID-19. Localink helps customers to connect with their local businesses nearby. App has exclusive feature of using 3rd party delivery services when local businesses lack the resources and infrastucture to provide delivery.",link:"https://www.figma.com/proto/Y7lWWbeCoseJt4Wa2wqVQA/MaheshVataluRenukaprasad_Spring21?node-id=417%3A5&scaling=min-zoom&page-id=417%3A0",image:localink},
       { name:"Eco Neo – Eco welfare platform", text:"Eco Neo is a Eco welfare platform which uses ticketing and auditing system to keep track of the enviromental issues. It also has feature of social feed where individuals and organizations can share their thoughts about the environment, its issues and solutions.",link:"https://github.com/MaheshPrasad44/EcoNeo-WebApplication",image:econeo},
       { name:"Minority Market", text:"Minority Market is a high-fideltiy prototype feature which is designed to support minority businesses in Amazon app. It has various features like Seller Hub, Auction, Product Feed and CrowdFunding.",link:"https://www.figma.com/proto/Y7lWWbeCoseJt4Wa2wqVQA/MaheshVataluRenukaprasad_Spring21?node-id=805%3A3440&scaling=min-zoom&page-id=799%3A1779",image:minority},
       { name:"Movies Corner", text:"Movies Corner is Movie Database Design is a project consisted of designing a database to store data of Movies, theathers, reviews, ratings and customers in a single database. This was carried out in Microsoft-SQLand also included various types of Views, Stored procedures and Triggers.",link:"https://github.com/MaheshPrasad44/MovieCorner--Database-Design-Project",image:movie},
      
       
       
     ]
   }
    render(){
        return(<div className="row" id="Projects">
         <div class="proj_sections" >Projects</div>
          <div className="projectHolder">
          {
            this.state.json.map((e)=>{
             return <ProjectCard  data={e} />;
            })
          }
          </div>
        </div>
          

           
        )

    }
}
export default Projects;

export const Contacts =[
 
];