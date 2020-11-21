import React, { Fragment } from "react";
import { connect } from "react-redux";
import earringSectionBg from "../Images/compHeaderImg/earringSection.jpg";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";
import ItemBox from "./ItemBox/ItemBox";
import Footer from '../Components/sectionFooter/Footer';
import { BackToTop } from "./backToTop/BackToTop";




const Earrings = ({ earrings }) => {
let id = 1;
  return (
    <Fragment>
      <HeaderNavbar background={earringSectionBg} />
      <div className='itemBoxWrapper'>
      {earrings.map(earring => (
        <ItemBox key = {id++} {...earring} />
      ))}
      </div>
      <BackToTop/>
      <Footer/>
    </Fragment>
  );
};

let vercnenqProductsStatic = merReduceriStateVoreStanumaConnectic => {
  return {
    earrings: merReduceriStateVoreStanumaConnectic.products.filter(
      product => product.category === "Earring"
    )
  };
};

export default connect(vercnenqProductsStatic)(Earrings);
