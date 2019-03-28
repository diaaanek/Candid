import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Link, BrowserRouter as Router } from "react-router-dom";
import * as routes from "../../constants/routes";

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
            <h1> New & Noteworthy</h1>
          </div>{" "}
          <hr />
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
                      fontSize: "25px",
                      fontWeight: "700"
                    }}
                  >
                    Javascript Coding Challenges
                  </div>
                  <br />
                  <div class="middle-col">
                    <p class="card__instructor" />
                    <p class="card__instructor">
                      <span
                        style={{
                          float: "left"
                        }}
                      >
                        Blah blah blah{" "}
                      </span>
                      <span>• Developer and Bootcamp </span>
                    </p>
                  </div>
                  <div>
                    <div class="card__subtitle">
                      The only course you need to learn <strong>web</strong>{" "}
                      <strong>development</strong> - HTML, CSS, JS, Node, and
                      More!
                    </div>
                    <div
                      class="card__metadata"
                      style={{ float: "left", fontSize: "8" }}
                    >
                      <span class="card__meta-item">
                        <span class="card__icon fa fa-play-circle" />
                        346 lectures
                      </span>
                      <span class="card__meta-item">
                        <span class="card__icon fa fa-clock-o" />5 hours
                      </span>
                      <span class="card__meta-item">
                        <span class="card__icon fa fa-sliders" />
                        Beginner-Intermediate
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
          <div id="quix-title">
            <h1>🔥 Test Your Technical Chops</h1>
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
                      style={{ textAlign: "left" }}
                    >
                      {quiz.name}
                    </h1>
                    <div
                      component="p"
                      style={{
                        textAlign: "left",
                        fontSize: "14px",
                        fontFamily: "Avenir"
                      }}
                    >
                      {quiz.description}
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions>
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
          <div class="card__container">
            <div class="card__inner">
              <div class="search-course-card--card--left-col--3kKip">
                <a href="/the-web-developer-bootcamp/">
                  <img
                    src="https://udemy-images.udemy.com/course/304x171/625204_436a_2.jpg"
                    alt="coursed"
                    width="354"
                    height="171"
                    class="card__image"
                  />
                </a>
              </div>

              <div class="fx">
                <div class="card__head">
                  <span class="card__title" style={{ float: "left" }}>
                    Fullstack Coding Challenges
                  </span>
                </div>
                <div class="middle-col">
                  <br />
                  <p class="card__instructor" style={{ float: "left" }}>
                    {" "}
                    5 hour full length course that encompasses Ruby, Rails,
                    Javascript, React/Redux
                  </p>

                  <span className="card__subtitle"> Blah blah blah </span>
                  <span> </span>
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
        </div>
      </div>
    );
  }
}

export default QuizList;
