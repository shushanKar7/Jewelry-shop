import React from "react";
import { Component } from "react";
import SAVED_ITEMS_ARRAY from "./SavedItemsArray";
import { Fragment } from "react";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import earringSectionBg from "../../Images/compHeaderImg/20.jpg";

class SavedItems extends Component {
  render() {
    return (
      <Fragment>
        <HeaderNavbar background={earringSectionBg}/>
        {
            <div className="savedItemsWrapper">
              {SAVED_ITEMS_ARRAY.map(val => {
                return (
                  <div className="savedItemsImgBlock">
                    <img src={val["image"]} />
                    <div className="savedItemsButtonBlock">
                      <button className="buttonAddToCart">ADD TO CART</button>
                      <button className="buttonAddToFavorite">REMOVE</button>
                    </div>
                  </div>
                );
              })}
            </div>
        }
      </Fragment>
    );
  }
}

export default SavedItems;
