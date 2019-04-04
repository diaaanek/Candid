import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

class QuizInfo extends Component {
  render() {
    const { quiz, onBack, onPress } = this.props;
    return (
      <div style={{ paddingTop: "5em" }}>
        <h1 style={{ fontFamily: "Cereal-med", color: "#1b1b1b" }}>
          {" "}
          Take Quizzes{" "}
        </h1>

        <br />
        {quiz.subQuiz.map((subQuiz, index) => {
          return (
            <Card
              style={{ maxWidth: 345, display: "inline-block", margin: "1%" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  // className={classes.media}
                  style={{ objectFit: "cover" }}
                  height="150"
                  image={quiz.image}
                  title={subQuiz.name}
                />

                {subQuiz.score ? (
                  <CardContent>
                    <h1
                      gutterBottom
                      variant="headline"
                      component="h1"
                      style={{ textAlign: "left", fontFamily: "Cereal-bold" }}
                    >
                      {subQuiz.name}
                    </h1>

                    <div
                      variant="caption"
                      style={{
                        textAlign: "left",
                        fontSize: "13px",
                        fontFamily: "Cereal-light"
                      }}
                    >
                      You have attempted this Quiz.
                    </div>
                    <br />
                    <div variant="body2" style={{ textAlign: "left" }}>
                      Percentage: {subQuiz.score} %
                      <br />
                      Attempted Date: {subQuiz.attemptDate}
                      <br />
                      Attempted Time: {subQuiz.attemptTime}
                    </div>
                  </CardContent>
                ) : (
                  <CardContent>
                    <h1
                      gutterBottom
                      variant="headline"
                      component="h1"
                      style={{
                        textAlign: "left",
                        fontFamily: "Cereal-med",
                        fontWeight: "700",
                        color: "#1b1b1b"
                      }}
                    >
                      {subQuiz.name}
                    </h1>

                    <div
                      variant="caption"
                      style={{
                        textAlign: "left",
                        fontSize: "15px",
                        fontFamily: "Cereal-light"
                      }}
                    >
                      This Quiz is based on the following criteria:
                    </div>
                    <br />
                    <div
                      variant="body2"
                      style={{ textAlign: "left", fontSize: "13px" }}
                    >
                      Total Questions: {subQuiz.questions}
                      <br />
                      Total Time: {subQuiz.time}
                      <br />
                      Passing Score: 60 %
                    </div>
                  </CardContent>
                )}
              </CardActionArea>

              <CardActions style={{ justifyContent: "center" }}>
                <button
                  onClick={onBack}
                  size="small"
                  color="secondary"
                  className="start"
                >
                  Back
                </button>
                {!subQuiz.score ? (
                  <button
                    onClick={() => onPress(index)}
                    size="small"
                    color="primary"
                    className="start"
                  >
                    Start
                  </button>
                ) : null}
              </CardActions>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default QuizInfo;
