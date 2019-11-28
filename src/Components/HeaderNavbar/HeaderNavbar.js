import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bigIntLiteral } from "@babel/types";

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
        <i  className="fa fa-user">
          <Link to="/SignIn">
            <span>My Account</span>
          </Link>
        </i>
        <i className="fa fa-heart">
          <span>Saved Items</span>
        </i>
        <i className="fa fa-shopping-cart">
          <span>Cart</span>
        </i>
      </div>
      <div className="logo"></div>

      <div className="navBar">
        <nav>
          <ul>
            <a>
              <li className="effect-box">HOME</li>
            </a>
            <a>
             <Link to = '/necklaces'> <li className="effect-box">NECKLACES</li></Link>
            </a>
            <a>
              <Link to="./rings">
                {" "}
                <li className="effect-box">RINGS</li>
              </Link>
            </a>
            <a>
              <li className="effect-box">EARRINGS</li>
            </a>
            <a>
              <li className="effect-box">BRACELETS</li>
            </a>
          </ul>
        </nav>
      </div>
      <div className="hr"></div>
    </div>
  );
};


export default connect(null, )(HeaderNavbar);






























//es zer gracna
{
  /* <ul>
            <a>
              <li className="effect-box">HOME</li>
            </a>
            <a>
              <li className="effect-box">NECKLACES</li>
            </a>
            <a>
              <li onClick={() => toSection("RING")} className="effect-box">
                RINGS
              </li>
            </a>
            <a>
              <li className="effect-box">EARRINGS</li>
            </a>
            <a>
              <li className="effect-box">BRACELETS</li>
            </a>
          </ul> */
}

// Add functionality
// import React from 'react';
// // import './HeaderNavbar.css';
// import necklacesSectionBg from '../../Images/compHeaderImg/necklacesSection.jpg';
// import ringSectionBg from '../../Images/compHeaderImg/ringSection.png';
// import braceletSectionBg from '../../Images/compHeaderImg/braceletSection.jpg';
// import earringSectionBg from '../../Images/compHeaderImg/earringSection.jpg';
// import { connect } from 'react-redux';
// const HeaderNavbar = ({necklacesStyle,braceletStyle,ringBg,earBg}) => {

// const necstyle = {
//     root:{
//         backgroundImage: necklacesStyle ?
//         `url(${necklacesSectionBg})`  :
//          (  braceletStyle ?  `url(${braceletSectionBg})` :
//           ( ringSectionBg ? `url(${ringSectionBg})` :
//           (earringSectionBg ? `url(${earringSectionBg})` : "none"))),
//         backgroundRepeat: 'noRepeat',
//         backgroundSize:'cover',
//         backgroundPosition: "center"
//     }
// }

//     let className  = 'headerNavbar';
// return (
//  <div style = {{background: `url(${props.style})`}} className = {className}>
//      <div className = "accountCartBlcok">
//          <i className="fa fa-user"><span>My Account</span></i>
//          <i className="fa fa-heart"><span>Saved Items</span></i>
//          <i className="fa fa-shopping-cart"><span>Cart</span></i>
//      </div>
//         <div className = 'logo'> </div>
//     <div className = 'navBar'>
//         <nav>
//             <ul>
//                 <a><li>HOME</li></a>
//                 <a><li>NECKLACES</li></a>
//                 <a><li>RINGS</li></a>
//                 <a><li>EARRINGS</li></a>
//                 <a><li>BRACELETS</li></a>
//             </ul>
//         </nav>
//     </div>
//     <div className = 'hr' ></div>
// </div> );
// }
// export default HeaderNavbar;
