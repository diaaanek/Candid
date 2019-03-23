import React, { Component } from "react";

import swal from "sweetalert";

import NavigateNext from "@material-ui/icons/NavigateNext";

import SentimentSatisfied from "@material-ui/icons/SentimentSatisfiedRounded";
import SentimentVerySatisfied from "@material-ui/icons/SentimentVerySatisfiedRounded";
import SentimentDissatisfied from "@material-ui/icons/SentimentDissatisfiedRounded";
import SentimentVeryDissatisfied from "@material-ui/icons/SentimentVeryDissatisfiedRounded";

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
      correct: 0,
      scored: false,
      similey: null
    };

    this.quizTimer = this.quizTimer.bind(this);
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
        similey: <SentimentVerySatisfied className="similey" color="disabled" />
      });
    } else if (scored === 0) {
      this.setState({
        similey: (
          <SentimentVeryDissatisfied className="similey" color="disabled" />
        )
      });
    } else if (scored >= 60) {
      this.setState({
        similey: <SentimentSatisfied className="similey" color="disabled" />
      });
    } else if (scored < 60 && scored > 0) {
      this.setState({
        similey: <SentimentDissatisfied className="similey" color="disabled" />
      });
    }
  }

  quizTimer() {
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
  }

  timer() {
    this.time = setInterval(this.quizTimer, 1000);
  }

  render() {
    const { started, qstnNo, back, quizName, subQuizName } = this.props;
    const { correct, scored, min, sec } = this.state;
    return (
      <div>
        <div style={{ margin: "80px 3% 3% 3%" }}>
          {scored !== false ? (
            <div>
              <h2>
                Learning {quizName}({subQuizName})
              </h2>
              <br />
              <div className="resultDiv">
                <div>
                  <br />
                  <br />
                  <CircularProgress
                    size={200}
                    thickness={5}
                    variant="static"
                    value={scored}
                  />
                  {this.state.similey}
                  <div variant="headline">{scored} %</div>
                  <br />
                  <div variant="subheading">
                    Total Questions: {started.qArr.length}
                  </div>
                  <p variant="subheading">Correct: {correct}</p>
                </div>
                <button className="backBtn" onClick={() => back()}>
                  back
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div variant="title">
                {min}:{sec}
              </div>
              <br />

              <div className="qstnDiv">
                <FormControl
                  component="fieldset"
                  style={{
                    margin: "15px 15px 30px 15px",
                    fontFamily: "Quicksand"
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
              <button className="nextBtn" onClick={this.updating.bind(this)}>
                <NavigateNext />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default QuizList;
