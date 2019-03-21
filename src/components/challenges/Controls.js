import React from "react";
import "./CodeChallenges.css";

// Changing code challenge problems
// SELECT DROP DOWN
function Controls(props) {
  return (
    <div className="controls">
      <select
        value={props.selectedProblem}
        onChange={props.handleSelectionChange}
      >
        {props.problemSelected ? null : (
          <option value="default">Pick your challenge!</option>
        )}
        {props.problemIndex.map(item => {
          const key = Object.keys(item)[0];
          const value = item[key];
          return (
            <option key={value.split(".")[0]} value={value}>
              {key}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Controls;
