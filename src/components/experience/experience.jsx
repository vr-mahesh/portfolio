import React, { Component } from 'react';
import './experience.css';
import $ from 'jquery';
import acc_img from '../../Images/accenture_logo.png';
import wex from '../../Images/wex.png';
import isro_img from '../../Images/Indian_Space_Research_Organisation_Logo.svg.png';
class Experience extends Component{

    componentDidMount(){
       
            var active = true;
        
            $('#collapse-init').click(function () {
                if (active) {
                    active = false;
                    $('.panel-collapse').collapse('show');
                    $('.panel-title').attr('data-toggle', '');
                    $(this).text('Enable accordion behavior');
                } else {
                    active = true;
                    $('.panel-collapse').collapse('hide');
                    $('.panel-title').attr('data-toggle', 'collapse');
                    $(this).text('Disable accordion behavior');
                }
            });
            
            $('#accordion').on('show.bs.collapse', function () {
                if (active) $('#accordion .in').collapse('hide');
            });
        
   
    }

    render(){
        return(
            <div id="Experience" className="row" >
            <div id="id_ExperienceSection" className="container">
                <div className="expp">Experience</div>
                <div className="edu_details">
                <div class="row  exp_items Wex">
                    <div data-aos="fade-left" className="col-md-5"><img src={wex} alt="Smiley face" height="120" width="140"/></div>
                    <div className="col-md-6">
                    <div data-aos="fade-right" className="row col_name">WEX</div>
                    <div data-aos="fade-bottom" className="row prog_name"><b>Role : &nbsp; </b>  Software Development Intern</div>
                    <div  data-aos="fade-bottom" className="row rel_subj"> August 2020 - December 2020 </div>
                    </div>
                    <div class="panel-group" id="accordion">    
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <div class="panel-title" 
                                    data-toggle="collapse" 
                                    data-target="#collapseOne">
                                   Know more <i class="fas fa-angle-down"></i>
                                </div>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse">
                                <div class="panel-body">
                               <div> • Developed Web APIs for a Microservice to perform payments through a third-party service on .NET Core 3.1(C#)</div>
<div>• Worked on Pipeline as Code (PaC) to develop YAML Azure Pipelines for CI/CD in AWS</div>
<div>• Increased the Code Coverage by creating Test Suites using MOQ Framework to reduce the risks of software bugs</div>
<div>• Optimized an AWS Lambda function to communicate with multiple services for purpose of implementing a webhook</div>
                                </div>
                            </div>
                        </div></div>
                </div>

                <div class="row exp_items Accenture">
                    <div data-aos="fade-left" className="col-md-5"><img src={acc_img} alt="Smiley face" height="80" width="235"/></div>
                    <div className="col-md-6">
                    <div data-aos="fade-right" className="row col_name">Accenture</div>
                    <div data-aos="fade-bottom" className="row prog_name"><b>Role : &nbsp; </b>  Application Development Associate </div>
                    <div  data-aos="fade-bottom" className="row rel_subj"> October 2017 - July 2019 </div>
                    </div>
                    <div class="panel-group" id="accordion">    
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <div class="panel-title" 
                                    data-toggle="collapse" 
                                    data-target="#collapseTwo">
                                   Know more <i class="fas fa-angle-down"></i>
                                </div>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse">
                                <div class="panel-body">
                               <div> • Extracted the lists and libraries in the SharePoint servers and performed CRUD operations on captivating web page by using REST APIs and jQuery which eliminated the use of default SharePoint Web User Interfaces</div>
<div>• Optimized the whole process of uploading digital assets to repository by developing a Bulk upload module in JavaScript which extracted file metadata from the Microsoft Excel and automatically upload relevant files</div>
<div>• Developed Referential Integrity Module which makes edited or modified data in one document to move to the other documents which are linked to it</div>
<div>• Automated the process of transferring files, folders and libraries between Microsoft SharePoint Site Collections by developing a Microsoft Form Application (Using C# - CSOM SharePoint 2013)</div>
                                </div>
                            </div>
                        </div></div>
                </div>
                
                <div class="row exp_items isro">
                <div data-aos="fade-left" className="col-md-5"><img src={isro_img} alt="Smiley face" height="100" width="100"/></div>
             <div className="col-md-6 ">
                    <div data-aos="fade-right" className="row col_name">Indian Space Research Organization</div>
                    <div data-aos="fade-bottom" className="row prog_name"><b>Role : &nbsp;</b>  Project Trainee </div>
                    <div  data-aos="fade-bottom" className="row rel_subj"> February 2017 - May 2017 </div> </div>
                    <div class="panel-group" id="accordion">    
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <div class="panel-title" 
                                    data-toggle="collapse" 
                                    data-target="#collapseThree">
                                   Know more <i class="fas fa-angle-down"></i>
                                </div>
                            </div>
                            <div id="collapseThree" class="panel-collapse collapse">
                                <div class="panel-body">
                               <div> • Designed a Digital Telemetry Transmitter to communicate satellite physical parameters</div>
<div>• Aim was to design a telemetry transmitter which could be embedded in a small chip</div>
<div>• Produced and tailored a VHDL code in Libero-SoC to enable data transmission. Simulated system functionality using MATLAB and created MATLAB GUI to vary constraints. Induced the code onto ProASIC FPGA and analyzed system accuracy
</div>
<div>
• This approach had many advantages over its analog counterpart such as better frequency agility and precise control of the output phase across frequency switching transitions</div>
                                </div>
                            </div>
                        </div></div>
               
                </div>
                </div>
            </div>
            </div>
        )

    }
}
export default Experience;

