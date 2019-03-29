import React, { Component } from "react";
import questions from "./questions.json";

import Questionanswerpanel from "./questionpanel.js";

import Button from "@material-ui/core/Button";

class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Math.floor(Math.random() * questions.length)
    };
    this.updateNumber = this.updateNumber.bind(this);
  }

  updateNumber() {
    this.setState({ number: Math.floor(Math.random() * questions.length) });
  }

  render() {
    return (
      <div>
        <div>
          <div class="question">
            <div class="votes">
              <div class="upvote" />
              <div class="number-of-votes" onClick={this.updateNumber}>
                5
              </div>
              <div class="downvote" />
            </div>

            <div class="question-and-answer">
              <h1
                style={{
                  fontFamily: "Cereal-bold",
                  color: "grey",
                  fontSize: "15px"
                }}
              >
                {Object.keys(questions[this.state.number])}
              </h1>
              <p>{Object.values(questions[this.state.number])}</p>
            </div>
          </div>
        </div>

        <Button
          variant="contained"
          color="secondary"
          onClick={this.updateNumber}
        >
          Next
        </Button>
      </div>
    );
  }
}

export default QuestionCard;
