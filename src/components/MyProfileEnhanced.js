import React, { Component } from "react";
import AuthUserContext from "./AuthUserContext";

const MyProfileEnhanced = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser.authUserId ? (
        <MyProfileData authUserId={authUser.authUserId} />
      ) : null
    }
  </AuthUserContext.Consumer>
);

const MyProfileData = ({ authUserId }) => <div>new data</div>;

export default MyProfileEnhanced;
