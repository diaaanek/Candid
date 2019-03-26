import React, { Component } from "react";
import firebase, { auth, provider } from "./firebase.js";
import { withRouter, Redirect } from "react-router-dom";
import * as routes from "../constants/routes";
import { Link, BrowserRouter as Router } from "react-router-dom";

import AuthUserContext from "./AuthUserContext";
import UserInfo from "./UserInfo";

import SignUpPage from "./SignUp";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import "./Splash.scss";

// logout = () => {
//   auth.signOut().then(() => {
//     this.setState({
//       authUser: null
//     });
//   });
// };

const Nav = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser.authUser ? <NavAuth /> : <NavNonAuth />)}
  </AuthUserContext.Consumer>
);

// ****** when user is LOGGED IN ****** //
// ***** user in signed in and authenticated  *****

const NavAuth = () => (
  <header className="nav-bar">
    <Link to={routes.LANDING}>
      <section className="logo">
        {" "}
        <img
          className="logo"
          src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1553635345/logo.png"
        />
      </section>
    </Link>

    <section className="nav-links">
      <ul>
        <li>
          <Link to={routes.HOME}>Learn</Link>
        </li>
        <li>
          <Link to={routes.CODE}>Code</Link>
        </li>

        <li>
          <Link to={routes.MYPROFILE}>Study</Link>
        </li>
        <li>
          <div class="noti-container">
            <svg
              class="svgIcon-use"
              width="25"
              height="25"
              viewBox="-293 409 25 25"
            >
              <path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 0 0-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 0 0 1 1h3.49a3.079 3.079 0 0 0 3.01 2.45 3.08 3.08 0 0 0 3.01-2.45h3.49a1 1 0 0 0 1-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 0 1-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 0 1 4.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z" />
            </svg>
          </div>
        </li>

        <div class="dropdown">
          <UserInfo />

          <div class="dropdown-content">
            <SignIn />
            <Redirect to={routes.LANDING} />
          </div>
        </div>
      </ul>
    </section>
  </header>
);

// ****** when user is NOT LOGGED IN ****** //

const NavNonAuth = () => (
  <header className="nav-bar">
    <Link to={routes.LANDING}>
      <section className="logo">
        <img
          className="logo"
          src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1553635345/logo.png"
        />
      </section>
    </Link>

    <section className="nav-links">
      <ul>
        <li>
          {" "}
          <Link to={routes.SIGN_UP}>Sign Up</Link>
        </li>
        <li>
          {" "}
          <Link to={routes.SIGN_IN}>Sign In</Link>
        </li>
      </ul>
    </section>
  </header>
);

export default Nav;
