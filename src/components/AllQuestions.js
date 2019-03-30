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
    db.removequestionRequest(questionBelongToUserKey, questionKey);
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
              Nemo temporibus autem officia quae ullam pariatur blanditiis velit
              eveniet, alias at fuga maxime.{" "}
            </p>{" "}
          </div>

          {this.state.loading ? <div>loading...</div> : null}
          {this.state.user && items ? (
            Object.keys(items).map(item => {
              const requests = items[item].requests;
              return (
                <li key={items[item].key}>
                  <h3>{items[item].question}</h3>
                  {this.state.userId !== items[item].createdById ? (
                    // button 1
                    <button
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
                        src="https://image.flaticon.com/icons/png/512/39/39794.png"
                        style={{ height: "25px", width: "25px" }}
                      />
                    </button>
                  ) : null}
                  // button 2
                  <div>
                    {requests &&
                      Object.keys(requests).map(el => {
                        if (requests[el].userId === userId) {
                          //only auth user question requests
                          return (
                            <p
                              onClick={() =>
                                this.removeQuestionRequest(
                                  requests[el].questionBelongToUserKey,
                                  items[item].createdById,
                                  requests[el].keyAtQuestions,
                                  requests[el].keyAtUsers
                                )
                              }
                            >
                              <img
                                src="http://cdn.onlinewebfonts.com/svg/img_309151.png"
                                style={{
                                  height: "25px",
                                  width: "25px"
                                }}
                              />
                            </p>
                          );
                        }
                      })}
                  </div>
                  {this.state.userId !== items[item].createdById ? (
                    <Link
                      to={{
                        pathname: `/user/${items[item].createdById}`,
                        createdById: `${items[item].createdById}`,
                        createdBy: `${items[item].createdBy}`
                      }}
                    >
                      <p>Asked by: {items[item].user}</p>
                    </Link>
                  ) : (
                    <div>
                      <Link to="/myprofile">
                        {items[item].user} (My Profile)
                      </Link>

                      <button
                        onClick={() =>
                          this.removeItem(items[item].key, this.state.userId)
                        }
                      >
                        Remove Question
                      </button>
                      <button onClick={() => this.updForm(items[item].key)}>
                        Update Question
                      </button>
                    </div>
                  )}
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
                          placeholder="What is your question ?"
                          onChange={this.handleChange}
                          value={this.state.updItem}
                        />

                        <button
                          disabled={updItem && updName !== "" ? false : true}
                        >
                          Update
                        </button>
                      </form>
                    </div>
                  ) : null}
                </li>
              );
            })
          ) : (
            <p>no questions</p>
          )}
        </div>
      </li>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AllQuestions);
