import React from "react";
import firebase, { auth, provider } from "./firebase.js";
import { withRouter, Redirect } from "react-router-dom";
import * as routes from "../constants/routes";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
      redirect: false
    };
  }

  login = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        const authUser = result.user;
        this.setState({
          authUser,
          redirect: true
        });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  logout = () => {
    auth.signOut().then(() => {
      this.setState({
        authUser: null
      });
    });
  };

  componentDidMount() {
    auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({
            authUser,
            userId: authUser.uid,
            redirect: false
          }))
        : this.setState(() => ({ authUser: null, userId: null }));
    });
  }

  render() {
    const { authUser, redirect } = this.state;
    return (
      <div>
        {authUser ? (
          <div>
            {redirect && <Redirect to={routes.MYPROFILE} />}
            <button className="signup button mainbutton" onClick={this.logout}>
              {" "}
              Sign Out
            </button>
          </div>
        ) : (
          <button className="signup button mainbutton" onClick={this.login}>
            Sign in with{" "}
            <img
              src="http://www.stickpng.com/assets/images/5847f9cbcef1014c0b5e48c8.png"
              style={{ height: "25px", width: "25px", display: "inline-block" }}
            />
          </button>
        )}
      </div>
    );
  }
}

export default SignIn;
