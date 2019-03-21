import React from "react";
import { Link } from "react-router-dom";

import AuthUserContext from "./AuthUserContext";
import SignOutButton from "./user/SignOut";
import * as routes from "../constants/routes";

// ****** is user logged in ??? ****** //
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
        <h1> candid </h1>{" "}
      </section>
    </Link>

    <section className="nav-links">
      <ul>
        <li>
          {/*}<button type="button" className="signup button"> Learn</button> */}
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

        <li>
          <Link to="/">
            <SignOutButton />
          </Link>
        </li>
      </ul>
    </section>
  </header>
);

// ****** when user is NOT LOGGED IN ****** //
const NavigationNonAuth = () => (
  <header className="nav-bar">
    <Link to="/">
      <section className="logo">
        {" "}
        <h1> candid </h1>{" "}
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
