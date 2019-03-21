import React from "react";
import Controls from "./Controls";
import "./CodeChallenges.css";

function InfoPanel(props) {
  return (
    <div className="info-panel">
      {props.title ? (
        <h1>{props.title}</h1>
      ) : (
        <h1>Click a problem on the left to get started!</h1>
      )}
      {props.description ? <p>{props.description}</p> : null}
      {/*<Controls
        handleSelectionChange={props.handleSelectionChange}
        problemIndex={props.problemIndex}
        problemSelected={props.problemSelected}
        selectedProblem={props.selectedProblem}
        */}
    </div>
  );
}

export default InfoPanel;
