import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Link, BrowserRouter as Router } from "react-router-dom";
import * as routes from "../../constants/routes";

import Demo from "../Demo";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import "./Dashboard.css";

// map through quiz
// render image, name, description
// button to onclick start

class QuizList extends Component {
  render() {
    const { list, onPress } = this.props;
    return (
      <div>
        <div className="quizContainer" style={{ margin: "20px 10% 10% 10%" }}>
          <div id="quix-title">
            <h1
              style={{
                fontWeight: "700",
                fontFamily: "Cereal-bold",
                color: "# 111111"
              }}
            >
              {" "}
              New & Noteworthy
            </h1>
            <h4>
              A selection of technical challenges based on your skill set.
            </h4>
          </div>{" "}
          <br />
          <div class="card__container">
            <div class="card__inner">
              <div class="search-course-card--card--left-col--3kKip">
                <a href="/the-web-developer-bootcamp/">
                  <img
                    src="https://cdn.rswebsols.com/wp-content/uploads/2016/06/web-design-development-programming-coding-developer-programmer.jpg"
                    alt="code-challenge"
                    width="354"
                    height="171"
                    class="card__image"
                  />
                </a>
              </div>

              <div class="fx">
                <div class="card__head">
                  <div
                    class="card__title"
                    style={{
                      float: "left",
                      fontSize: "20px",
                      fontFamily: "Cereal-bold"
                    }}
                  >
                    Javascript Coding Challenges
                  </div>
                  <br />

                  <div>
                    <div class="card__subtitle">
                      The only course you need to learn <strong>coding</strong>{" "}
                      <strong>challenges</strong> -for top tech companies.
                    </div>
                    <div
                      class="card__metadata"
                      style={{ float: "left", fontSize: "8" }}
                    >
                      <span class="card__meta-item">
                        <span class="card__icon fa fa-play-circle" />
                        Features: blah blah
                      </span>
                      <span class="card__meta-item">
                        <span class="card__icon fa fa-clock-o" />5 hours
                      </span>
                      <span class="card__meta-item">
                        <span class="card__icon fa fa-sliders" />
                        Level: Beginner-Intermediate
                      </span>
                    </div>
                  </div>
                </div>
                <div className="right-col">
                  {" "}
                  <div className="card__price"> 5,025 students enrolled </div>
                  <Link to={routes.CODE}>
                    <button className="start">Enroll Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div id="quix-title" style={{ marginTop: "1em" }}>
            <img
              src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1552589882/dart-board.svg"
              style={{
                height: "105px",
                width: "125px",
                float: "left",
                marginRight: "1em"
              }}
            />
            <h1 style={{ fontFamily: "Cereal-bold" }}>
              Test Your Technical Chops
            </h1>
            <h4> Coming soon: Prep on the go with our Mobile Application</h4>
          </div>{" "}
          <br />
          {list.map((quiz, index) => {
            return (
              <Card
                // className={classes.card}
                style={{ maxWidth: 345, display: "inline-block", margin: "1%" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // className={classes.media}
                    style={{
                      objectFit: "cover",
                      boxShadow: "0 0 2px  0 3px 16px "
                    }}
                    height="170"
                    image={quiz.image}
                    title={quiz.name}
                  />

                  <CardContent>
                    <h1
                      gutterBottom
                      variant="headline"
                      component="h1"
                      style={{
                        textAlign: "left",
                        fontSize: "22px",
                        fontFamily: "Cereal-bold"
                      }}
                    >
                      {quiz.name}
                    </h1>
                    <div
                      component="p"
                      style={{
                        textAlign: "left",
                        fontSize: "14px",
                        fontFamily: "Cereal-reg"
                      }}
                    >
                      {quiz.description}
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: "center" }}>
                  <center>
                    <button
                      className="start"
                      onClick={() => onPress(index)}
                      size="large"
                      color="primary"
                    >
                      {" "}
                      Start
                    </button>
                  </center>
                </CardActions>
              </Card>
            );
          })}
          <br />
        </div>
      </div>
    );
  }
}

export default QuizList;
