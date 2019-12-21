import React from "react";
import { Fragment, createRef } from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import { Animated } from "react-animated-css";
import { getUser } from "../../actions/usersActions";
import { connect } from "react-redux";

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};
const countErrors = errors => {
  let count = 0;
  Object.values(errors).forEach(val => val.length > 0 && (count = count + 1));
  return count;
};
// const isLoggedIn = isLogged;
class SignIn extends Component {
  state = {
    formValid: false,
    errorCount: null,
    user: {
      username: "",
      password: ""
    }
  };
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.user;
    switch (name) {
      case "username":
        errors.username =
          value.length < 5 ? "Username must be 5 characters long!" : value;
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : value;
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ formValid: validateForm(this.state.user) });
    this.setState({ errorCount: countErrors(this.state.user) });
  };
  signIn = () => {
    //const { username, password } = this.state.user;
    console.log(localStorage);
  };
  divRef = createRef();
  render() {
    const { user } = this.state;
    return (
      <Fragment>
        <div className="wrapper">
          <div className="box1">
            <div className="content">
              <Link to="./">
                <div className="registerLogo" ref={this.divRef}></div>
              </Link>
            </div>
          </div>
          <div className="box2">
            <div className="contentSignIn">
              <Animated
                animationIn="fadeInDown"
                animationOut="fadeOutDown"
                animationInDuration={2000}
                isVisible={true}
              >
                <Fragment>
                  <h2 className="title">Sign In</h2>
                  <form onSubmit={this.handleSubmit} noValidate>
                    <div>
                      <input
                        type="text"
                        required
                        name="username"
                        id="username"
                        placeholder="Enter Your Name"
                        onChange={this.handleChange}
                        noValidate
                      />
                      {user.username.length > 0 && (
                        <span className="error">{user.username}</span>
                      )}
                    </div>
                    <div>
                      <input
                        type="password"
                        required
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        onChange={this.handleChange}
                        noValidate
                      />
                      {user.password.length > 0 && (
                        <span className="error">{user.password}</span>
                      )}
                    </div>
                    <div>
                      <button className="submit" onClick={this.signIn}>
                        Sign In
                      </button>
                    </div>
                  </form>
                  <p>
                    Don't have an account?{" "}
                    <Link to="./SignUp">
                      {" "}
                      <span>Sign up</span>
                    </Link>{" "}
                  </p>
                </Fragment>
              </Animated>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

let mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
