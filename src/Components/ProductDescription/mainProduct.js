import React, { Component } from "react";
import { Fragment } from "react";
import { Animated } from "react-animated-css";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import earringSectionBg from "../../Images/compHeaderImg/earringSection.jpg";
import Footer from "../sectionFooter/Footer";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";

class mainProduct extends Component {
  handleClick = id => {
    this.props.addToCart(id);
    console.log(this.props.addToCart)
  };
  
  render() {
    let href = Number.isNaN(
      +window.location.href[window.location.href.length - 2]
    )
      ? +window.location.href[window.location.href.length - 1]
      : +window.location.href[window.location.href.length - 2] +
        "" +
        +window.location.href[window.location.href.length - 1];
    href = +href;
    const PRODUCT = this.props.products[href];
    console.log(href);
    console.log(this.props.products);
    return (
      <Fragment>
        <HeaderNavbar background={earringSectionBg} />
        <div className="mainProductWrapper">
          <div className="ProductImgBlock">
            <Animated
              animationIn="fadeInLeft"
              animationOut="fadeOutLeft"
              isVisible={true}
              animationInDuration = '2000'
            >
              <img src={PRODUCT["image"]} />
            </Animated>
          </div>
          <div className="productDescription">
            <Animated
              animationIn="fadeInRight"
              animationOut="fadeOutRight"
              isVisible={true}
              animationInDuration = '2000'
            >
              <span>{PRODUCT["name"]}</span>
              <p>{PRODUCT["zodiac"]}</p>
              <p>{PRODUCT["description"]}</p>
              <p>
              All our jewellery are made of sterling 925 Silver, 
              handmade and hand-picked one by one. So it will be like having a unique piece on you.
              </p>
              <div className="itemBoxButton">
                <button
                  className="buttonAddToCart"
                  onClick={() => {
                    this.handleClick(this.props.id);
                  }}
                >
                  ADD TO CART
                </button>
                <i className="fa fa-heart"></i>
              </div>
            </Animated>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

let mapStateToProps = state => {
  return {
    products: state.products
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(mainProduct);
