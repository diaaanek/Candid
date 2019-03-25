import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

// map through quiz
// render image, name, description
// button to onclick start

class QuizList extends Component {
  render() {
    const { list, onPress } = this.props;
    return (
      <div className="quizContainer" style={{ margin: "20px 10% 10% 10%" }}>
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
                  style={{ objectFit: "cover" }}
                  height="170"
                  image={quiz.image}
                  title={quiz.name}
                />

                <CardContent>
                  <h1
                    gutterBottom
                    variant="headline"
                    component="h1"
                    style={{ textAlign: "left", fontFamily: "Quicksand" }}
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
                <button
                  className="start"
                  onClick={() => onPress(index)}
                  size="large"
                  color="primary"
                >
                  {" "}
                  Start
                </button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default QuizList;
