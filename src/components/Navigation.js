import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import AuthUserContext from './AuthUserContext'
import SignOutButton from './user/SignOut'
import * as routes from '../constants/routes'

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
)

const NavigationAuth = () => (
  <header className="nav-bar">

    <Link to="/">
    <section className="logo"> <h1> candid  </h1> </section>
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
      <Link to='/'><SignOutButton /></Link>
    </li>
  </ul>
</section>
</header>
)

const NavigationNonAuth = () => (
  <header className="nav-bar">

    <Link to="/">
    <section className="logo"> <h1> candid  </h1> </section>
    </Link>

  <section className="nav-links">
  <ul>
  {/*}  <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    */}
    <li >
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
</section>
</header>
)

export default Navigation
