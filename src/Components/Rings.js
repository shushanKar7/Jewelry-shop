import React, { Fragment } from "react";
import { connect } from "react-redux";
import ringSectionBg from "../Images/compHeaderImg/ringSection.jpg";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";
import ItemBox from "./ItemBox/ItemBox";
import Footer from '../Components/sectionFooter/Footer'
import { BackToTop } from "./backToTop/BackToTop";

const Rings = ({ rings }) => {
  let id = 1;
  return (
    <Fragment>
      <HeaderNavbar background={ringSectionBg} />
      <div className='itemBoxWrapper'>
        {rings.map(ring => <ItemBox key = {id++} {...ring} />)}
      </div>
      <BackToTop/>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    rings: state.products.filter(product => product.category === "Ring")
  };
};


export default connect(mapStateToProps,{})(Rings);


//1) connect enq berum vori mej grum enq functia vorov stanum enq state reduceri meji.
//2)funciaic veradarcnum enq obj mer uzac key ov, u valunel nstuma mer reduceri staty ic inhc vor mi ban.
//3)u ed keyov etel nstuma propsi mej.
//4)ringeri vrov fracel enq loop vory veradarcnuma itemBoxy amen angam tarber anun manunov. 