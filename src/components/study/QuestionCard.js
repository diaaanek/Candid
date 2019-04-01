import React, { Component } from "react";
import questions from "./questions.json";

import Flippy, { FrontSide, BackSide } from "react-flippy";
import QuestionCardStyle from "./QuestionCardStyle.css";

import html from "./info/html.pdf";
import css from "./info/css.pdf";
import js from "./info/js.pdf";
import react from "./info/react.pdf";
import sql from "./info/sql.pdf";
class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      number: Math.floor(Math.random() * questions.length)
    };
  }

  updateNumber = () => {
    this.setState({ number: Math.floor(Math.random() * questions.length) });
  };

  render() {
    return (
      <div style={{ justifyContent: "center", marginTop: "4em" }}>
        <body>
          <div id="main">
            <article role="main">
              <h2>Under Construction</h2>
              <p>
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
              </p>
            </article>
            <nav>Question Type</nav>
          </div>
        </body>
      </div>
    );
  }
}

export default QuestionCard;
