import React from "react";
// import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { signIn, toSection } from "../../store/actions/Action";

const HeaderNavbar = props => {
  let { signIn, toSection } = props;
  let sections = ["HOME", "NECKLACES", "RINGS", "EARRINGS", "BRACELETS"];

  return (
    <div className="headerNavbar">
      <div className="accountCartBlcok">
        <i onClick={signIn} className="fa fa-user">
          <span>My Account</span>
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
            {/* zer grace chem jnjel commentaca nerqevna */}
            {/* stex section  linuma sranq hat-hat 
            ["HOME", "NECKLACES", "RINGS", "EARRINGS", "BRACELETS"] */}
            {/* stacvuma inq@ 5 angam es nuyn banna return anum tarber anunnerov u miangamic 
            es taki funkciayin vorpes "name" talisa "HOME", "NECKLACES", "RINGS"...
            toSection = (name) => ({ type: `OPEN_${name}_SECTION` }) u sarqum 
            type: `OPEN_HOME_SECTION`
            type: `OPEN_NECKLACES_SECTION`
            type: `OPEN_RINGS_SECTION`
            voronqel reduceri mej arden aranzin en grac 
            u amen angem "goToSection" popoxakanin talisa zer sxmac sectioni anun@ vornel reducerum funkcia em grel 
            karaq mtaceq logikan u 'goToSection' taq iran vorpes argument inq@ return ani zer uzac component@
            */}
            {sections.map(section => (
              <a>
                <li
                  key={Math.random()}
                  onClick={() => toSection(section)}
                  className="effect-box"
                >
                  {section}
                </li>
              </a>
            ))}
          </ul>
        </nav>
      </div>
      <div className="hr"></div>
    </div>
  );
};

let mapDispatchToProps = { signIn, toSection };
//himanakanum ete inchvor shat lurj baner chenq anelu actionneri het karanq
//iran vorpes sovorakan object tanq connectin u inq@ mer hamar takic
//ham bindActionCreatora anum ham mnacac bolor baner@ u da nshanakuma vor
// es dajan bar@ kara nayev chlini u line senc
//export default connect(null,  { signIn, toSection })(HeaderNavbar);
//kamel senc obj =  { signIn, toSection }
//export default connect(null,  obj)(HeaderNavbar);
//bayc chenq moranum es actionner@ import anenq verevum

export default connect(null, mapDispatchToProps)(HeaderNavbar);

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
// import /earringSectionBg from '../../Images/compHeaderImg/earringSection.jpg';
// import { connect } from 'react-redux';
// const HeaderNavbar = ({necklacesStyle,braceletStyle,ringBg,earBg}) => {

//     const necstyle = {
//         root:{
//             backgroundImage: necklacesStyle ? `url(${necklacesSectionBg})`  :  (  braceletStyle ?  `url(${braceletSectionBg})` : ( ringSectionBg ? `url(${ringSectionBg})` :  (earringSectionBg ? `url(${earringSectionBg})` : "none"))),
//             backgroundRepeat: 'noRepeat',
//             backgroundSize:'cover',
//             backgroundPosition: "center"
//         }
//     }
//     let className  = 'headerNavbar';
//     return (
//      <div style = {necstyle.root} className = {className}>
//          <div className = "accountCartBlcok">
//              <i className="fa fa-user"><span>My Account</span></i>
//              <i className="fa fa-heart"><span>Saved Items</span></i>
//              <i className="fa fa-shopping-cart"><span>Cart</span></i>
//          </div>
//             <div className = 'logo'> </div>
//         <div className = 'navBar'>
//             <nav>
//                 <ul>
//                     <a><li>HOME</li></a>
//                     <a><li>NECKLACES</li></a>
//                     <a><li>RINGS</li></a>
//                     <a><li>EARRINGS</li></a>
//                     <a><li>BRACELETS</li></a>
//                 </ul>
//             </nav>
//         </div>
//         <div className = 'hr' ></div>
//     </div> );
// }
// export default HeaderNavbar;
