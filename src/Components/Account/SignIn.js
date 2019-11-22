import React from "react";
import { Fragment } from "react";

const SignIn = () => {
    return (
        <Fragment>
            <div className="wrapper">
        <div className="box1">
          <div className="content">
            <div className="registerLogo"></div>
          </div>
        </div>
        <div className="box2">
          <div className="contentSignIn">
            <h2 className="title">Sign In</h2>
            <form>
              <div>
                <input
                  type="text"
                  required
                  name="username"
                  id="username"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>
              <div>
                <button className="submit">Sign In</button>
              </div>
            </form>
            <p>
              Don't have an account?{" "}
              <a>
                Sign up
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
        </Fragment>
    );
};
export default SignIn;