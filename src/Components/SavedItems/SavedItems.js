import React from "react";
import { Component } from "react";
import SAVED_ITEMS_ARRAY from "./SavedItemsArray";
import { Fragment } from 'react';
class SavedItems extends Component {
  render() {
      return (
      <Fragment>
          {
              SAVED_ITEMS_ARRAY.map(val => {
                 return (<div className="mainProductWrapper">
                      <div className="ProductImgBlock">
                          <img src={val["image"]} />
                      </div>
                      <div className="productDescription">
                          <span>{val["name"]}</span>
                          <p>{val["description"]}</p>
                          <div className="itemBoxButton">
                              <button className="buttonAddToCart">ADD TO CART</button>
                              <button className="buttonAddToFavorite">BUY</button>
                              <i className="fa fa-heart"></i>
                          </div>
                      </div>
                  </div>)
              })
          }
          </Fragment>
      );
  }
}

export default SavedItems;
