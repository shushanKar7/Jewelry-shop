import React from "react";
import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Animated } from "react-animated-css";
import Cart from "../Cart";

class HeaderNavbar extends Component {
  state = {
    showPopup: false
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    const styleNav = {
      textShadow: "0 0 12px white",
      borderBottom: "2px solid white"
    };
    return (
      <div
        className="headerNavbar"
        style={{
          background: `url(${this.props.background})`,
          backgroundRepeat: "noRepeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="accountCartBlcok">
          <Animated
            animationIn="fadeInDown"
            animationOut="fadeOutDown"
            animationInDuration="2000"
            isVisible={true}
          >
            <i className="fa fa-user">
              <Link className="routerLink" to="/SignIn">
                <span>Sign in</span>
              </Link>
            </i>
            <Link to="/saveditems">
              <i className="fa fa-heart">
                <span>Saved Items</span>
              </i>
            </Link>

            <i
              className="fa fa-shopping-cart"
            >
          <Link to='/cart'>  <span>Cart</span></Link>  
            </i>
          </Animated>
        </div>
        <Link to="/">
          <Animated
            animationIn="fadeInDown"
            animationOut="fadeOutDown"
            animationInDuration="2000"
            isVisible={true}
          >
            <div className="logo"></div>
          </Animated>
        </Link>
        <Animated
          animationIn="fadeInDown"
          animationOut="fadeOutDown"
          animationInDuration="2000"
          isVisible={true}
        >
          <div className="navBar">
            <nav>
              <ul>
                <NavLink to="/">
                  <li className="effect-box">HOME</li>
                </NavLink>
                <NavLink exact activeStyle={styleNav} to="/necklaces">
                  {" "}
                  <li className="effect-box">NECKLACES</li>
                </NavLink>
                <NavLink exact activeStyle={styleNav} to="/rings">
                  {" "}
                  <li className="effect-box">RINGS</li>
                </NavLink>
                <NavLink exact activeStyle={styleNav} to="/earrings">
                  <li className="effect-box">EARRINGS</li>
                </NavLink>
                <NavLink exact activeStyle={styleNav} to="/bracelets">
                  <li className="effect-box">BRACELETS</li>
                </NavLink>
              </ul>
            </nav>
          </div>
        </Animated>
        <div className="hr"></div>
      </div>
    );
  }
}

export default connect(null, {})(HeaderNavbar);
