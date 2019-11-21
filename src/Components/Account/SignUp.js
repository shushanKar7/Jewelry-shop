import React from "react";
import { Fragment } from "react";
const SignUp = () => {
    return (
        <Fragment>
            <div className="bg"></div>
            <div className="modal">
                <div className="card1">
                    <div className="title1">Sign up</div>
                    <form>
                        <div className="input-group">
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="input-group">
                            <input type="text" name="surname" placeholder="Surname" />
                        </div>
                        <div className="input-group">
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="input-group">
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                name="confirm password"
                                placeholder="Confirm Password"
                            />
                        </div>
                    </form>
                    <button className="submit1">Register</button>
                    <br />
                    <span className="noAccount"> Already have account? </span>
                    <br />
                    ​
                    <span className="login">Login here</span>
                </div>
            </div>
        </Fragment>
    );
};

export default SignUp