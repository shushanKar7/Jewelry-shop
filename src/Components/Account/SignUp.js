import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import { Animated } from "react-animated-css";

const validEmailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
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
class SignUp extends Component {
  state = {
    account: false,
    formValid: false,
    errorCount: null,
    serverError: false,
    form: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    user: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  };
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.user;
    let inputValues = this.state.form;
    switch (name) {
      case "firstName":
        errors.firstName =
          value.length < 5 ? "Name must be 5 characters long!" : "";
        inputValues.firstName = value;
        break;
      case "lastName":
        errors.lastName =
          value.length < 2 ? "Name must be 2 characters long!" : "";
        inputValues.lastName = value;
        break;
      case "username":
        errors.username =
          value.length < 5 ? "Surname must be 5 characters long!" : "";
        inputValues.username = value;
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        inputValues.email = value;
        break;
      case "password":
        errors.password =
          value.length < 8 || value.length > 12
            ? "Password must be 8-12 characters long!"
            : "";
        inputValues.password = value;
        break;
      case "confirmPassword":
        errors.confirmPassword =
          inputValues.password.value !== inputValues.confirmPassword.value
            ? "Passwords don't match"
            : "";
        inputValues.confirmPassword = value;
        break;
        default: return null
    }

    this.setState({ errors, [name]: value });
  };
  post = (url, object) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(object)
    });
  };
  generateInput = (input = "") => {
    if (input.indexOf("@") !== -1) {
      let result = "",
        sub = 0,
        prev = 0;
      for (let i = 0; i < input.indexOf("@"); i++) {
        if (input[i].charCodeAt() >= 48 && input[i].charCodeAt() <= 57) {
          result += input[i];
        } else {
          let counter = input[i].charCodeAt() - 97;
          sub = counter - prev;
          if (sub < 0) sub = sub + 26;
          result += String.fromCharCode(sub + 97);
          prev = counter;
        }
      }
      return result + input.slice(input.indexOf("@"));
    } else {
      let result = "",
        sub = 0,
        prev = 0;
      for (let i = 0; i < input.length; i++) {
        let counter = input[i].charCodeAt() - 97;
        sub = counter - prev;
        if (sub < 0) sub = sub + 26;
        result += String.fromCharCode(sub + 97);
        prev = counter;
      }
      return result;
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ formValid: validateForm(this.state.user) });
    this.setState({ errorCount: countErrors(this.state.user) });
    setTimeout(() => {
      if (this.state.formValid === true) {
        const {
          email,
          username,
          firstName,
          lastName,
          password,
          confirmPassword
        } = this.state.form;
        const user = {
          email: this.generateInput(email),
          username: this.generateInput(username),
          firstName: this.generateInput(firstName),
          lastName: this.generateInput(lastName),
          password: this.generateInput(password),
          confirmPassword: this.generateInput(confirmPassword)
        };
        const thenable = this.post(
          "http://192.168.5.69:8001/api/Users/Register",
          user
        );
        thenable
          .then(res => res.json())
          .then(response => {
            console.log(response);
            localStorage.setItem(response.username, `${response.token}`);
            localStorage.setItem(`isLoggedIn`, true);
          })
          .catch(console.log);
      }
    }, 0);
  };
  showError = () => {
    this.setState({ serverError: true });
  };

  render() {
    const { user } = this.state;
    return (
      <Fragment>
        <div className="wrapper">
          <div className="box1">
            <div className="content">
              <Link to="./">
                <div className="registerLogo"></div>
              </Link>
            </div>
          </div>
          <div className="box2">
            <div className="content">
              <Animated
                animationIn="fadeInDown"
                animationOut="fadeOutDown"
                animationInDuration={2000}
                isVisible={true}
              >
                <div>
                  <h2 className="title">Sign Up</h2>
                  {this.state.serverError ? <h2>SERVER ERROR</h2> : null}
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      <input
                        autoComplete="off"
                        type="text"
                        required
                        name="firstName"
                        id="name"
                        placeholder="Enter Your Name"
                        onChange={this.handleChange}
                      />
                      {user.firstName.length > 0 && (
                        <span className="error">{user.firstName}</span>
                      )}
                    </div>
                    <div>
                      <input
                        autoComplete="off"
                        type="text"
                        required
                        name="lastName"
                        id="surname"
                        // value=''
                        placeholder="Enter Your Surname"
                        onChange={this.handleChange}
                      />
                      {user.lastName.length > 0 && (
                        <span className="error">{user.lastName}</span>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        name="username"
                        autoComplete="off"
                        placeholder="Enter Your Username"
                        onChange={this.handleChange}
                      />
                      {user.username.length > 0 && (
                        <span className="error">{user.username}</span>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        name="email"
                        autoComplete="off"
                        id="email"
                        placeholder="Enter Your Email"
                        onChange={this.handleChange}
                      />
                      {user.email.length > 0 && (
                        <span className="error">{user.email}</span>
                      )}
                    </div>
                    <div>
                      <input
                        type="password"
                        required
                        name="password"
                        autoComplete="off"
                        id="password"
                        placeholder="Enter Password"
                        onChange={this.handleChange}
                      />
                      {user.password.length > 0 && (
                        <span className="error">{user.password}</span>
                      )}
                    </div>
                    <div>
                      <input
                        type="password"
                        required
                        autoComplete="off"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm your Password"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div>
                      <button onClick={this.handleSubmit} className="submit">
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </Animated>
              <p>
                Already have an account?{" "}
                <Link to="/SignIn">
                  <span className="changer">Sign in</span>
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default SignUp;
