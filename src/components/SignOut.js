import React from 'react'
import Splash from "./Splash.scss"
import { auth } from '../firebase'
import { Route, Redirect } from 'react-router-dom';

const SignOutButton = () => (
  <button type="button" className="button signup" onClick={auth.doSignOut}>
    Sign Out
  </button> 
)

export default SignOutButton
