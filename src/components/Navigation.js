import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

import "./Splash.scss";
import * as routes from "../constants/routes";

// import AuthUserContext from "./AuthUserContext";
// import SignOutButton from "./user/SignOut";
// NOT USING ANYMORE
// ****** is user logged in ??? ****** //

// basic av
const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

// ****** when user is LOGGED IN ****** //
const NavigationAuth = () => (
  <header className="nav-bar">
    <Link to={routes.HOME}>
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
          <Link to={routes.HOME}>Learn </Link>
        </li>

        <li>
          <Link to={routes.CODE}>Code</Link>
        </li>

        <li>
          <Link to={routes.STUDY}>Study</Link>
        </li>

        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTTHwcDBb-goOaP1yZfq1pob4M3ggbPbS-DdO_00KDiO-NWAj"
            alt="Avatar"
            class="avatar"
          />
        </li>

        <Link to="/">
          <SignOutButton />
        </Link>
      </ul>
    </section>
  </header>
);

// ****** when user is NOT LOGGED IN ****** //
const NavigationNonAuth = () => (
  <header className="nav-bar">
    <Link to="/">
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
          <Link to={routes.SIGN_IN}>Sign In</Link>
        </li>
      </ul>
    </section>
  </header>
);

export default Navigation;
