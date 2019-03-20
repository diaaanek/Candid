import React from 'react';
import './CodeChallenges.css';
import swal from 'sweetalert';

import Countdown from 'react-countdown-now';

const Completionist = () => {swal( "Time is up!" ,  "success" )}

function Whiteboard(props) {
  return (
    <div className={[
      'whiteboard'].join(' ')}>
      <h1>{props.problemSelected ? props.title : 'Coding Challenges'}
      </h1>

      <h2><Countdown date={Date.now() +   1000000}>
           <Completionist />
         </Countdown>⏰</h2>
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
