import React, { Component } from 'react';
import {Card, Button, Carousel} from 'react-bootstrap';
import './projects.css';
import card11 from '../../Images/bookingPage.PNG';
import card22 from '../../Images/ez1.PNG';
import card12 from '../../Images/HomePage.PNG';
import card13 from '../../Images/ConnectAndChat.PNG';
import card23 from '../../Images/ez2.PNG';
import card21 from '../../Images/ez3.PNG';
import card24 from '../../Images/ez4.PNG';
class Projects extends Component{

    render(){
        return(<div className="row" id="Projects">
         <div class="proj_sections" >Projects</div>
            <div  className="row" >
           
 <div className="col-md-6 card1">  <Card>
  <Card.Img variant="top" src={card11} />
  <Card.Body>
    <Card.Title className="card_title">TREX Travel Guide and Bookings</Card.Title>
    <Card.Text className="card_text">
      Web Application developed on MEAN Stack which helps tourist to explore i.e ( TRAVEL and EXPERIENCE ) by connecting with fellow travllers around same place and also providing Booking events.  
    </Card.Text>
    <Button data-toggle="modal" className="btn_brown" data-target="#project11" variant="dark">View Project</Button>
  </Card.Body>
</Card></div>
<div class="modal fade" id="project11"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">TREX Travel Application</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={card11}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={card12}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={card13}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
      </div>
      <div class="modal-footer">
        <button type="button" style={{color:"white"}} class="btn btn_brown" data-dismiss="modal">Close</button>
        <button type="button" class="btn_brown btn"><a style={{color:"white"}} href="https://github.com/MaheshPrasad44/TrEx-WebProject">View Repository</a></button>
      </div>
    </div>
  </div>
</div>
                <div className="col-md-6 card2"><Card>
  <Card.Img variant="top" src={card22} />
  <Card.Body>
    <Card.Title className="card_title">EZ Veteran</Card.Title>
    <Card.Text className="card_text">
      EZ Veteran is JAVA application designed to help veterans by connecting them to various organizations. App also feaures Veteran Tracking,Real time Notifications and Reporting.
    </Card.Text>
    <Button data-toggle="modal" data-target="#project2" className="btn_brown" variant="dark">View Project</Button>
  </Card.Body>
</Card></div>
<div class="modal fade" id="project2"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle1">EZ Veteran</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={card21}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={card23}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={card24}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
      </div>
      <div class="modal-footer">
        <button type="button" style={{color:"white"}} class="btn btn_brown" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn_brown"><a style={{color:"white"}} href="https://github.com/MaheshPrasad44/EZVETERAN-JavaSwingProject">View Repository</a></button>
      </div>
    </div>
  </div>
</div>
            </div></div>
          

           
        )

    }
}
export default Projects;