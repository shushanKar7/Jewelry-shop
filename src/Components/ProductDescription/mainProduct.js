import React, { Component } from "react";
import { Fragment } from "react";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import earringSectionBg from "../../Images/compHeaderImg/earringSection.jpg";
import { connect } from "react-redux";
import { addToCart } from '../../store/actions/cartActions';


class mainProduct extends Component {
  handleClick = id => {
   console.log(this.props.addToCart(id));
     
  };
  render() {
    let href = Number.isNaN(+window.location.href[window.location.href.length - 2]) ? +window.location.href[window.location.href.length - 1] : +window.location.href[window.location.href.length - 2] + "" + +window.location.href[window.location.href.length - 1];
    href = +href;
    const PRODUCT = this.props.products[href];
    console.log(href);
    console.log(this.props.products)
    return (
      <Fragment>
        <HeaderNavbar background={earringSectionBg}  />
        <div className='mainProductWrapper'>
          <div className = 'ProductImgBlock'>
            <img src={PRODUCT['image']} />
          </div>
          <div className = 'productDescription'>
            <span>{PRODUCT['name']}</span>
            <p>{PRODUCT['description']}</p>
            <div className="itemBoxButton">
            <button className = 'buttonAddToCart'
              onClick={() => {
                this.handleClick(this.props.id);
              }}
            >
              ADD TO CART
            </button>
              <button className = 'buttonAddToFavorite'>BUY</button>
              <i className="fa fa-heart"></i>
            </div>
          </div>
        </div>
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
