import React from "react";
import { Component } from "react";

class SavedItems extends Component {
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
      <div className="mainProductWrapper">
        <div className="ProductImgBlock">
          <img src={PRODUCT["image"]} />
        </div>
        <div className="productDescription">
          <span>{PRODUCT["name"]}</span>
          <p>{PRODUCT["description"]}</p>
          <div className="itemBoxButton">
            <button className="buttonAddToCart">ADD TO CART</button>
            <button className="buttonAddToFavorite">BUY</button>
            <i className="fa fa-heart"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default SavedItems;
