import React, { Fragment } from "react";
import { connect } from "react-redux";
import earringSectionBg from "../Images/compHeaderImg/earringSection.jpg";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";
import ItemBox from "./ItemBox/ItemBox";

const Earrings = ({ earrings }) => {
  console.log(earrings);
  return (
    <Fragment>
      <HeaderNavbar background={earringSectionBg} />
      {earrings.map(earring => (
        <ItemBox {...earring} />
      ))}
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
