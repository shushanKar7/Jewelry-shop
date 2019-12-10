import React, { Component } from "react";
import { connect } from "react-redux";
//import { addShipping } from './actions/cartActions'

class Recipe extends Component {
  handleChecked = e => {
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };
  render() {
    return (
      <div className="container">
        <div className="collection">
          <li className="collection-item">
            <label>
<<<<<<< HEAD
              <input
                type="checkbox"
                ref="shipping"
                onChange={this.handleChecked}
              />
              <p className="emptyText">Shipping and taxes calculated at checkout(+6$)</p>
=======
              <div>
                <input onChange={this.handleChecked} ref="shipping" type="checkbox" id="check" name="check" />
                <label onChange={this.handleChecked} for="check"></label>
              </div>
              <p className = 'emptyText'>Shipping and taxes calculated at checkout(+6$)</p>
>>>>>>> 7a1ee5a5782d512838bcc737800a587abe3cede0
            </label>
          </li>
          <li className="collection-item">
            <p className="emptyText">Total: {this.props.total} $</p>
          </li>
        </div>
        <div className="checkout">
          <button className="checkoutButton">Checkout</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    addedItems: state.addedItems,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
