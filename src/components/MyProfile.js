import React, { Component } from "react";
import { render } from "react-dom";
import firebase, { auth, provider } from "./firebase.js"; // <--- add this line
import { db } from "../firebase/index";
import AuthUserContext from "./AuthUserContext";
import withAuthorization from "./withAuthorization";

import Test from "./Test.scss";
import AllQuestions from "./AllQuestions";

import QuestionCard from "./QuestionCard";

class MyProfile extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: "",
      username: "",
      items: [],
      updItem: "",
      updName: "",
      loading: false,
      updId: null,
      user: null,
      userId: null
    };
  }

  refactorFetch = () => {
    const { userId } = this.state;
    db.getUserQuestions(userId).on("value", snapshot =>
      this.setState(() => ({ items: snapshot.val(), loading: false }))
    );
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      const { authUser } = this.props;
      if (user) {
        this.setState({
          user,
          userId: user.uid,
          username: user.displayName,
          loading: true
        });
        this.refactorFetch();
      }
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newPostKey = firebase
      .database()
      .ref()
      .child("items")
      .push().key;
    const postData = {
      key: newPostKey,
      question: this.state.currentItem,
      user: this.state.username,
      createdBy: this.state.user.email,
      createdById: this.state.userId,
      requests: {
        requestedBy: null,
        requestedByPhoto: null
      }
    };
    const updates = {};
    updates[`items/` + newPostKey] = postData;
    updates[`users/${this.state.userId}/` + newPostKey] = postData;
    firebase
      .database()
      .ref()
      .update(updates);

    this.setState({
      currentItem: ""
    });
  };

  removeItem = (itemId, userId) => {
    db.delAllQuestions(itemId);
    db.delUserQuestions(itemId, userId);
  };

  updItem = (itemId, userId) => {
    const { updItem, updName } = this.state;
    const item = {
      question: updItem,
      user: updName
    };
    db.updAllQuestions(itemId, item);
    db.updUserQuestions(itemId, userId, item);
    this.setState({
      updItem: "",
      updName: "",
      updId: null
    });
  };

  updForm = updId => {
    if (this.state.updId !== null) {
      this.setState({
        updId: null
      });
    } else {
      this.setState({
        updId
      });
    }
  };

  render() {
    const { updItem, updName, currentItem, username, items } = this.state;
    return (
      <div class="app-layout" style={{ height: "100vh" }}>
        <div class="teams box" style={{ fontFamily: "Cereal-bold" }}>
          {" "}
          Study
        </div>
        <div class="channels box" style={{ fontFamily: "Cereal-bold" }}>
          {" "}
          My Questions
          <ul>
            <li> What are closures in Javascript?</li>
          </ul>
        </div>

        <div class="header box" style={{ fontFamily: "Cereal-bold" }}>
          Question Feed
        </div>
        <div class="messages box">
          <div class="input box">
            <div class="input-wrapper">
              {this.state.user ? (
                <section className="add-item">
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      placeholder="Submit Question: What is Javascript and why do we love it?"
                      name="currentItem"
                      onChange={this.handleChange}
                      value={this.state.currentItem}
                      style={{ fontSize: "15px" }}
                    />{" "}
                    <button
                      style={{
                        display: "inlineBlock",
                        position: "relative",
                        padding: "10px",
                        marginLeft: "10px",
                        fontFamily: "Cereal-bold",
                        fontSize: "15px"
                      }}
                      disabled={currentItem && username !== "" ? false : true}
                    >
                      Post
                    </button>
                  </form>
                </section>
              ) : null}
            </div>
          </div>
          <ul class="message-list">
            <li>
              {" "}
              <QuestionCard />
            </li>
            <li>
              <div class="message-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBqkNgqpXwxINSvtSflLYfSSQylL3PAA8fUymskbcPOb9sG3k"
                  class="avatar"
                />
                <div class="message-text">
                  <h3 style={{ textAlign: "left" }}>
                    carl carlson <span>10:30 AM</span>
                  </h3>
                  <p>
                    Nemo temporibus autem officia quae ullam pariatur blanditiis
                    velit eveniet, alias at fuga maxime.{" "}
                  </p>{" "}
                </div>
              </div>
            </li>
            <li>
              {" "}
              <AllQuestions />{" "}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(MyProfile);
