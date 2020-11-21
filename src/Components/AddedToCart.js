import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'

class AddToCart extends Component {
    handleClick = id => {
        this.props.addToCart(id);
        this.setState({ isAdded: true });
      };
    render(){
        return (
            <button className="buttonAddToCart"
                 onClick={() => {
                  this.handleClick(this.props.id);
                }}> ADD TO CART
            </button>
        )
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
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);