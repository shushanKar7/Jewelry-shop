import React from "react";
import { Fragment } from "react";
import { Link } from 'react-router-dom';
import { Component } from "react";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
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
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    user: {
      name: "",
      surname: "",
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
      case "name":
        errors.name = value.length < 5 ? "Name must be 5 characters long!" : "";
        inputValues.name = value;
        break;
      case "surname":
        errors.surname = value.length < 2 ? "Name must be 2 characters long!" : "";
        inputValues.surname = value;
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        inputValues.email = value;
        break;
      case "password":
        errors.password =
          value.length < 8 || value.length > 12 ? "Password must be 8-12 characters long!" : "";
        inputValues.password = value;
        break;
      case "confirmPassword":
        errors.confirmPassword = inputValues.password.value !== inputValues.confirmPassword.value ? "Passwords don't match" : "";
        inputValues.confirmPassword = value;
    }
    console.log(inputValues)
    //  {if(this.state.password.value !== this.state.confirmPassword.value){
    //    this.state.user = "Passwords didn't match"
    //  }else{
    //    this.setState({
    //      account: true
    //    })
    //  }}
    this.setState({ errors, [name]: value });
  };
  generateInput = (input = "") => {
    if (input.length < 5 || input.length >= 20) {
      return "Are you tired";
    }
    let result = [];
    const A = 65;
    for (let i = 0; i < this.state.userInfo.userName.length; i++) {
      result[result.length] = this.state.userInfo.userName[i].charCodeAt() - A;
    }
    return result.join('');
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ formValid: validateForm(this.state.user) });
    this.setState({ errorCount: countErrors(this.state.user) });
    setTimeout(() => {
      if (this.state.formValid === true) {
        fetch("http://192.168.5.69:8001/api/Users/Register", {
          method: 'POST',
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify({
            username: this.generateInput(this.state.user.email),
            email: this.generateInput(this.state.user.email),
            firstName: this.generateInput(this.state.user.name),
            lastName: this.generateInput(this.state.user.surname),
            password: this.generateInput(this.state.user.password),
            confirmPassword: this.generateInput(this.state.user.confirmPassword)
          })
        }).then(response => console.log(JSON.parse(response) + "xi ches ashxatum"))
          .catch(this.showError)
          .catch ( console.log );
      }
    }, 0);
  };
  showError = () => {
    this.setState({ serverError: true });
  }
  render() {
    const { user, formValid } = this.state;
    return (
      <Fragment>
        <div className="wrapper">
          <div className="box1">
            <div className="content">
              <Link to='./'><div className="registerLogo"></div></Link>
            </div>
          </div>
          <div className="box2">
            <div className="content">
              <h2 className="title">Sign Up</h2>
              {
                this.state.serverError ? <h2>SERVER ERROR</h2> : null
              }
              <form onSubmit={this.handleSubmit}>
                <div>
                  <input
                    type="text"
                    required
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    onChange={this.handleChange}
                  />
                  {user.name.length > 0 && (
                    <span className="error">{user.name}</span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    required
                    name="surname"
                    id="surname"
                    value={null}
                    placeholder="Enter Your Surname"
                    onChange={this.handleChange}
                  />
                  {user.surname.length > 0 && (
                    <span className="error">{user.surname}</span>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    required
                    name="email"
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
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm your Password"
                    onChange={this.handleChange}
                    />
                </div>
                <div>
                  <button onClick = {this.handleSubmit} className="submit">Sign Up</button>
                </div>
              </form>
              <p>Already have an account? <Link to='/SignIn'><a className="changer" href="#">Sign in</a></Link> </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default SignUp;