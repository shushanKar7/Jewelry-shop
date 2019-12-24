import React, { Component, Fragment } from "react";
import { connect } from "react-redux";


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
        <div className="cartBottom">
        <div style = {{display:'flex',alignItems:'center'}}>
          <div>
            <input
              onChange={this.handleChecked}
              ref="shipping"
              type="checkbox"
              id="check"
              name="check"
            />
            <label onChange={this.handleChecked} htmlFor="check"></label>
          </div>
          <p className="emptyText">
            Shipping and taxes calculated at checkout(+6$)
          </p>
          </div>
          <div className='total'>Total: {this.props.total}$</div>
          <div className="checkout">
            <button style={{ width: "200px" }} className="buttonAddToCart">
              PROCEED TO CHECKOUT
            </button>
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
