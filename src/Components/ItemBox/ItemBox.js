import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";

class ItemBox extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };
  render() {
      return (
        <div className="itemBox">
          <div
            className="itemImage"
            style={{ backgroundImage: `url(${this.props.image})` }}
          >
            <div className="overlayText .fadeIn-left">
              <h3>This is a title</h3>
              <p style={{ padding: "20px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="overlay"></div>
          </div>
          <div className="itemDetail">
            <div className="itemBoxSpan">
              <span>{this.props.name}</span>
              <br />
              <span>{this.props.price}</span>
            </div>
            <div className="itemBoxButton">
            <button
              onClick={() => {
                this.handleClick(this.props.id);
              }}
            >
              ADD TO CART
            </button>
              <button>BUY</button>
              <i className="fa fa-heart"></i>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemBox);
