import React from 'react';
import './CodeChallenges.css';
import './Codebox.scss'

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

const code = '//Insert code here';




// import Card from 'react-toolbox/lib/card/Card';
// import CardText from 'react-toolbox/lib/card/CardText';
// import CardActions from 'react-toolbox/lib/card/CardActions';
// import Button from 'react-toolbox/lib/button/Button';

function CodeBox(props) {
  return (

    <div className="CodeBox">

          <div className="flashcards-page">

          				<div className="instructions">
                    <h1>CodeBox / CodeMirror Component Here </h1>

          				</div>
          				<div className="flip-container" >
                    <CodeMirror
                      value={code}

                      options={{
                        theme: 'monokai',
                        keyMap: 'sublime',
                        mode: 'jsx',
                      }}
                    />
                  <div className="buttonContainer">
                  <button className="submit button">Submit </button>
                  <button className="test button">Test </button>
                  
                  </div>
                  {/*<div className="flipper">
          						<div className="front">
          						<textarea>Front code goes heree</textarea>
          						</div>
          						<div className="back">
          							Back
          						</div>
          					</div>
          				 */}
                    </div>
          		</div>
    </div>
  );
}

export default CodeBox;
