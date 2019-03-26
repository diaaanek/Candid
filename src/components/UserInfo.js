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
    👋 Welcome, {authUser.displayName || authUser.email}!
    <img src={authUser.photoURL} className="avatar" />
  </React.Fragment>
);

export default UserInfo;
