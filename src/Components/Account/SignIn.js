import React from "react";
import { Fragment } from "react";
const SignIn = () => {
    return (
        <Fragment>
            <div className="bg"></div>
            <div className="modal">
                <div className="card">
                    <div className="title">Sign in</div>
                    <form>
                        <div className="input-group">
                            <input type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="input-group">
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                    </form>
                    <button className="submit">Sign in</button>
                    <br />
                    <span className="noAccount">Don't have account?</span>
                    <br />
                    <span className="register">Register here</span>
                </div>
            </div>
        </Fragment>
    );
};

export default SignIn;