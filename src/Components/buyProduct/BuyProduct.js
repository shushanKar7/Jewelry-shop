import React, { Fragment } from 'react';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';

const BuyProduct = () => {

    return (
        <Fragment>
            <HeaderNavbar />
            <h1>CHECKOUT</h1>
            <div className='step1' >
                <div className='circle'><span>1</span></div>
                <h2>Shipping Address</h2>
                <h4>Add a new shipping address</h4>
                <hr className='style1'></hr>
                <form>
                    <label>Country</label>
                    <select autoComplete='Country'>
                        <option>Armenia</option>
                        <option>Russia</option>
                        <option>England</option>
                        <option>Germany</option>
                        <option>France</option>
                        <option>Spain</option>
                        <option>Italy</option>
                        <option>Argentina</option>
                    </select>
                    <div>
                        <label>Full Name</label>
                        <input type='text' placeholder='First and last name' required></input>
                    </div>
                    <div>
                        <label>Address Line 1</label>
                        <input type='text' placeholder='Street address, company name, c/o' required></input>
                    </div>
                    <div>
                        <label>Address Line 2</label>
                        <input type='text' placeholder='Apartment, suite, unit, building, floor, etc' required></input>
                    </div>
                    <div>
                        <label>City</label>
                        <input type='text' placeholder='eg. Yerevan' required></input>
                    </div>
                    <div>
                        <label>State</label>
                        <input type='text' placeholder='eg. Yerevan' required></input>
                    </div>
                    <div>
                        <label>Zip</label>
                        <input type='number' placeholder='eg. 89101' required></input>
                    </div>
                    <div>
                        <label>City</label>
                        <input type='text' placeholder='eg. Yerevan' required></input>
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input maxLength='20' type='tel' placeholder='including area code' required></input>
                    </div>
                    <label>
                        <div>
                            <input type="checkbox" id="check" name="check" />
                            <label for="check"></label>
                        </div>
                    </label>
                    <button style = {{width:'200px'}} className = 'buttonAddToCart'>SHIP TO THIS ADDRESS</button>
                </form>
            </div>
            <div>
                <div className = 'circle'><span>2</span></div>
                <h2>Payment Method</h2>
                <div className = 'paymentMethodImg'></div>
            </div>
        </Fragment>
    )
}
export default BuyProduct;
