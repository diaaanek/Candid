import React, { Component } from "react";
import { Link } from "react-router-dom";

import firebase, { auth, provider } from "./firebase.js";
import * as routes from "../constants/routes";

import "./User.css";

const SignUpPage = ({ history }) => (
  <div className="signupform">
    <h1 />
    <SignUpForm history={history} />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    event.preventDefault();

    const { email, passwordOne } = this.state;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        this.props.history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <div className="grid-container-session">
        <div className="left-inner-container">
          <main>
            <div className="signup-faces-container">
              <img
                src="https://cdn0.iconfinder.com/data/icons/some-avatars/200/sjobs-512.png"
                className="signup-face"
              />
              <img
                src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1552589873/undraw_hiring.svg"
                className="signup-face"
              />
              <img
                src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1552589874/chatting.svg"
                className="signup-face"
              />
            </div>
            <div className="quote">
              <p>
                Join millions and millions of people getting better at
                programming and technical skills!
              </p>
            </div>
            <br />
          </main>
        </div>

        <div className="right-inner-container">
          <button className="switch-session-btn">
            <Link to="/login" onClick={this.handleLinkClick} />
          </button>

          <div className="session-form-container">
            <h3> Sign up for free! </h3>
            <form onSubmit={this.onSubmit}>
              <div className="login-form">
                <input
                  className="session-inputs-and-bts"
                  value={username}
                  onChange={event =>
                    this.setState(byPropKey("username", event.target.value))
                  }
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  className="session-inputs-and-bts"
                  value={email}
                  onChange={event =>
                    this.setState(byPropKey("email", event.target.value))
                  }
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  className="session-inputs-and-bts"
                  value={passwordOne}
                  onChange={event =>
                    this.setState(byPropKey("passwordOne", event.target.value))
                  }
                  type="password"
                  placeholder="Password"
                />
                <input
                  className="session-inputs-and-bts"
                  value={passwordTwo}
                  onChange={event =>
                    this.setState(byPropKey("passwordTwo", event.target.value))
                  }
                  type="password"
                  placeholder="Confirm Password"
                />
                <button
                  disabled={isInvalid}
                  type="submit"
                  className="submit-btn session-inputs-and-bts"
                >
                  Sign Up
                </button>
              </div>

              {error && <p>{error.message}</p>}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };
