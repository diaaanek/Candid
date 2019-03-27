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
              fontFamily: "Avenir"
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
</div>;
