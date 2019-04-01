import React, { Component } from "react";
import { render } from "react-dom";
import firebase, { auth, provider } from "../firebase.js";
import { db } from "../../firebase/index";
import AuthUserContext from "../AuthUserContext";
import withAuthorization from "../withAuthorization";

import html from "./info/html.pdf";
import css from "./info/css.pdf";
import js from "./info/js.pdf";
import react from "./info/react.pdf";
import sql from "./info/sql.pdf";

import Test from "./Test.scss";
import AllQuestions from "./AllQuestions";

import QuestionCard from "./QuestionCard";

class Study extends Component {
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
        <div
          class="teams box"
          style={{
            fontFamily: "Cereal-bold",
            backgroundColor: "white",
            color: "#010101"
          }}
        >
          {" "}
          Study{" "}
          <button
            style={{
              marginTop: "1em",
              backgroundColor: "white",
              marginTop: "1em"
            }}
          >
            {" "}
            <a href={html} target="_blank">
              <img
                src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1553965944/logo-html-5.svg"
                style={{
                  height: "50px",
                  width: "50px",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              />{" "}
            </a>
          </button>
          <button style={{ marginTop: "1em", backgroundColor: "white" }}>
            <a href={css} target="_blank">
              <img
                src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1553965943/logo-css.svg"
                style={{
                  height: "50px",
                  width: "50px",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              />
            </a>
          </button>
          <button style={{ marginTop: "1em", backgroundColor: "white" }}>
            <a href={js} target="_black">
              <img
                src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                style={{
                  height: "50px",
                  width: "50px",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              />
            </a>
          </button>
          <button style={{ marginTop: "1em", backgroundColor: "white" }}>
            <a href={react} target="_black">
              <img
                src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1553965943/logo-react.svg"
                style={{
                  height: "50px",
                  width: "50px",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              />
            </a>
          </button>
          <button style={{ marginTop: "1em", backgroundColor: "white" }}>
            <img
              src="https://res.cloudinary.com/dxrvvjvpf/image/upload/c_scale,w_61/v1553965945/logo-ruby.svg"
              style={{
                height: "50px",
                width: "50px",
                marginTop: "5px",
                marginBottom: "5px"
              }}
            />
          </button>
          <button style={{ marginTop: "1em", backgroundColor: "white" }}>
            <a href="http://cooervo.github.io/Algorithms-DataStructures-BigONotation/algorithms.html">
              <img
                src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1553965943/logo-data-structures-algorithms.svg"
                style={{
                  height: "50px",
                  width: "50px",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              />
            </a>
          </button>
          <button style={{ marginTop: "1em", backgroundColor: "white" }}>
            <a href={sql} target="_black">
              <img
                src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1553965942/logo-sql.svg"
                style={{
                  height: "50px",
                  width: "50px",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              />{" "}
            </a>
          </button>
        </div>

        <div
          class="channels box"
          style={{ fontFamily: "Cereal-bold", color: "black" }}
        >
          {" "}
          My Questions
          <div>
            <li
              style={{
                margin: "0",
                textAlign: "left",
                listStyle: "none"
              }}
            >
              {this.state.loading ? <div>loading...</div> : null}
              {this.state.user && this.state.items ? (
                Object.keys(items).map(item => {
                  const requests = items[item].requests;
                  return (
                    <li
                      key={items[item].key}
                      style={{
                        backgroundColor: "white",
                        marginTop: ".75em",
                        boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.15)",
                        listStyle: "none",
                        borderRadius: "4px",
                        paddingLeft: "1em",
                        paddingRight: "1em"
                      }}
                    >
                      <button
                        onClick={() =>
                          this.removeItem(items[item].key, this.state.userId)
                        }
                        style={{
                          backgroundColor: "white",
                          marginTop: "8px"
                        }}
                      >
                        <img
                          src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-8/256/Open-folder-delete-icon.png"
                          style={{
                            height: "25px",
                            width: "25px"
                          }}
                        />
                      </button>
                      <button
                        onClick={() => this.updForm(items[item].key)}
                        style={{ backgroundColor: "white" }}
                      >
                        <img
                          src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/256/Edit-validated-icon.png"
                          style={{
                            height: "25px",
                            width: "25px"
                          }}
                        />
                      </button>
                      <span
                        style={{
                          fontFamily: "Cereal-bold",
                          color: "black"
                        }}
                      >
                        {" "}
                        <br /> {items[item].question}{" "}
                      </span>
                      <p
                        style={{
                          fontFamily: "Cereal-light",
                          fontSize: "13px",
                          paddingBottom: "5px"
                        }}
                      >
                        Liked by:
                      </p>

                      {requests &&
                        Object.keys(requests).map(el => {
                          return <p>{requests[el].name}</p>;
                        })}
                      {this.state.userId === items[item].createdById ? (
                        <div />
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
                              name="updItem"
                              placeholder="What is your question?"
                              onChange={this.handleChange}
                              value={this.state.updItem}
                            />
                            <button
                              disabled={updItem !== "" ? false : true}
                              style={{ backgroundColor: "white" }}
                            >
                              <img
                                src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/256/Edit-validated-icon.png"
                                style={{
                                  height: "25px",
                                  width: "25px"
                                }}
                              />
                            </button>
                          </form>
                        </div>
                      ) : null}
                    </li>
                  );
                })
              ) : (
                <p>Ask a question on the bottom right!</p>
              )}
            </li>
          </div>
        </div>

        <div class="header box" style={{ fontFamily: "Cereal-bold" }}>
          Question Feed
        </div>
        <div class="messages box">
          {/*    <div class="input box">
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
                        padding: "13px",
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
          */}
          <ul class="message-list">
            <li>
              {" "}
              <QuestionCard />
            </li>

            <li>
              <div class="message-container">
                {" "}
                <img
                  src="https://images.vexels.com/media/users/3/144928/isolated/preview/ebbccaf76f41f7d83e45a42974cfcd87-dog-illustration-by-vexels.png"
                  class="avatar"
                />{" "}
                <div class="message-text">
                  <h3 style={{ textAlign: "left" }}>
                    Candid Demo <span>10:30 AM</span>
                  </h3>
                  <p>Create a map function that does what Array.map() does. </p>{" "}
                </div>
              </div>
            </li>

            <AllQuestions />
          </ul>
        </div>
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
                    style={{
                      fontSize: "15px",
                      backgroundColor: "White",
                      boxShadow:
                        "0 2px 5px 0 rgba(0, 0, 0, 0.09), 0 2px 5px 0 rgba(0, 0, 0, 0.08)"
                    }}
                  />{" "}
                  <button
                    className="start"
                    style={{
                      display: "inlineBlock",
                      position: "relative",
                      padding: "13px",
                      marginLeft: "10px",
                      fontFamily: "Cereal-bold",
                      fontSize: "14px"
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
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Study);
