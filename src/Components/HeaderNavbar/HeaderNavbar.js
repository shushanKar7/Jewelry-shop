import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const HeaderNavbar = props => {
  return (
    <div
      className="headerNavbar"
      style={{
        background: `url(${props.background})`,
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="accountCartBlcok">
        <i className="fa fa-user">
          <Link className = 'routerLink' to="/SignIn">
            <span>Sign in</span>
          </Link>
        </i>
        <i className="fa fa-heart">
          <span>Saved Items</span>
        </i>
        <i className="fa fa-shopping-cart">
          <span>Cart</span>
        </i>
      </div>
      <Link to='/'>
      <div className="logo"></div></Link>

      <div className="navBar">
        <nav>
          <ul>
            <a>
              <Link to ='/'>
              <li className="effect-box">HOME</li></Link>
            </a>
            <a>
              <Link to="/necklaces">
                {" "}
                <li className="effect-box">NECKLACES</li>
              </Link>
            </a>
            <a>
              <Link to="./rings">
                {" "}
                <li className="effect-box">RINGS</li>
              </Link>
            </a>
            <a>
              <Link to="./earrings">
                <li className="effect-box">EARRINGS</li>
              </Link>
            </a>
            <a>
              <Link to="./bracelets">
                <li className="effect-box">BRACELETS</li>
              </Link>
            </a>
          </ul>
        </nav>
      </div>
      <div className="hr"></div>
    </div>
  );
};

export default connect(null, {})(HeaderNavbar);