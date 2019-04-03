import React, { Component } from "react";
import { db } from "../../firebase/index";
import { auth } from "../firebase.js";
// import UserInfo from "./UserInfo";

import "./Profile.scss";

import { Link, BrowserRouter as Router } from "react-router-dom";
import * as routes from "../../constants/routes";

export default class AnotherUser extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      loading: false,
      userId: null
    };
  }
  refactorFetch = () => {
    const { createdById } = this.props.location;
    db.getUserQuestions(createdById).on("value", snapshot =>
      this.setState(() => ({ items: snapshot.val(), loading: false }))
    );
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user, userId: user.uid, loading: true });
        this.refactorFetch();
      }
    });
  }

  render() {
    const { items } = this.state;
    const { createdBy } = this.props.location;

    return (
      <div style={{ marginTop: "7em", marginBottom: "3em" }}>
        <div className="appy">
          <header className="profile-header">
            <div className="profile-image" />

            <div className="profile-info">
              <h1 style={{ fontSize: "25px", lineHeight: "60px" }}>
                {" "}
                {createdBy}
              </h1>

              <h2>New York, NY</h2>
              <h2>Started Candid in April 2019</h2>
            </div>
          </header>
          <ul>
            {this.state.loading ? <div>loading...</div> : null}
            {this.state.user && this.state.items ? (
              Object.keys(items).map(item => {
                return (
                  <li key={items[item].key}>
                    <h3>{items[item].question}</h3>
                    <p>Liked by: {items[item].user}</p>
                  </li>
                );
              })
            ) : (
              <p>nothing to show</p>
            )}
          </ul>
          <section className="friends">
            <h1>Friends</h1>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </section>
          <Link to={routes.STUDY}>
            <button
              className="start"
              style={{ marginTop: "2em", marginLeft: "30em" }}
            >
              Go Back
            </button>
          </Link>{" "}
        </div>
      </div>
    );
  }
}
