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
            <div class="question-and-answer">
              <h3
                style={{
                  fontFamily: "Cereal-bold",
                  color: "#01010",
                  fontSize: "12x"
                }}
              >
                {Object.keys(questions[this.state.number])}
              </h3>
              <p>{Object.values(questions[this.state.number])}</p>
            </div>
          </div>
        </div>
        <button className="start" onClick={this.updateNumber}>
          Next Question
        </button>
        {"    "}
        <button className="start" onClick={this.updateNumber}>
          Show Answer
        </button>
      </div>
    );
  }
}

export default QuestionCard;
