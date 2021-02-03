import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/header/Header';
import Aboutme from './components/aboutme/Aboutme';
import Education from './components/education/Education'
import MoreAboutMe from './components/moreaboutme/moreaboutme';
import Experience from './components/experience/experience';
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Footer from './components/footer/footer';
import { Router, Route, Switch } from "react-router-dom";
function App() {
 

  return (
    <div className="appy container-fluid">
    <Route path={"/"} component={Header} />
    <Route path={"/"} component={Aboutme} />
    <Route path={"/"} component={MoreAboutMe} />
    <Route path={"/"} component={Skills} />
    <Route path={"/"} component={Projects} />
    <Route path={"/"} component={Education} />
    <Route path={"/"} component={Experience} />
    <Route path={"/"} component={Footer} />
    </div>
  );
}

export default App;
