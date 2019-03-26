import React from "react";
import { auth } from "./firebase.js"; // <--- add this line
import AuthUserContext from "./AuthUserContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import * as routes from "../constants/routes";

// ****** set authenticated user ****** //

const withAuth = Component =>
  class WithAuth extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
        error: null,
        authUserId: null
      };
    }

    // ****** component mounted ****** //
    componentDidMount() {
      auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser, authUserId: authUser.uid }))
          : this.setState(() => ({ authUser: null }));
      });
    }

    render() {
      const { authUser } = this.state;

      return (
        <div>
          {authUser ? (
            <AuthUserContext.Provider value={this.state}>
              <Router>
                <div>
                  <Redirect to={routes.HOME} />
                  <Component />
                </div>
              </Router>
            </AuthUserContext.Provider>
          ) : (
            <div>
              <AuthUserContext.Provider value={this.state}>
                <Router>
                  <div>
                    <Component />
                  </div>
                </Router>
              </AuthUserContext.Provider>
            </div>
          )}
        </div>
      );
    }
  };
export default withAuth;
