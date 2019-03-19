import React from 'react';
import './CodeChallenges.css';

function Whiteboard(props) {
  return (
    <div className={[
      'whiteboard',
      props.markerFont ? 'marker-font' : null
      ].join(' ')}>
      <h1>{props.problemSelected ? props.title : 'Coding Challenges'}</h1>
      {props.problemSelected ? (
        <pre>
          <code id="codeArea" className="javascript">
            {props.body}
          </code>
        </pre>
      ) : (
        <p>Please select a problem from list below</p>
      )}
    </div>
  );
}

export default Whiteboard;
