import React, { Component, Fragment } from "react";
import "../index.css";
import SlideShow from "./SlideShow/SlideShow";
import SignIn from "./Account/SignIn";
import SignUp from "./Account/SignUp";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rings from "./Rings";
import Necklaces from '../Components/Necklaces'

class App extends Component {
   render() {
     return(
      <Router>
      <div className="container">
        <Switch>
          <Route exact path='/' component={SlideShow}></Route>
          <Route  path='/SignUp' component={SignUp}></Route>
          <Route  path='/SignIn' component={SignIn}></Route>
          <Route  path='/rings' component={Rings}></Route>
          <Route  path='/necklaces' component={Necklaces}></Route>
        </Switch>
      </div>
    </Router>
     )
   }
};

let mapStateToProps = state => {
  return {
    openSignIn: state.openSignIn,
    sectionName: state.sectionName
  };
};

export default connect(mapStateToProps)(App);

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="container">

//         <Route exact path = '/SignIn' component = {toSection(sectionName)}></Route>
//          <Route exact path = '/SignUp' component = {SignUp}></Route>
//          <Route exact patch = '/' component = {SlideShow}></Route>
//          {/* <SlideShow /> */}
//          {/* <Route exact patch = '/' component = {SlideShow}></Route> */}

//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
