import React from 'react';
import './CodeChallenges.css';
import './Codebox.scss'

import Card from 'react-toolbox/lib/card/Card';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Button from 'react-toolbox/lib/button/Button';

function CodeBox(props) {
  return (
    <div className="CodeBox">
        <h1>CodeBox / CodeMirror Here </h1>
        <textarea></textarea>
          <div className="flashcards-page">
          				<div className="instructions">
          					<h1>Hover over flashcard to flip from term to definition</h1>
          				</div>
          				<div className="flip-container" >
          					<div className="flipper">
          						<div className="front">
          							Front
          						</div>
          						<div className="back">
          							Back
          						</div>
          					</div>
          				</div>

          			</div>
    </div>
  );
}

export default CodeBox;
