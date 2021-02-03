import React, { Component } from 'react';
import './Education.css';
import bit_img from '../../Images/Bangalore_Institute_of_Technology_logo.png';
import neu_img from '../../Images/northeastern_university_logo.png';
import { Accordion, Card, Button } from "react-bootstrap";
class Education extends Component{
    render(){
        return(
            <div id="Education" className="row" >
                <div class="edutitle font20_edu">Education</div>
                <div className="edu_details container">
                <div class="row Northeastern">
                    <div data-aos="fade-left" className="col-md-5 edu_images"><img src={neu_img} alt="Smiley face" height="100" width="275"/></div>
                    <div className="col-md-6">
                    <div data-aos="fade-right" className="col_name">Northeastern University</div>
                    <div data-aos="fade-bottom" className="prog_name">Master of Science in Information Systems</div>
                    <div  data-aos="fade-bottom" style={{textAlign:"left"}} className="rel_subj"><b>Relevant Courses</b><br/>Application Engineering and Development, Web Design and User experience Engineering </div>
                    </div>
                </div>
                
                <div class="row BIT">
                <div data-aos="fade-left" className="col-md-5 edu_images"><img src={bit_img} alt="Smiley face" height="135" width="100"/></div>
             <div className="col-md-6 ">
                    <div data-aos="fade-right" className="col_name">Bangalore Institute of Technology</div>
                    <div  data-aos="fade-bottom" className="prog_name">Bachelor of Engineering in Electronics and Communication</div>
                    <div data-aos="fade-bottom" className="rel_subj"><b>Relevant Courses</b><br/> Information Theory and Coding, Logic Design, Microcontrollers</div>
                    </div>
                </div>
                </div>
            </div>
        )

    }
}
export default Education;