import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Recipe from "../Components/Recipe";
import { Link } from "react-router-dom";
import braceletSectionBg from '../Images/compHeaderImg/33.png'

import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "../store/actions/cartActions";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";

class Cart extends Component {
  //to remove the item completely
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };
  render() {
    let addedItems = this.props.products.length ? (
      this.props.products.map((product,idKey) => {
        return (
            <li className="productList" key={idKey++} >
              <div className="productImg">
                <img src={product.image} alt={product.img} className="" />
              </div>
              <div className="itemDesc">
                <span className="title">{product.title}</span>
                <p>{product.desc}</p>
                <div className="productInfo">
                  <p>Price: {product.price}$</p>
                </div>
                <div className="productInfo">
                  <p>Quantity: {product.quantity}</p>
                </div>
                <div className="add-remove">
                  <Link to="/cart">
                    <i
                      className="fa fa-angle-up"
                      onClick={() => {
                        this.handleAddQuantity(product.id);
                      }}
                    ></i>
                  </Link>
                  <Link to="/cart">
                    <i
                      className="fa fa-angle-down"
                      onClick={() => {
                        this.handleSubtractQuantity(product.id);
                      }}
                    ></i>
                  </Link>
                </div>
                <button
                  className="removeButton"
                  onClick={() => {
                    this.handleRemove(product.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
        );
      })
    ) 
    : (
  
      <div className='cartEmptyText'>
      <p className="emptyText">You don't have any items in your cart yet.</p>
      </div>
    );
    return (
      <Fragment>
        <HeaderNavbar background={braceletSectionBg}/>
        <div className="cartWrapper">
          <h1 className='cartText'>YOUR CART</h1>
          <ul className="productCollection">{addedItems}</ul>
          <Recipe/>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.addedItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);