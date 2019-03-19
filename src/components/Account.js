import React from 'react'


import AuthUserContext from './AuthUserContext'



const AccountPage = () => (

  <AuthUserContext.Consumer>
      {authUser => (
        <div>

          <h1>Account: {authUser.email}</h1>
          <h1>Account: {authUser.email}</h1>
          <h1>Account: {authUser.email}</h1>

        </div>
      )}
    </AuthUserContext.Consumer>
  )
export default AccountPage
