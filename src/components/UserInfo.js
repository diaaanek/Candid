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
    <div>
      <div className="dropdown">
        <img src={authUser.photoURL} className="avatar" alt="user-face" />
        <a style={{ marginTop: "18px" }}>
          {" "}
          👋 Welcome, {authUser.displayName || authUser.email}!
        </a>
        <div className="dropdown-content">
          <SignIn />
        </div>
      </div>
    </div>
  </div>
);

export default UserInfo;
