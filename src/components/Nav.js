import React, { Component } from "react";
import firebase, { auth, provider } from "./firebase.js";
import { withRouter, Redirect } from "react-router-dom";
import * as routes from "../constants/routes";
import { Link, BrowserRouter as Router } from "react-router-dom";

import AuthUserContext from "./AuthUserContext";
import UserInfo from "./UserInfo";

import SignUpPage from "./user/SignUp";
import LogIn from "./user/LogIn";
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
          src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1554312765/logonew.png"
        />
      </Link>
      <Link to={routes.HOME} style={{ marginTop: ".85em" }}>
        Learn
      </Link>
      <Link to={routes.QUESTIONS} style={{ marginTop: ".85em" }}>
        Study
      </Link>
      <Link to={routes.STUDY} style={{ marginTop: ".85em" }}>
        Discussion
      </Link>
    </div>

    <div style={{ marginRight: "1em" }}>
      <UserInfo />
    </div>
  </nav>
);

// ****** when user is NOT LOGGED IN ****** //

const NavNonAuth = () => (
  <div class="topbar">
    <div class="container1">
      <div class="header-logo">
        <Link to={routes.LANDING}>
          <span class="candid-logo">
            <img
              src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1554312765/logonew.png"
              style={{ height: "70px" }}
            />
          </span>
          <span class="lockup">beta</span>
        </Link>
      </div>
      <a class="white-app topbar-btn">
        <SignIn />
      </a>
    </div>
  </div>
);

export default Nav;
