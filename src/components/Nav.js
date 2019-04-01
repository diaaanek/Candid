import React, { Component } from "react";
import firebase, { auth, provider } from "./firebase.js";
import { withRouter, Redirect } from "react-router-dom";
import * as routes from "../constants/routes";
import { Link, BrowserRouter as Router } from "react-router-dom";

import AuthUserContext from "./AuthUserContext";
import UserInfo from "./UserInfo";

import SignUpPage from "./user/SignUp";
import SignIn from "./SignIn";
import SignOut from "./user/SignOut";
import "./Splash.scss";

// logout = () => {
//   auth.signOut().then(() => {
//     this.setState({
//       authUser: null
//     });
//   });
// };

// ****** is user logged in ??? ****** //

const Nav = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser.authUser ? <NavAuth /> : <NavNonAuth />)}
  </AuthUserContext.Consumer>
);

// ****** when user is LOGGED IN ****** //
// ***** user in signed in and authenticated  *****

const NavAuth = () => (
  <nav className="nav-bar">
    <div className="float">
      {" "}
      <Link to={routes.LANDING}>
        <img
          className="logo"
          src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1553635345/logo.png"
        />
      </Link>
      <Link to={routes.HOME} style={{ marginTop: ".85em" }}>
        Learn
      </Link>
      <Link to={routes.MYPROFILE} style={{ marginTop: ".85em" }}>
        Study
      </Link>
    </div>

    <div style={{ marginRight: "1em" }}>
      <UserInfo />
    </div>
  </nav>
);

// ****** when user is NOT LOGGED IN ****** //

const NavNonAuth = () => (
  <div className="nav-bar">
    <div className="float">
      <Link to={routes.LANDING}>
        {" "}
        <img
          className="logo"
          style={{ verticalAlign: "middle" }}
          src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1553635345/logo.png"
        />
      </Link>
    </div>{" "}
    <div>
      <Link to={routes.SIGN_UP}>
        {" "}
        <button className="button signup">Sign Up </button>
      </Link>{" "}
      <Link to={routes.SIGN_UP}>Sign In</Link>
    </div>
  </div>
);

export default Nav;
