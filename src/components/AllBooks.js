import React, { Component } from "react";
import { render } from "react-dom";
import firebase, { auth, provider } from "./firebase.js"; // <--- add this line
import { db } from "../firebase/index";
import { Link } from "react-router-dom";
import withAuthorization from "./withAuthorization";
import AuthUserContext from "./AuthUserContext";

class AllBooks extends Component {
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
    db.getAllBooks().on("value", snapshot =>
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
    db.delAllBooks(itemId);
    db.delUserBooks(itemId, userId);
  };

  updItem = (itemId, userId) => {
    const { updItem, updName } = this.state;
    const item = {
      title: updItem,
      user: updName
    };
    db.updAllBooks(itemId, item);
    db.updUserBooks(itemId, userId, item);
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

    /* const item = {
      key: newPostRef.key,
      name: user.displayName || user.email,
      photoUrl: user.photoURL,
      userId: user.uid
    };*/

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
      keyAtBooks: newPostRef2.key,
      bookBelongToUserKey: itemId
    });

    newPostRef2.set({
      keyAtUsers: newPostRef.key,
      name: user.displayName || user.email,
      photoUrl: user.photoURL,
      userId: user.uid,
      keyAtBooks: newPostRef2.key,
      bookBelongToUserKey: itemId
    });

    /*
    db.requestUserBooks(itemId, userId, item, key);
    db.appendRequestsToAllBooks(itemId, item, key);*/
  };

  removeBookRequest = (
    bookBelongToUserKey,
    bookCreatedById,
    bookKey,
    userKey
  ) => {
    db.removeBookRequest(bookBelongToUserKey, bookKey);
    db.removeUserBookRequest(bookCreatedById, bookBelongToUserKey, userKey);
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
      <div className="main">
        <div className="container">
          {/* <section className="add-item">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="What's your name?"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <input
                type="text"
                name="currentItem"
                placeholder="What are you bringing ?"
                onChange={this.handleChange}
                value={this.state.currentItem}
              />
              <button disabled={currentItem && username !== "" ? false : true}>
                Add Item
              </button>
            </form>
          </section>
*/}
          <section className="display-item">
            <div className="wrapper">
              <h1>All Interview Questions</h1>
              <ul>
                {this.state.loading ? <div>loading...</div> : null}
                {this.state.user && items ? (
                  Object.keys(items).map(item => {
                    const requests = items[item].requests;
                    return (
                      <li key={items[item].key}>
                        <h3>{items[item].title}</h3>
                        {this.state.userId !== items[item].createdById ? (
                          <button
                            style={{ border: "2px solid green" }}
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
                            request interview
                          </button>
                        ) : null}
                        <div>
                          {requests &&
                            Object.keys(requests).map(el => {
                              if (requests[el].userId === userId) {
                                //only auth user book requests
                                return (
                                  <p
                                    onClick={() =>
                                      this.removeBookRequest(
                                        requests[el].bookBelongToUserKey,
                                        items[item].createdById,
                                        requests[el].keyAtBooks,
                                        requests[el].keyAtUsers
                                      )
                                    }
                                    d
                                  >
                                    <button> cancel </button>
                                  </p>
                                );
                              }
                            })}
                        </div>

                        {this.state.userId !== items[item].createdById ? (
                          <Link
                            to={{
                              pathname: `/user/${items[item].createdById}`,
                              // this is the trick!
                              createdById: `${items[item].createdById}`,
                              createdBy: `${items[item].createdBy}`
                            }}
                          >
                            <p>brought by: {items[item].user}</p>
                          </Link>
                        ) : (
                          <div>
                            <Link to="/myprofile">
                              {items[item].user} (My Profile)
                            </Link>

                            <button
                              onClick={() =>
                                this.removeItem(
                                  items[item].key,
                                  this.state.userId
                                )
                              }
                            >
                              Remove Item
                            </button>
                            <button
                              onClick={() => this.updForm(items[item].key)}
                            >
                              upd Item
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
                                placeholder="What are you bringing ?"
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
                  <p>no questions</p>
                )}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AllBooks);
