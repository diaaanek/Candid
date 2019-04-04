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
      <div id="main-cardi">
        <div style={{ justifyContent: "center", marginTop: "4em" }}>
          <body>
            <div className="main-cardi">
              <div className="cardi-left">
                <div className="tinycard">
                  {" "}
                  <h2>Daily Goal: </h2>
                </div>
                <h1 style={{ color: "black", marginTop: "2em" }}>
                  {" "}
                  Questions Flashcards
                </h1>
              </div>

              <div className="cardi-right">
                <div className="bigcard">
                  <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                    ref={r => (this.flippyHorizontal = r)}
                  >
                    <FrontSide className="tinycard1">
                      <div id="word">
                        <h4>{Object.keys(questions[this.state.number])}</h4>
                      </div>
                    </FrontSide>
                    <BackSide className="tinycard1">
                      {Object.values(questions[this.state.number])}
                    </BackSide>
                  </Flippy>

                  {"    "}
                  {"    "}
                  <div
                    className="button-box"
                    style={{
                      textAlign: "center",
                      justifyContent: "center",
                      margin: "3em"
                    }}
                  >
                    <button
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "1em"
                      }}
                      className="start"
                      onClick={() => this.flippyHorizontal.toggle()}
                    >
                      Show Answer
                    </button>
                    <button
                      style={{
                        justifyContent: "center",
                        marginLeft: "1em"
                      }}
                      className="start"
                      onClick={this.updateNumber}
                    >
                      Next Question
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </div>
      </div>
    );
  }
}

export default QuestionCard;

{
  /* <Flippy
  flipOnHover={false}
  flipOnClick={true}
  ref={r => (this.flippyHorizontal = r)}
>
  <FrontSide id="flashcard">
    <div id="word">
      <h4>{Object.keys(questions[this.state.number])}</h4>
    </div>
  </FrontSide>
  <BackSide id="flashcard">
    {Object.values(questions[this.state.number])}
  </BackSide>
</Flippy>


<button
  className="start"
  onClick={() => this.flippyHorizontal.toggle()}
>
  Show Answer
</button>
<button className="start" onClick={this.updateNumber}>
  Next Question
</button>
*/
}
