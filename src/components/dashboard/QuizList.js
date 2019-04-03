import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Link, BrowserRouter as Router } from "react-router-dom";
import * as routes from "../../constants/routes";

import Footer from "../Footer";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { shadows } from "@material-ui/system";
import "./QuizCard.css";
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
                fontFamily: "Cereal-med",
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
                <img
                  src="https://cdn.rswebsols.com/wp-content/uploads/2016/06/web-design-development-programming-coding-developer-programmer.jpg"
                  alt="code-challenge"
                  maxWidth="354"
                  maxHeight="171"
                  class="card__image"
                />
              </div>

              <div class="fx">
                <div class="card__head">
                  <p style={{ color: "grey", fontSize: "12px" }}>
                    FULL STACK WEB DEVELOPMENT{" "}
                  </p>
                  <div
                    class="card__title"
                    style={{
                      float: "left",
                      fontSize: "20px",
                      fontFamily: "Cereal-med"
                    }}
                  >
                    Javascript Coding Challenges
                  </div>
                  <br />
                  <div>
                    <div class="card__subtitle" style={{ marginTop: "15px" }}>
                      A series of community curated Javascript Coding Challenges
                      to practice and learn from. <br />
                      The only course you need to learn <strong>
                        coding
                      </strong>{" "}
                      <strong>challenges</strong> -for top tech companies.{" "}
                      <p>
                        {" "}
                        <img
                          style={{
                            height: "25px",
                            width: "25px",
                            verticalAlign: "middle"
                          }}
                          src="  http://www.sclance.com/pngs/time-icon-png/time_icon_png_1384729.png"
                        />{" "}
                        1 hr{" "}
                        <img
                          style={{
                            height: "25px",
                            width: "25px",
                            verticalAlign: "middle",
                            marginLeft: "1em"
                          }}
                          src="http://www.sclance.com/pngs/books-icon-png/books_icon_png_166902.png"
                        />{" "}
                        5,025 students enrolled{" "}
                      </p>{" "}
                    </div>
                  </div>
                </div>
                <div className="right-col">
                  <Link to={routes.CODE}>
                    <button className="start">Start Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div id="quix-title" style={{ marginTop: "1em" }}>
            {/*}<img
              src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1552589882/dart-board.svg"
              style={{
                height: "105px",
                width: "125px",
                float: "left",
                marginRight: "1em"
              }}
            /> */}
            <h1 style={{ fontFamily: "Cereal-med" }}>
              Test Your Technical Chops
            </h1>
            <h4> Coming soon: Prep on the go with our Mobile Application</h4>
          </div>{" "}
          <br />
          {list.map((quiz, index) => {
            return (
              <Card
                boxShadow={3}
                // className={classes.card}
                style={{
                  maxWidth: 345,
                  display: "inline-block",
                  margin: "1%"
                }}
              >
                <CardActionArea>
                  {/*  <img
                    src={quiz.image}
                    style={{
                      objectFit: "cover",
                      height: "150px",
                      width: "150px",
                      marginTop: "1.5em",
                      borderRadius: "100%"
                    }}
                  /> */}

                  <CardMedia
                    component="img"
                    // className={classes.media}
                    style={{
                      objectFit: "cover"
                    }}
                    height="170"
                    image={quiz.image}
                    title={quiz.name}
                  />

                  <CardContent>
                    <p
                      style={{
                        color: "grey",
                        fontSize: "12px",
                        textAlign: "left"
                      }}
                    >
                      WEB DEVELOPMENT{" "}
                    </p>
                    <h1
                      gutterBottom
                      style={{
                        textAlign: "left",
                        color: "black",
                        fontSize: "22px",
                        fontFamily: "Cereal-reg"
                      }}
                    >
                      {quiz.name}
                    </h1>
                    <div
                      component="p"
                      style={{
                        textAlign: "left",
                        fontSize: "13px",
                        fontFamily: "Cereal-reg"
                      }}
                    >
                      {quiz.description}
                    </div>
                  </CardContent>
                </CardActionArea>

                <div class="footer-card">
                  <div class="left">
                    <button className="start" onClick={() => onPress(index)}>
                      {" "}
                      <img
                        class="icon-play"
                        src="https://rawgit.com/nelsonreitz/349a70325c2c14dc5e66581b73d6287f/raw/a92ae40c5d28a3231dfe36376184007694d51c37/icon-play.svg"
                      />{" "}
                      Start
                    </button>
                  </div>
                  <div class="right">
                    <img
                      className="button-right"
                      style={{
                        height: "30px",
                        width: "30px",
                        verticalAlign: "middle"
                      }}
                      src="  http://www.sclance.com/pngs/time-icon-png/time_icon_png_1384729.png"
                    />

                    <img
                      className="button-right"
                      style={{
                        height: "30px",
                        width: "30px",
                        verticalAlign: "middle"
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1z5hTK_PtD1G-yN2x_PiVOg6MDI5i9gM86dBM0weq-cyizpQ-"
                    />
                  </div>
                </div>
              </Card>
            );
          })}
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}

export default QuizList;
