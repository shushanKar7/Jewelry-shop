import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Recipe from "../Components/Recipe";
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "../store/actions/cartActions";

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
  state = {
    showPopup: false
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    let addedItems = this.props.products.length ? (
      this.props.products.map(product => {
        return (
          <li className="productList" key={product.id}>
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
              {this.state.showPopup ? (
                <Fragment>
                  <div className="itemDesc">
                    <span className="title">{product.title}</span>
                    <p>{product.desc}</p>
                    <p>
                      <div>Price: {product.price}$</div>
                    </p>
                    <p>
                      <b>Quantity: {product.quantity}</b>
                    </p>
                  </div>
                  <div className="add-remove">
                    <i
                      className="fa fa-angle-up"
                      onClick={() => {
                        this.handleAddQuantity(product.id);
                      }}
                    ></i>
                    <i
                      className="fa fa-angle-down"
                      onClick={() => {
                        this.handleSubtractQuantity(product.id);
                      }}
                    ></i>
                  </div>
                </Fragment>
              ) : null}
              <div className="add-remove">
                <i
                  className="fa fa-angle-up"
                  onClick={() => {
                    this.handleAddQuantity(product.id);
                  }}
                ></i>
                <i
                  className="fa fa-angle-down"
                  onClick={() => {
                    this.handleSubtractQuantity(product.id);
                  }}
                ></i>
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
    ) : (
      <p className="emptyText">You don't have any items in your cart yet.</p>
    );
    return (
      <Fragment>
        <div className="cart">
          <div className="closeCart" onClick={this.props.closePopup}>
            <i className="fa fa-times" onClick={this.props.closePopup}></i>
          </div>
          <h1>YOUR CART</h1>
          <ul className="collection">{addedItems}</ul>
          <Recipe />
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
