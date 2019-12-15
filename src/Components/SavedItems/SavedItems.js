import React from "react";
import { Component } from "react";
import SAVED_ITEMS_ARRAY from "./SavedItemsArray";
import { Fragment } from 'react';
import { Animated } from 'react-animated-css'
import  HeaderNavbar from '../../Components/HeaderNavbar/HeaderNavbar'

class SavedItems extends Component {
  render() {
    return (
      <Fragment>
        {
          <div className="savedItemsWrapper">
          {SAVED_ITEMS_ARRAY.map(val => {
            return (
              <Animated animationIn="fadeInDown" animationOut="fadeOutDown" animationInDuration="2000" isVisible={true}>
                  <div className="savedItemsImgBlock">
                    <img src={val["image"]} />
                    <div className='savedItemsButtonBlock'>
                      <button className="buttonAddToCart">ADD TO CART</button>
                      <button className="buttonAddToFavorite">REMOVE</button>
                    </div>
                  </div>
              </Animated>
            )
          })}
          </div>
        }
      </Fragment>
    );
  }
}

export default SavedItems;
