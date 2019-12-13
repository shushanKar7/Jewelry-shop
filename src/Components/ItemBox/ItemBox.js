import React from "react";
import { Animated } from "react-animated-css";
import { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import {Link} from 'react-router-dom'

class ItemBox extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };
  render() {
      return (
        <Animated animationIn="fadeInDown" animationOut="fadeOutDown" animationInDuration="3000" isVisible={true}>

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
           
            <Link to={`products/${this.props.id}`}><div className="overlay"></div></Link>
          </div>
          <div className="itemDetail">
            <div className="itemBoxSpan">
              <span>{this.props.name}</span>
              <br />
              <span>{this.props.price}</span>
            </div>
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
        </Animated>
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
