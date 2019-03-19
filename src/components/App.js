import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import "./Splash.scss";
import Navigation from './Navigation'
import LandingPage from './Landing'
import SignUpPage from './SignUp'
import SignInPage from './SignIn'

import HomePage from './dashboard/Home'
import AccountPage from './challenges/Account'
import withAuthentication from './withAuthentication'

import * as routes from '../constants/routes'

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.CODE} component={AccountPage} />
    </div>
  </Router>
)

export default withAuthentication(App)
