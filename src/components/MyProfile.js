import React, { Component } from "react";
import { render } from "react-dom";
import firebase, { auth, provider } from "./firebase.js"; // <--- add this line
import { db } from "../firebase/index";
import AuthUserContext from "./AuthUserContext";
import withAuthorization from "./withAuthorization";
import MyProfileEnhanced from "./MyProfileEnhanced";

import AllQuestions from "./AllQuestions";

import Profile from "./Profile.css";
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
      <div>
        <aside>
          <h1>My profile</h1>

          {this.state.user ? (
            <section className="add-item">
              <form onSubmit={this.handleSubmit}>
                <input
                  id="front"
                  type="text"
                  name="currentItem"
                  placeholder="Question Here"
                  onChange={this.handleChange}
                  value={this.state.currentItem}
                />

                <input type="text" id="back" />

                <button
                  disabled={currentItem && username !== "" ? false : true}
                >
                  Add Question
                </button>
              </form>
            </section>
          ) : null}

          <section>
            <div>
              <ul>
                {this.state.loading ? <div>loading...</div> : null}
                {this.state.user && this.state.items ? (
                  Object.keys(items).map(item => {
                    const requests = items[item].requests;
                    return (
                      <li key={items[item].key}>
                        <h3>{items[item].question}</h3>
                        <p> Answered by: </p>

                        {requests &&
                          Object.keys(requests).map(el => {
                            return (
                              <div>
                                <h5>{requests[el].name}</h5>
                              </div>
                            );
                          })}

                        <p>answered by: {items[item].user}</p>
                        {this.state.userId === items[item].createdById ? (
                          <div>
                            <button
                              onClick={() =>
                                this.removeItem(
                                  items[item].key,
                                  this.state.userId
                                )
                              }
                            >
                              Remove Question
                            </button>
                            <button
                              onClick={() => this.updForm(items[item].key)}
                            >
                              update Question
                            </button>
                          </div>
                        ) : null}

                        {this.state.updId === items[item].key ? (
                          <div>
                            <form
                              onSubmit={() =>
                                this.updItem(items[item].key, this.state.userId)
                              }
                            >
                              <input
                                type="text"
                                name="updName"
                                placeholder="What's your name?"
                                onChange={this.handleChange}
                                value={this.state.updName}
                              />
                              <input
                                type="text"
                                name="updItem"
                                placeholder="What is your interview question?"
                                onChange={this.handleChange}
                                value={this.state.updItem}
                              />
                              <button
                                disabled={
                                  updItem && updName !== "" ? false : true
                                }
                              >
                                upd
                              </button>
                            </form>
                          </div>
                        ) : null}
                      </li>
                    );
                  })
                ) : (
                  <p>nothing to show</p>
                )}
              </ul>
            </div>
          </section>
        </aside>
        <div id="main">
          <AllQuestions />
        </div>
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(MyProfile);
