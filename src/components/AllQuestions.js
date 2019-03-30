import React, { Component } from "react";
// import { render } from "react-dom";
import firebase, { auth, provider } from "./firebase.js";
import { db } from "../firebase/index";
import { Link } from "react-router-dom";
import withAuthorization from "./withAuthorization";
import AuthUserContext from "./AuthUserContext";

// import Test from "./Test.scss";

class AllQuestions extends Component {
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

  fetchData = () => {
    db.getAllQuestions().on("value", snapshot =>
      this.setState(() => ({
        items: snapshot.val(),
        loading: false
      }))
    );
  };
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user,
          userId: user.uid,
          loading: true
        });
        this.fetchData();
      }
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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

  sendRequest = (itemId, userId) => {
    const { user } = this.state;
    const key = firebase
      .database()
      .ref()
      .child("requests")
      .push().key;

    const postsRef = firebase
      .database()
      .ref(`/users/${userId}/${itemId}`)
      .child("requests");
    const postsRef2 = firebase
      .database()
      .ref(`/items/${itemId}`)
      .child("requests");
    const newPostRef2 = postsRef2.push();

    const newPostRef = postsRef.push();
    newPostRef.set({
      keyAtUsers: newPostRef.key,
      name: user.displayName || user.email,
      photoUrl: user.photoURL,
      userId: user.uid,
      keyAtQuestions: newPostRef2.key,
      questionBelongToUserKey: itemId
    });

    newPostRef2.set({
      keyAtUsers: newPostRef.key,
      name: user.displayName || user.email,
      photoUrl: user.photoURL,
      userId: user.uid,
      keyAtQuestions: newPostRef2.key,
      questionBelongToUserKey: itemId
    });
  };

  removeQuestionRequest = (
    questionBelongToUserKey,
    questionCreatedById,
    questionKey,
    userKey
  ) => {
    db.removeUserQuestionRequest(questionBelongToUserKey, questionKey);
    db.removeUserQuestionRequest(
      questionCreatedById,
      questionBelongToUserKey,
      userKey
    );
  };
  render() {
    const {
      updItem,
      updName,
      currentItem,
      username,
      items,
      requestedKeys,
      userId
    } = this.state;

    return (
      <div>
        {this.state.loading ? <div>loading...</div> : null}
        {this.state.user && items ? (
          Object.keys(items).map(item => {
            const requests = items[item].requests;
            return (
              <li>
                <div
                  key={items[item].key}
                  style={{
                    display: "-webkit-flex",
                    display: "flex",
                    margin: "1em"
                  }}
                >
                  <img
                    src="https://images.vexels.com/media/users/3/144928/isolated/preview/ebbccaf76f41f7d83e45a42974cfcd87-dog-illustration-by-vexels.png"
                    class="avatar"
                  />{" "}
                  <div class="message-text">
                    <h3 style={{ textAlign: "left" }}>
                      <Link
                        to={{
                          pathname: `/user/${items[item].createdById}`,
                          createdById: `${items[item].createdById}`,
                          createdBy: `${items[item].createdBy}`
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        <h3>{items[item].user}</h3>
                      </Link>
                    </h3>
                    <p>{items[item].question}</p>
                  </div>
                  {this.state.userId !== items[item].createdById ? (
                    // button 1

                    <span
                      onClick={() =>
                        this.sendRequest(
                          items[item].key,
                          items[item].createdById
                        )
                      }
                      disabled={
                        requests &&
                        Object.keys(requests)
                          .map(el => {
                            return requests[el].userId;
                          })
                          .includes(userId)
                          ? true
                          : false
                      }
                    >
                      <img
                        src="http://www.sclance.com/pngs/thumb-up-png/thumb_up_png_1379527.png"
                        style={{ height: "25px", width: "25px" }}
                      />
                    </span>
                  ) : null}
                  <div>
                    {requests &&
                      Object.keys(requests).map(el => {
                        if (requests[el].userId === userId) {
                          //only auth user question requests
                          return (
                            <span
                              onClick={() =>
                                this.removeUserQuestionRequest(
                                  requests[el].questionBelongToUserKey,
                                  items[item].createdById,
                                  requests[el].keyAtQuestions,
                                  requests[el].keyAtUsers
                                )
                              }
                            >
                              <img
                                src="http://pluspng.com/img-png/png-thumbs-down-thumbs-down-icon-1600.png"
                                style={{
                                  height: "25px",
                                  width: "25px"
                                }}
                              />
                            </span>
                          );
                        }
                      })}
                  </div>
                </div>
              </li>
            );
          })
        ) : (
          <p>no questions</p>
        )}
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AllQuestions);
