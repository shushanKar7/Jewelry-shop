import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import { Animated } from "react-animated-css";
import { connect } from "react-redux";
import { logIn } from "../../store/actions/axiosAction";


const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
},
  countErrors = errors => {
    let count = 0;
    Object.values(errors).forEach(val => val.length > 0 && (count = count + 1));
    return count;
  };
class SignIn extends Component {
  state = {
    formValid: false,
    errorCount: null,
    user: {
      Email: "",
      password: ""
    },
    isLogged: false
  };
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.user;
    switch (name) {
      case "Email":
        errors.Email =
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
    let { Email, password } = this.state.errors;
    this.setState({ isLogged: true }, () => console.log(this.state.isLogged));

    if ((localStorage.getItem('username') === Email || localStorage.getItem('email') === Email) && localStorage.getItem('password') === password) {
      this.setState({ isLogged: true }, () => console.log(this.state.isLogged));
      this.props.history.push('/')
      localStorage.setItem("isLoggedIn", true)
    }
     this.props.logIn(this.state.errors)
  };
  
  divRef;
  render() {
    const { user } = this.state;
    return (
      <Fragment>
        <div className="wrapper">
          <div className="box1">
            <div className="content">
              <Link to="./">
                <div className="registerLogo" ref={div => { this.divRef = div; return div; }}></div>
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
                        name="Email"
                        id="Email"
                        placeholder="Enter Your Email"
                        onChange={this.handleChange}
                        noValidate
                      />
                      {user.Email.length > 0 && (
                        <span className="Loginerror">{user.Email}</span>
                      )}
                    </div>
                    <div>
                      <input
                        type="password"
                        required
                        name="password"
                        id="password"
                        placeholder="Enter Your Password"
                        onChange={this.handleChange}
                        noValidate
                      />
                      {user.password.length > 0 && (
                        <span className="Loginerror">{user.password}</span>
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

export default connect(mapStateToProps, { logIn })(SignIn);

