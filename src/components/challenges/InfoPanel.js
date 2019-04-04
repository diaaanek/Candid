import React from "react";

import "./CodeChallenges.css";

function InfoPanel(props) {
  return (
    <div className="info-panel">
      {props.title ? (
        <h1 style={{ color: "black" }}>{props.title}</h1>
      ) : (
        <div className="info-bx">
          <img
            src="https://res.cloudinary.com/dxrvvjvpf/image/upload/c_scale,w_385/v1552589882/laptop.png"
            alt="laptop"
          />
          <h1 style={{ color: "#1b1b1b" }}>
            Click a problem on the left to get started!
          </h1>
        </div>
      )}
      {props.description ? <p>{props.description}</p> : null}
      {/*    <Controls
        handleSelectionChange={props.handleSelectionChange}
        problemIndex={props.problemIndex}
        problemSelected={props.problemSelected}
        selectedProblem={props.selectedProblem}
      />
*/}
    </div>
  );
}

export default InfoPanel;
//
//
// {props.problemSelected ? (
//   <pre>
//     <code id="codeArea" className="javascript">
//       {props.description}
//     </code>
//   </pre>
// ) : (
//   <p>Please select a problem from list below</p>
//
// )}
