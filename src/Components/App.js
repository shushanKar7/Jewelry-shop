import React, { Component, Fragment } from "react";
import "../index.css";
import SlideShow from "./SlideShow/SlideShow";
import SignIn from "./Account/SignIn";
import SignUp from "./Account/SignUp";
import { connect } from "react-redux";
// import { BrowserRouter as Router, Route } from "react-router-dom";

const App = props => {
  let { openSignIn, sectionName } = props;
 

  return openSignIn ? <SignIn /> : <SlideShow />;

  // return (
  //   <Fragment>{!sectionName ? <SlideShow /> : toSection(sectionName)}</Fragment>
  // );
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
