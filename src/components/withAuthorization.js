import React from "react";
import { withRouter } from "react-router-dom";

import AuthUserContext from "./AuthUserContext";
import firebase, { auth, provider } from "./firebase.js"; // <--- add this line
import * as routes from "../constants/routes";

const withAuthorization = authCondition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push(routes.LANDING);
        }
      });
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => (authUser.authUser ? <Component /> : null)}
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization);
};

export default withAuthorization;
