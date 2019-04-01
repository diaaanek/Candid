import React, { Component } from "react";
import { db } from "../../firebase/index";
import { auth } from "../firebase.js";
// import UserInfo from "./UserInfo";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

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
      <div className="app" style={{ marginTop: "3em" }}>
        <Card
          style={{
            justifyContent: "center",
            maxWidth: 600,
            maxHeight: 525,
            marginTop: "100px",
            marginLeft: 30,
            marginRight: 30,
            position: "center"
          }}
        >
          <CardActionArea>
            <div>
              <h4
                style={{
                  fontSize: 23,
                  display: "inline-block",
                  marginLeft: "1.5em"
                }}
              >
                {createdBy}'s Questions
              </h4>
              <p style={{ fontSize: 13 }}>
                <section className="display-item">
                  <div className="wrapper">
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
                  </div>
                </section>
              </p>
            </div>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center" }}>
            <Link to={routes.STUDY}>
              <button className="start">Go Back</button>
            </Link>{" "}
          </CardActions>
        </Card>
      </div>
    );
  }
}
