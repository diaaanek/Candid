import React, { Component } from "react";
import questions from "./questions.json";

import Questionanswerpanel from "./questionpanel.js";

import Flippy, { FrontSide, BackSide } from "react-flippy";

class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      number: Math.floor(Math.random() * questions.length)
    };
    this.updateNumber = this.updateNumber.bind(this);
  }

  updateNumber() {
    this.setState({ number: Math.floor(Math.random() * questions.length) });
  }

  render() {
    return (
      <div style={{ justifyContent: "center" }}>
        <Flippy
          flipOnHover={false}
          flipOnClick={false}
          flipDirection="horizontal"
          ref={r => (this.flippyHorizontal = r)}
        >
          <FrontSide
            style={{
              justifyContent: "center",

              alignItems: "center",
              boxShadow: "0 0 0 0"
            }}
          >
            <h4>{Object.keys(questions[this.state.number])}</h4>
          </FrontSide>
          <BackSide
            style={{
              alignItems: "center",
              boxShadow: "0 0 0 0"
            }}
          >
            {Object.values(questions[this.state.number])}
          </BackSide>
        </Flippy>

        {"    "}
        {"    "}

        <button
          className="start"
          onClick={() => this.flippyHorizontal.toggle()}
        >
          Show Answer
        </button>
        <button className="start" onClick={this.updateNumber}>
          Next Question
        </button>
      </div>
    );
  }
}

export default QuestionCard;
