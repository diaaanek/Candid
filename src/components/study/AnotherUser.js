import React, { Component } from "react";
import { db } from "../../firebase/index";
import { auth } from "../firebase.js";
// import UserInfo from "./UserInfo";
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
      <div className="app">
        <h1>{createdBy} Profile</h1>
        <section className="display-item">
          <div className="wrapper">
            <ul>
              {this.state.loading ? <div>loading...</div> : null}
              {this.state.user && this.state.items ? (
                Object.keys(items).map(item => {
                  return (
                    <li key={items[item].key}>
                      <h3>{items[item].question}</h3>
                      <p>Answered by: {items[item].user}</p>
                    </li>
                  );
                })
              ) : (
                <p>nothing to show</p>
              )}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
