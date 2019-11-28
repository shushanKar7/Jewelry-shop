import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ringSectionBg from "../Images/compHeaderImg/ringSection.jpg";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";
import ItemBox from "./ItemBox/ItemBox";

const Rings = ({ rings }) => {
  console.log(rings);
  return (
    <Fragment>
      <HeaderNavbar background={ringSectionBg} />
      {rings.map(ring =>  <ItemBox {...ring} />)}
    </Fragment>
  );
};

let vercnenqProductsStatic = merReduceriStateVoreStanumaConnectic => {
  return {
    rings: merReduceriStateVoreStanumaConnectic.products.filter(product => product.category === "Ring")
  };
};
export default connect(vercnenqProductsStatic,)(Rings);


//1) connect enq berum vori mej grum enq functia vorov stanum enq state reduceri meji.
//2)funciaic veradarcnum enq obj mer uzac key ov, u valunel nstuma mer reduceri staty ic inhc vor mi ban.
//3)u ed keyov etel nstuma propsi mej.
//4)ringeri vrov fracel enq loop vory veradarcnuma itemBoxy amen angam tarber anun manunov. 
