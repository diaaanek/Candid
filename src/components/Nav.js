import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import * as routes from "../constants/routes";

import AuthUserContext from "./AuthUserContext";
import UserInfo from "./UserInfo";

import SignIn from "./SignIn";
import "./Splash.scss";

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
        candid
        {/*  <img
          className="logo"
          src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1553258252/logo.png"
        />
        */}
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
          <Link to={routes.STUDY}>Study</Link>
        </li>

        <Link to={routes.MYPROFILE}>
          <UserInfo />
        </Link>
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
          src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1553258252/logo.png"
        />
      </section>
    </Link>

    <section className="nav-links">
      <ul>
        <li>
          <Link to={routes.HOME}>Sign In</Link>
        </li>
      </ul>
    </section>
  </header>
);

export default Nav;
