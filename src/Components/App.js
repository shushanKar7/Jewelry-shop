import React, { Component } from "react";
import "../index.css";
import SlideShow from "./SlideShow/SlideShow";
import SignIn from "./Account/SignIn";
import SignUp from "./Account/SignUp";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rings from "./Rings";
import Necklaces from "../Components/Necklaces";
import Bracelets from "./Bracelets";
import Earrings from "./Earrings";
import Cart from "./Cart";
import mainProduct from '../Components/ProductDescription/mainProduct';
import SavedItems from './SavedItems/SavedItems'
import BuyProduct from "./buyProduct/BuyProduct";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
          <Route path="/BuyProducts" component={BuyProduct}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/savedItems" component={SavedItems}></Route>
            <Route path="/products" component={mainProduct}></Route>
            <Route exact path="/" component={SlideShow}></Route>
            <Route path="/SignUp" component={SignUp}></Route>
            <Route path="/SignIn" component={SignIn}></Route>
            <Route path="/rings" component={Rings}></Route>
            <Route path="/necklaces" component={Necklaces}></Route>
            <Route path="/bracelets" component={Bracelets}></Route>
            <Route path="/earrings" component={Earrings}></Route>
            <Route path="/" component={SlideShow}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

let mapStateToProps = state => {
  return {
    openSignIn: state.openSignIn,
    sectionName: state.sectionName
  };
};

export default connect(mapStateToProps)(App);
