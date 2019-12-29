import React from "react";
import { Component } from "react";
import SAVED_ITEMS_ARRAY from "./SavedItemsArray";
import { Fragment } from "react";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import earringSectionBg from "../../Images/compHeaderImg/10.jpg";
import Footer from '../../Components/sectionFooter/Footer';
import { addToCart } from "../../store/actions/cartActions";
import { connect } from "react-redux";



class SavedItems extends Component {

  removeSavedItem(id) {
    for (let i = 0; i < SAVED_ITEMS_ARRAY.length; i++) {
      if (SAVED_ITEMS_ARRAY[i].id === id) SAVED_ITEMS_ARRAY.splice(i, 1);
    }
    this.forceUpdate();
  }

  render() {
    return (
      <Fragment>
        <HeaderNavbar background={earringSectionBg} />
        {
          <div className="savedItemsWrapper">
            {
              SAVED_ITEMS_ARRAY.map((val, idKeySaved = 1) => {
                return (
                  <div key={idKeySaved++} className="savedItemsImgBlock">
                    <img src={val["image"]} alt="productImg" />
                    <div className="savedItemsButtonBlock" >
                      <button onClick={() => {
                        this.props.addToCart(val.id)
                        this.removeSavedItem(val.id)
                      }
                      } className="buttonAddToCart"> ADD TO CART                
                      </button>
                      <button
                        className="buttonAddToFavorite"
                        onClick={() => this.removeSavedItem(val.id)}
                      >
                        REMOVE
                    </button>
                    </div>
                  </div>
                );
              })}
          </div>
        }
        <Footer />
      </Fragment>
    );
  }
}

export default connect(null, { addToCart })(SavedItems);


