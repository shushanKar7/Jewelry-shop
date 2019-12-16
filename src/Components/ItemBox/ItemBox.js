import React from "react";
import { Animated } from "react-animated-css";
import { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import { Link } from "react-router-dom";
import SAVED_ITEMS_ARRAY from "../SavedItems/SavedItemsArray";

class ItemBox extends Component {
  state = {
    isAdded: false,
    isFavorit:false
  };
  handleClick = id => {
    this.props.addToCart(id);
    this.setState({ isAdded: true });
  };
  handleFavClick = () =>{
      this.setState({isFavorit:true});
      if(this.state.isFavorit!=true){
        SAVED_ITEMS_ARRAY.push(this.props)
      }
  }
  render() {
    return (
      <Animated
        animationIn="fadeInDown"
        animationOut="fadeOutDown"
        animationInDuration="2000"
        isVisible={true}
      >
        <div className="itemBox">
          <div
            className="itemImage"
            style={{ backgroundImage: `url(${this.props.image})` }}
          >
            <div className="overlayText .fadeIn-left">
              <p style={{ padding: "20px" }}>{this.props.description}</p>
            </div>
            <Link to={`products/${this.props.id}`}>
              <div className="overlay"></div>
            </Link>
          </div>
          <div className="itemDetail">
            <div className="itemBoxSpan">
              <span>{this.props.name}</span>
              <br />
              <span>{this.props.price}$</span>
            </div>
            <div className="itemBoxButton">
              <button
                disabled={this.state.isAdded}
                style={{ background: this.state.isAdded ? "#274354" : "" }}
                className="buttonAddToCart"
                onClick={() => {
                  this.handleClick(this.props.id);
                }}
              >
                {this.state.isAdded ? "ADDED" : "ADD TO CART"}
              </button>
              <button className="buttonAddToFavorite">QUICK SHOP</button>
              <i
                style={{ color: this.state.isFavorit ? "#4f6986ef" : "" }}
                className="fa fa-heart"
                // onClick={() => SAVED_ITEMS_ARRAY.push(this.props)}
                onClick = {()=> this.handleFavClick(this.props.id)}
              ></i>
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
