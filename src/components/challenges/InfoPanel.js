import React from "react";
import Controls from "./Controls";
import "./CodeChallenges.css";
import CodeBox from "./CodeBox";

function InfoPanel(props) {
  return (
    <div className="info-panel">
      {props.title ? (
        <h1>{props.title}</h1>
      ) : (
        <div className="info-bx">
          <img src="https://res.cloudinary.com/dxrvvjvpf/image/upload/c_scale,w_385/v1552589882/laptop.png" />
          <h1>Click a problem on the left to get started!</h1>
        </div>
      )}
      {props.description ? <p>{props.description}</p> : null}
      {/*<Controls
        handleSelectionChange={props.handleSelectionChange}
        problemIndex={props.problemIndex}
        problemSelected={props.problemSelected}
        selectedProblem={props.selectedProblem}

      <CodeBox
        handleSelectionChange={props.handleSelectionChange}
        problemIndex={props.problemIndex}
        problemSelected={props.problemSelected}
        selectedProblem={props.selectedProblem}
      />*/}
    </div>
  );
}

export default InfoPanel;
