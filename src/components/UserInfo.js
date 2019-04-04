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
      {" "}
      <img
        src="https://image.flaticon.com/icons/svg/25/25623.svg"
        style={{
          height: "12px",
          width: "12px",
          marginTop: "1em"
        }}
      />{" "}
      <span style={{ marginRight: ".5em", color: "white" }}>
        {authUser.displayName || authUser.email}{" "}
      </span>{" "}
      <img src={authUser.photoURL} className="avatar" alt="user-face" />{" "}
      <div className="dropdown-content">
        <SignIn />
      </div>
    </div>
  </div>
);

export default UserInfo;
