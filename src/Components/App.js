import React, { Component } from "react";
import "../index.css";
import SlideShow from "./SlideShow/SlideShow";
import SignIN from './Account/SignIn';
import SignUp from './Account/SignUp';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

        <Route exact path = '/SignIn' component = {SignIN}></Route>
         <Route exact path = '/SignUp' component = {SignUp}></Route>
         <Route exact patch = '/' component = {SlideShow}></Route>
         {/* <SlideShow /> */}
         {/* <Route exact patch = '/' component = {SlideShow}></Route> */}

         
        </div>
      </Router>
    );
  }
}

export default App;
