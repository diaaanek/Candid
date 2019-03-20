import React, { Component } from 'react'

import User from './User.css'

import { SignUpLink } from './SignUp'
import { auth } from '../../firebase'
import * as routes from '../../constants/routes'

import { Link } from 'react-router-dom'

const SignInPage = ({ history }) => (
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />

    <SignUpLink />
  </div>
)

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
}

class SignInForm extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    const { email, password } = this.state

    const { history } = this.props

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }))
        history.push(routes.HOME)
      })
      .catch(error => {
        this.setState(byPropKey('error', error))
      })

    event.preventDefault()
  }

  render() {
    const { email, password, error } = this.state

    const isInvalid = password === '' || email === ''

    return (
      <div className="session-page">
        <div className="session-form-container">
          <h1 style={{fontFamily: "Quicksand", textAlign:"center"}}>Sign in</h1>
        <div className= "logo">
          <Link to="/">
            <img src=" "
            className="icon" />
          </Link>
        </div>

      <form onSubmit={this.onSubmit}
        className="session-form-box">
        <div className="session-form">
          <div className="row">
            <label htmlFor="email-signin">
            </label>

        <input type="text"
          id="email-signin"
          value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
          placeholder="Email Address"
          className="session-input"
        />
      </div>
      <br/>
        <div className="row">
          <label htmlFor="password-signin">
          </label>
        <input
          type="password"
          id="password-signin"
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          className="session-input"
          placeholder="Password"
        />
    </div>

      <br/>
        <button className="signup button" disabled={isInvalid} type="submit">
          Sign In
        </button>
      </div>


        <div className="errors">{error && <p>{error.message}</p>}</div>

        <div className="alt-session-link">
            <p>Don't have an account?</p>&nbsp;&nbsp;
            <div className="link-text">
              <Link to="/signup">Create Account</Link>
            </div>
          </div>

        <div className="link-text center-text">
            <Link to="/">Back to Homepage</Link>
        </div>

      </form>
    </div>
  </div>
    )
  }
}

export default SignInPage

export { SignInForm }
