import React from "react";
import AuthUserContext from "./AuthUserContext";

const UserInfo = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser.authUser ? <UserData authUser={authUser.authUser} /> : null
    }
  </AuthUserContext.Consumer>
);

const UserData = ({ authUser }) => (
  <React.Fragment>
    <img src={authUser.photoURL} className="avatar" />
    <li> 👋 Welcome, {authUser.displayName || authUser.email}! </li>
  </React.Fragment>
);

export default UserInfo;
