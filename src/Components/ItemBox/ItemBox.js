import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
>>>>>>> 7a1ee5a5782d512838bcc737800a587abe3cede0

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
<<<<<<< HEAD
            <Link to={`products/${this.props.id}`}><div className="overlayText .fadeIn-left">
=======
            <div className="overlayText .fadeIn-left">
>>>>>>> 7a1ee5a5782d512838bcc737800a587abe3cede0
              <h3>This is a title</h3>
              <p style={{ padding: "20px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
<<<<<<< HEAD
            </div></Link>
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
           
=======
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
>>>>>>> 7a1ee5a5782d512838bcc737800a587abe3cede0
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
