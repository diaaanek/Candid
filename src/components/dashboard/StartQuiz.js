import React, { Component } from "react";

import Sidebar from "./Sidebar.css";
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
      <div className="quizContainer">
        <aside className="sidebar">
          <h1>
            {" "}
            Learning
            {" " + quizName}
          </h1>
          <img
            src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1553652549/picc.png"
            style={{ height: "190px", width: "225px" }}
          />
          <h2>
            Time Remaining: {min} : {sec}
          </h2>

          <CircularProgress
            size={200}
            thickness={5}
            variant="static"
            value={25}
          />
        </aside>
        <div id="main">
          <div className="sub">
            <div className="resultDiv">
              <br />
              <br />

              <CircularProgress
                size={300}
                thickness={5}
                variant="static"
                value={scored}
              />
            </div>
            <p> Correct: {correct}</p>
            <button className="backBtn" onClick={() => back()}>
              {" "}
              Go back
            </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default QuizList;
