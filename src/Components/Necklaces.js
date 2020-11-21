import React, { Fragment } from "react";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";
import NeacklaceSectionBg from "../Images/compHeaderImg/necklaceSection.jpg";
import { connect } from "react-redux";
import ItemBox from "./ItemBox/ItemBox";
import Footer from "../Components/sectionFooter/Footer";
import { BackToTop } from "./backToTop/BackToTop";

const Necklaces = ({ necklaces }) => {
  let id = 1;
  return (
    <Fragment>
      <HeaderNavbar background={NeacklaceSectionBg} />
      <div className="itemBoxWrapper">
        {necklaces.map(necklace => (
          <ItemBox key = {id++} {...necklace} />
        ))}
      </div>
      <BackToTop />
      <Footer />
    </Fragment>
  );
};
let mapStateToProps = state => {
  return {
    necklaces: state.products.filter(
      product => product.category === "Necklace"
    )
  };
};

export default connect(mapStateToProps)(Necklaces);
