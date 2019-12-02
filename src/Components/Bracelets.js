import React, { Fragment } from "react";
import { connect } from "react-redux";
import braceletSectionBg from '../Images/compHeaderImg/braceletSection.jpg'
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";
import ItemBox from "./ItemBox/ItemBox";
import Footer from '../Components/sectionFooter/Footer'
import { BackToTop } from "./backToTop/BackToTop";



const Bracelets = ({ bracelets }) => {
  console.log(bracelets);
  return (
    <Fragment>
      <HeaderNavbar background={braceletSectionBg} />
      <div className='itemBoxWrapper'>
      {bracelets.map(bracelet =>  <ItemBox {...bracelet} />)}
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