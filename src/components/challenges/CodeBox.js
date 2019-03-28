import React from "react";
import "./CodeChallenges.css";
import "./Codebox.scss";

import SaveButton from "./SaveButton";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";

// const code = '//';

function CodeBox(props) {
  return (
    <div className="CodeBox">
      <div className="flashcards-page">
        <div className="flip-container">
          <br />
          <br />
          <CodeMirror
            value={props.body}
            options={{
              theme: "monokai",
              keyMap: "sublime",
              mode: "jsx",
              lineWrapping: true
            }}
          />
          <div className="buttonContainer">
            <button className="test button">Test </button>
            <button className="submit button">Reset </button>
            <button className="save button" onClick={props.body}>
              Show Solution{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeBox;
