import React, { Component } from "react";
import { Fragment } from "react";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import earringSectionBg from "../../Images/compHeaderImg/earringSection.jpg";
import { connect } from "react-redux";
import { addToCart } from '../../store/actions/cartActions';


class mainProduct extends Component {
   
  render() {
    let href = Number.isNaN ( +window.location.href[window.location.href.length - 2] ) ? +window.location.href[window.location.href.length - 1] : +window.location.href[window.location.href.length - 2]  + "" + +window.location.href[window.location.href.length - 1];
    href = +href;
    const PRODUCT = this.props.products[href];
    console.log(href);
    console.log(this.props.products)
    return (
      <Fragment>
        <HeaderNavbar backround={earringSectionBg} />
        <div>
            <img src={PRODUCT['image']} />
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}
const mapDispatchToProps = dispatch => {
    return {
      addToCart: id => {
        dispatch(addToCart(id));
      }
    };
  };


export default connect(mapStateToProps, mapDispatchToProps)(mainProduct);
