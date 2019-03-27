import React, { Component } from "react";

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
            <h1>New & Noteworthy</h1>
          </div>{" "}
          <img
            src="https://image.flaticon.com/icons/png/512/1335/1335734.png"
            style={{ height: "80px", width: "80px" }}
          />
          <hr />
          <p />
          <div class="card__container">
            <div class="card__inner">
              <div class="search-course-card--card--left-col--3kKip">
                <a href="/the-web-developer-bootcamp/">
                  <img
                    src="https://udemy-images.udemy.com/course/304x171/625204_436a_2.jpg"
                    alt="course image"
                    width="354"
                    height="171"
                    class="card__image"
                  />
                </a>
              </div>

              <div class="fx">
                <div class="card__head">
                  <a href="/the-web-developer-bootcamp/" class="card__title">
                    Basics of HTML
                  </a>
                </div>
                <div class="middle-col">
                  <p class="card__instructor" />
                  <a
                    href="/the-web-developer-bootcamp/#instructor"
                    class="card__instructor"
                  >
                    <span> </span>
                    <span> • </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="quix-title">
            <h1>Test Your Technical Chops</h1>
          </div>{" "}
          <img
            src="https://image.flaticon.com/icons/png/512/1335/1335734.png"
            style={{ height: "80px", width: "80px" }}
          />
          <hr />
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
        </div>

        <div class="home-container">
          <div class="home-card">
            <div class="content">
              <header>
                <span>Programming, Code</span>
                <h2>HTML</h2>
              </header>
              <section>
                <p>The core unit of git is the commit.</p>
              </section>

              <footer>
                <div class="author">Hiiiii</div>
              </footer>
            </div>
          </div>

          <div class="card">
            <div class="content">
              <header>
                <span>Category</span>
                <h2>Card Title Here</h2>
              </header>
              <section>
                <p>The core unit of git is the commit.</p>
              </section>

              <footer>
                <div class="author">Hiiii</div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizList;
