import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./Nav";
import Main from "./Main";

import withAuth from "./withAuth";

// import LandingPage from "./Landing";
// import SignUpPage from "./user/SignUp";

// import HomePage from "./dashboard/Home";
// import CodeChallenges from "./challenges/CodeChallenges";
// import Study from "./study/Study";

import * as routes from "../constants/routes";

// ****** sets routes ****** //
// ******   TO DO:   ****** //
//    ++ Private routes
//    <AuthUserContext.Provider value={authUser}>

const App = () => (
  <div>
    <Nav />
    <Main />
  </div>
);

export default withAuth(App);
