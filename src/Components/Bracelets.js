import React, { Fragment } from "react";
import { connect } from "react-redux";
import braceletSectionBg from '../Images/compHeaderImg/braceletSection.jpg'
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";
import ItemBox from "./ItemBox/ItemBox";
import Footer from '../Components/sectionFooter/Footer'
import { BackToTop } from "./backToTop/BackToTop";



const Bracelets = ({ bracelets }) => {
  let id = 1;
  return (
    <Fragment>
      <HeaderNavbar background={braceletSectionBg} />
      <div className='itemBoxWrapper'>
      {bracelets.map(bracelet =>  <ItemBox key = {id++} {...bracelet} />)}
      </div>
      <Footer/>
      <BackToTop/>
    </Fragment>
  );
};

let vercnenqProductsStatic = merReduceriStateVoreStanumaConnectic => {
  return {
    bracelets: merReduceriStateVoreStanumaConnectic.products.filter(product => product.category === "Bracelet")
  };
};
export default connect(vercnenqProductsStatic,)(Bracelets);