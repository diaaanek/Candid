import React, { Component } from "react";

import swal from "sweetalert";
import Sidebar from "./Sidebar.css";
import NavigateNext from "@material-ui/icons/NavigateNext";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import CircularProgress from "@material-ui/core/CircularProgress";

class QuizList extends Component {
  constructor() {
    super();

    this.state = {
      radioVal: null,
      sec: 60,
      min: 0,
      correct: null,
      scored: false,
      similey: null
    };
    this.quizTimer();
    this.timer();
  }

  handleChange = e => {
    this.setState({
      radioVal: e.target.value
    });
  };

  async updating() {
    const { started, qstnNo, onPress } = this.props;
    const { correct, radioVal } = this.state;

    if (radioVal == null) {
      swal("Oops", "Please select an option!", "error", {
        className: "alert"
      });
    } else {
      if (
        qstnNo === started.qArr.length - 1 &&
        started.qArr[qstnNo].answer.match(radioVal)
      ) {
        await this.setState({
          correct: correct + 1,
          min: 0,
          sec: 0
        });
      } else if (
        qstnNo === started.qArr.length - 1 &&
        !started.qArr[qstnNo].answer.match(radioVal)
      ) {
        await this.setState({
          min: 0,
          sec: 0
        });
      } else if (
        !(qstnNo === started.qArr.length - 1) &&
        started.qArr[qstnNo].answer.match(radioVal)
      ) {
        await this.setState({
          correct: correct + 1,
          radioVal: null
        });

        onPress(qstnNo);
      } else {
        await this.setState({
          radioVal: null
        });
        onPress(qstnNo);
      }
    }
  }

  async scoreCal() {
    const { started } = this.props;
    const { correct } = this.state;

    await this.setState({
      scored: (correct * (100 / started.qArr.length)).toFixed(2),
      date: new Date()
    });

    this.saveScore();
    // localStorage.setItem("score", JSON.stringify(score))
  }

  saveScore() {
    const { started } = this.props;
    const { scored, date } = this.state;

    started.score = scored;
    started.attemptDate = date.toLocaleDateString();
    started.attemptTime = date.toLocaleTimeString();

    if (scored === 100) {
      this.setState({
        similey: (
          <img
            src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1553094897/4.png"
            className="similey"
          />
        )
      });
    } else if (scored === 0) {
      this.setState({
        similey: (
          <img
            src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1553094897/1.png"
            className="similey"
          />
        )
      });
    } else if (scored >= 60) {
      this.setState({
        similey: (
          <img
            src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1553094897/2.png"
            className="similey"
          />
        )
      });
    } else if (scored < 60 && scored > 0) {
      this.setState({
        similey: (
          <img
            src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1553094897/3.png"
            className="similey"
          />
        )
      });
    }
  }

  quizTimer = () => {
    const { sec, min } = this.state;

    if (sec === 0 && min === 0) {
      clearInterval(this.time);

      this.scoreCal();
    } else if (sec <= 0 && !(min === 0)) {
      this.setState({
        sec: 59,
        min: min - 1
      });
    } else {
      this.setState({
        sec: sec - 1
      });
    }
  };

  timer() {
    this.time = setInterval(this.quizTimer, 1000);
  }

  render() {
    const { started, qstnNo, back, quizName, subQuizName } = this.props;
    const { correct, scored, min, sec } = this.state;
    return (
      <div className="quizContainer">
        <main>
          <aside className="sidebar">
            <div id="side"> Learning {" " + quizName}</div>

            <img
              src="https://image.flaticon.com/icons/svg/337/337941.svg"
              alt="quiz"
              style={{ width: "125px", marginTop: "2rem" }}
            />
            <h3>
              Time Remaining: {min} : {sec}
            </h3>
            <div>
              <CircularProgress
                size={125}
                thickness={8}
                variant="static"
                value={scored}
              />

              <div variant="headline">{scored} % Score </div>
              <br />
              <div variant="subheading">
                Total Questions: {started.qArr.length}
              </div>
              <p variant="subheading">Correct: {correct}</p>
            </div>
            <br />
          </aside>

          <div className="section">
            <h1 style={{ color: "grey" }}>{subQuizName}</h1>
            <div>
              <div style={{ margin: "80px 3% 3% 3%" }}>
                {scored !== false ? (
                  <div>
                    <div className="resultDiv" />
                    {this.state.similey}
                    <br />
                    <button className="start" onClick={() => back()}>
                      Go back
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="qstnDiv">
                      <FormControl
                        component="fieldset"
                        style={{
                          fontFamily: "Cereal-reg"
                        }}
                      >
                        <h3>
                          {qstnNo + 1}. {started.qArr[qstnNo].question}
                        </h3>

                        <RadioGroup
                          value={this.state.radioVal}
                          onChange={this.handleChange}
                        >
                          <FormControlLabel
                            value="1"
                            name="option"
                            control={<Radio />}
                            label={started.qArr[qstnNo].option1}
                          />
                          <FormControlLabel
                            value="2"
                            name="option"
                            control={<Radio />}
                            label={started.qArr[qstnNo].option2}
                          />
                          <FormControlLabel
                            value="3"
                            name="option"
                            control={<Radio />}
                            label={started.qArr[qstnNo].option3}
                          />
                          <FormControlLabel
                            value="4"
                            name="option"
                            control={<Radio />}
                            label={started.qArr[qstnNo].option4}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <br />
                    <button
                      className="nextBtn"
                      onClick={updating => this.updating()}
                    >
                      <NavigateNext />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default QuizList;
