import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './Navigation'
import LandingPage from './Landing'
import SignUpPage from './user/SignUp'
import SignInPage from './user/SignIn'

import HomePage from './dashboard/Home'
import CodeChallenges from './challenges/CodeChallenges'
import Study from './study/Study'

import withAuthentication from './withAuthentication'

import "./Splash.scss";

import * as routes from '../constants/routes'

// ****** sets routes ****** //
// ******   TO DO:   ****** //
//    ++ Private routes
//    <AuthUserContext.Provider value={authUser}>

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.CODE} component={CodeChallenges} />
      <Route exact path={routes.STUDY} component={Study} />
    </div>
  </Router>
)

export default withAuthentication(App)
