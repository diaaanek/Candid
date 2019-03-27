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

  renderQuestionAndAnswer() {
    return (
      <Questionanswerpanel
        title={Object.keys(questions[this.state.number])}
        answer={Object.values(questions[this.state.number])}
      />
    );
  }
  componentClicked() {
    console.log("You clicked  Component");
  }

  render() {
    return (
      <div>
        <div>{this.renderQuestionAndAnswer()}</div>
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
