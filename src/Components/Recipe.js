import React, { Component, Fragment } from "react";
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
      <Fragment>
        <div className="collection">
          <li className="collection-item">
            <label>
              {/* <input
                type="checkbox"
                ref="shipping"
                onChange={this.handleChecked}
              /> */}
<div>
  <input onChange={this.handleChecked} ref="shipping" type="checkbox" id="check" name="check"  />
  <label    onChange={this.handleChecked} for="check"></label>
</div>
              <span>Shipping and taxes calculated at checkout(+6$)</span>
            </label>
          </li>
          <li className="collection-item">
            <div>Total: {this.props.total} $</div>
          </li>
          <div className="checkout">
            <button className="checkoutButton">Checkout</button>
          </div>
        </div>

      </Fragment>
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
