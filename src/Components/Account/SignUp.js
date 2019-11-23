import React from "react";
import { Fragment } from "react";
import {Link} from 'react-router-dom';

const SignUp = () => {
    return (
        <Fragment>
           <div className="wrapper">
        <div className="box1">
            <div className="content">
                <div className="registerLogo"></div>
            </div>
        </div>
        <div className="box2">
            <div className="content">
                <h2 className="title">Sign Up</h2>
                <form>
                    <div>
                        <input type="text" required name="name" id="name" placeholder="Enter Your Name" />
                    </div>
                    <div>
                        <input type="text" required name="surname" id="surname" placeholder="Enter Your Surname" />
                    </div>
                    <div>
                        <input type="email" required name="email" id="email" placeholder="Enter Your Email" />
                    </div>
                    <div>
                        <input type="password" required name="password" id="password" placeholder="Enter Your Password" />
                    </div>
                    <div>
                        <input type="password" required name="password" id="password" placeholder="Confirm your Password" />
                    </div>
                    <div>
                    <button className="submit">Sign Up</button>
                    </div>
                </form>
                <p>Already have an account? <Link to = '/SignIn'><a class="changer" href="#">Sign in</a></Link> </p>
            </div>
        </div>
    </div>
        </Fragment>
    );
};

export default SignUp