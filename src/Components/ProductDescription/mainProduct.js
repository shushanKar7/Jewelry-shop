import React, { Component } from "react";
import { Fragment } from "react";
import { Animated } from "react-animated-css";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import earringSectionBg from "../../Images/compHeaderImg/earringSection.jpg";
import Footer from "../sectionFooter/Footer";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import SAVED_ITEMS_ARRAY from "../SavedItems/SavedItemsArray";

class mainProduct extends Component {
  state = {
    isFavorite: null,
    isAdded: false,
  };

  handleClick = () => {
    this.setState({ isAdded: true });
  };

  addItem(PRODUCT) {
    this.setState({ isFavorite: "#4f6986ef" });
    for (let i = 0; i < this.props.products.length; i++) {
      if (this.props.products[i].id === PRODUCT.id) return false;
    }
    SAVED_ITEMS_ARRAY.push(PRODUCT);
  }

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
    return (
      <Fragment>
        <HeaderNavbar background={earringSectionBg} />
        <div className="mainProductWrapper">
          <div className="ProductImgBlock">
            <Animated
              animationIn="fadeInLeft"
              animationOut="fadeOutLeft"
              isVisible={true}
              animationInDuration={2000}
            >
              <img src={PRODUCT["image"]} alt='mainProductImg' />
            </Animated>
          </div>
          <div className="productDescription">
            <Animated
              animationIn="fadeInRight"
              animationOut="fadeOutRight"
              isVisible={true}
              animationInDuration={2000}
            >
              <span>{PRODUCT["name"]}</span>
              <p>{PRODUCT["zodiac"]}</p>
              <p>{PRODUCT["description"]}</p>
              <p>
                All our jewellery are made of sterling 925 Silver, handmade and
                hand-picked one by one. So it will be like having a unique piece
                on you.
              </p>
              <div className="itemBoxButton">
                <button className="buttonAddToCart"
                  disabled={this.state.isAdded}
                  style={{ background: this.state.isAdded ? "#274354" : "" }}
                  onClick={() => {
                    this.handleClick();
                  }}
                >
                  {this.state.isAdded ? "ADDED" : "ADD TO CART"}{" "}
                </button>
                <i
                  className="fa fa-heart"
                  style={{ color: this.state.isFavorite }}
                  onClick={() => this.addItem(PRODUCT)}
                ></i>
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
