import React from "react";
// import auth from "./firebase.js";
import AuthUserContext from "./AuthUserContext";
import { firebase } from "../firebase";

// ****** set authenticated user ****** //

const withAuthentication = Component =>
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
        error: null,
        authUserId: null
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser, authUserId: authUser.uid }))
          : this.setState(() => ({ authUser: null }));
      });
    }

    render() {
      const { authUser } = this.state;

      return (
        <AuthUserContext.Provider value={this.state}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  };

export default withAuthentication;
