import React from "react";
import { Fragment } from "react";
import {Link} from 'react-router-dom';
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
      errors: {
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
      let errors = this.state.errors;
  
      switch (name) {
        case "name":
          errors.name = value.length < 5 ? "Name must be 5 characters long!" : "";
          break;
        case "surname":
          errors.surname = value.length < 2 ? "Name must be 2 characters long!" : "";
          break;
        case "email":
          errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
          break; 
        case "password":
          errors.password =
            value.length < 8 || value.length > 12 ? "Password must be 8-12 characters long!" : "";
          break;
        default:
          break;
      }
      {if(this.state.password !== this.state.confirmPassword){
        this.state.errors = "Passwords didn't match"
      }else{
        this.setState({
          account: true
        })
      }} 
      this.setState({ errors, [name]: value });
    };
  
    handleSubmit = event => {
      event.preventDefault();
      this.setState({ formValid: validateForm(this.state.errors) });
      this.setState({ errorCount: countErrors(this.state.errors) });
    };
  
    render() {
      const { errors, formValid } = this.state;
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
                <form onSubmit={this.handleSubmit} noValidate>
                  <div>
                    <input
                      type="text"
                      required
                      name="name"
                      id="name"
                      placeholder="Enter Your Name"
                      onChange={this.handleChange}
                      noValidate
                    />
                    {errors.name.length > 0 && (
                      <span className="error">{errors.name}</span>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      name="surname"
                      id="surname"
                      placeholder="Enter Your Surname"
                      onChange={this.handleChange}
                      noValidate
                    />
                    {errors.surname.length > 0 && (
                      <span className="error">{errors.surname}</span>
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
                      noValidate
                    />
                    {errors.email.length > 0 && (
                      <span className="error">{errors.email}</span>
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
                    {errors.password.length > 0 && (
                      <span className="error">{errors.password}</span>
                    )}
                  </div>
                  <div>
                    <input
                      type="password"
                      required
                      name="password"
                      id="password"
                      placeholder="Confirm your Password"
                    />
                  </div>
                  <div>
                    <button className="submit">Sign Up</button>
                  </div>
                </form>
                        <p>Already have an account? <Link to = '/SignIn'><a className="changer" href="#">Sign in</a></Link> </p>
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
  }
  export default SignUp;