import React from 'react';
import Controls from './Controls';
import './CodeChallenges.css';

function InfoPanel(props) {
  return (
    <div className="info-panel">
      {props.description ? <p>{props.description}</p> : null}
      <Controls
        handleSelectionChange={props.handleSelectionChange}
        handleFontChange={props.handleFontChange}
        problemIndex={props.problemIndex}
        problemSelected={props.problemSelected}
        selectedProblem={props.selectedProblem}
      />
    </div>
  );
}

export default InfoPanel;
