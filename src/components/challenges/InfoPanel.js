import React from 'react';
import Controls from './Controls';
import './CodeChallenges.css';


function InfoPanel(props) {
  return (
    <div className="info-panel">

      {props.description ? <p>{props.description}</p>  : null}
     <Controls
        handleSelectionChange={props.handleSelectionChange}
        problemIndex={props.problemIndex}
        problemSelected={props.problemSelected}
        selectedProblem={props.selectedProblem}

      />

    <button className="submit button">Show Solution</button>

    </div>
  );
}

export default InfoPanel;
