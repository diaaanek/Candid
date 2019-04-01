import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./Landing";
import AuthUserContext from "./AuthUserContext";
import SignUpPage from "./user/SignUp";
import LandingPage from "./Landing";

import HomePage from "./dashboard/Home";
import CodeChallenges from "./challenges/CodeChallenges";

import Study from "./study/Study";
import AnotherUser from "./study/AnotherUser";

import * as routes from "../constants/routes";

const Main = () => (
  <div>
    <Route exact path={routes.SIGN_UP} component={SignUpPage} />
    <Route exact path={routes.LANDING} component={Landing} />
    <Route exact path={routes.STUDY} component={Study} />
    <Route exact path={routes.ANOTHERUSER} component={AnotherUser} />
    <Route exact path={routes.HOME} component={HomePage} />
    <Route exact path={routes.CODE} component={CodeChallenges} />
  </div>
);

export default Main;
