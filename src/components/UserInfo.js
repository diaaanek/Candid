import React from "react";
import AuthUserContext from "./AuthUserContext";

import SignIn from "./SignIn";

const UserInfo = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser.authUser ? <UserData authUser={authUser.authUser} /> : null
    }
  </AuthUserContext.Consumer>
);

const UserData = ({ authUser }) => (
  <div>
    <div className="dropdown">
      <img src={authUser.photoURL} className="avatar" alt="user-face" />
      <div className="dropdown-content">
        <SignIn />
      </div>

      <span style={{ paddingTop: "45px" }}>
        {" "}
        👋 Welcome, {authUser.displayName || authUser.email}!
      </span>
    </div>
  </div>
);

export default UserInfo;
