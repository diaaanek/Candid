import React, { Component } from "react";
import questions from "./questions.json";

import Flippy, { FrontSide, BackSide } from "react-flippy";
import QuestionCardStyle from "./QuestionCardStyle.css";

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
      <div id="main-cardi">
        <div style={{ justifyContent: "center", marginTop: "4em" }}>
          <body>
            <div id="wrapper">
              <div id="left-container">
                <div class="card text-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjU5BB6G1fVUPx_5Phgh-a9t0t_cNzy0cSP3Lu3KRHRatENiw"
                    alt="Logo"
                    id="img-profile"
                    class="img-circle"
                  />

                  <h2>Questions</h2>

                  <div class="elem-div-progress-container">
                    <progress id="elem-progress-bar" class="hidden" />
                    <small
                      class="elem-small-progress-val"
                      id="elem-small-progress-val"
                    />
                  </div>
                </div>
                <div class="card text-center">
                  <ul class="list-inline">
                    <li class="text-center">
                      <button
                        className="start"
                        onClick={() => this.flippyHorizontal.toggle()}
                      >
                        Show Answer
                      </button>
                    </li>

                    <li class="text-center">
                      <button className="start" onClick={this.updateNumber}>
                        Next Question
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="right-container">
                <Flippy
                  flipOnHover={false}
                  flipOnClick={true}
                  flipDirection="horizontal"
                  ref={r => (this.flippyHorizontal = r)}
                >
                  <FrontSide className="card">
                    <div id="word">
                      <h2 style={{ padding: "3em", fontFamily: "Cereal-med" }}>
                        {Object.keys(questions[this.state.number])}
                      </h2>
                    </div>
                  </FrontSide>

                  <BackSide className="card">
                    <p style={{ padding: "3em", fontFamily: "Cereal-med" }}>
                      {Object.values(questions[this.state.number])}{" "}
                    </p>
                  </BackSide>
                </Flippy>
              </div>
            </div>
          </body>
        </div>
      </div>
    );
  }
}

export default QuestionCard;
