import React from "react";
import { Component } from "react";
import BUY_PRODUCT_ARRAY from "./buyProductArray";
import { Fragment } from "react";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import earringSectionBg from "../../Images/compHeaderImg/3.jpg";
class BuyProduct extends Component {
  render() {
    return (
      <Fragment>
        <HeaderNavbar background={earringSectionBg} />
        <div className="BuyProductWrapper">
          <div className="formDiv">
            <h1>CHECKOUT</h1>
            <div className="step1">
              <div className="circle">
                <span>1</span>
              </div>
              <h2>Shipping Address</h2>
              <h3>Add a new shipping address</h3>
              <form>
                <div className="countryBlock">
                  <label>Country</label>
                  <select autoComplete="Country">
                    <option>Armenia</option>
                    <option>Russia</option>
                    <option>England</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>Spain</option>
                    <option>Italy</option>
                    <option>Argentina</option>
                  </select>
                </div>
                <div>
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="First and last name"
                    required
                  ></input>
                </div>
                <div>
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="Street address"
                    required
                  ></input>
                </div>
                <div>
                  <label>City</label>
                  <input type="text" placeholder="eg. Yerevan" required></input>
                </div>
                <div>
                  <label>State</label>
                  <input type="text" placeholder="eg. Yerevan" required></input>
                </div>
                <div>
                  <label>Phone Number</label>
                  <input
                    maxLength="20"
                    type="tel"
                    placeholder="including area code"
                    required
                  ></input>
                </div>
                <div style={{ display: '-webkit-inline-box' }}>
                  <div >
                    <label>Zip</label>
                    <input style={{ width: '9.190vw',minWidth:'118px' }} type="number" placeholder="eg. 89101" required></input>
                  </div>
                  <div   >
                    <label>City</label>
                    <input style={{ width: '9.190vw',minWidth:'118px', margin: ' 0 7px' }} type="text" placeholder="eg. Yerevan" required></input>
                  </div>
                </div>

                <label>
                  <div>
                    <input type="checkbox" id="check" name="check" />
                    <label htmlFor="check"></label>
                  </div>
                </label>
                <button style={{ width: "200px" }} className="buttonAddToCart">
                  SHIP TO THIS ADDRESS
                </button>
              </form>
            </div>
            <div>
              <div className="circle">
                <span>2</span>
              </div>
              <h2>Payment Method</h2>
              <div className="paymentMethodImg"></div>
            </div>
          </div>


          <div className='quickImgDiv'>
            {
              <Fragment>
                {BUY_PRODUCT_ARRAY.map(value => {
                  return (
                    <div className="quickImgBlock" key={'imgKey'}>
                      <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid lightgray', paddingBottom: '36px' }} key={'styleKey'}>
                        <img src={value["image"]} alt='buyProductImg' key={'productKey'}/>
                        <div style={{ display: 'flex', margin: '0px 15px' }} ky={'descKEY'}>
                          <p key={'nameKey'}>{value['name']}</p>
                          <p key={'priceKey'}>{value["price"]}$</p>
                        </div>
                      </div>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        padding: '30px 0',
                        borderBottom: '1px solid lightgray'
                      }}>
                        <input style={{
                          width: " 280px",
                          marginRight: " 5px"
                        }} type='text' placeholder="Gift card or discount code"></input>
                        <button className='buttonAddToCart'>APPLY</button>
                      </div>
                      <div className="quckImgTitle">
                        <div className="product Info">
                          <div style = {{paddingBottom:'20px',borderBottom:'1px solid lightgray'}}>
                            <p>Subtotal:{value['price']}$</p>
                            <p>Shipping: Calculated at next step</p>
                          </div>
                          <p>Total:{value['price']}$</p>
                        </div>
                      </div>
                    </div>

                  );
                })}
              </Fragment>
            }

          </div>
        </div>

      </Fragment >
    );
  }
}

export default BuyProduct;
