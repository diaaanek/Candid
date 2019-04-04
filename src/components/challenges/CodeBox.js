import React from "react";
import "./CodeChallenges.css";

import SaveButton from "./SaveButton";
// import { Controlled as CodeMirror } from "react-codemirror2";
import CodeMirror from "@uiw/react-codemirror";

import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";
require("codemirror/addon/selection/active-line");
require("codemirror/addon/edit/closebrackets");
require("codemirror/addon/edit/matchtags");

// const code = '//';

function CodeBox(props) {
  return (
    <div className="CodeBox">
      <div className="codebox-page">
        <div className="codebox-container">
          <br />
          <br />
          <CodeMirror
            value={props.codeBoxvalue}
            options={{
              className: "editor",
              defaultValue: "null",
              theme: "monokai",
              keyMap: "sublime",
              mode: "jsx",
              matchBrackets: true,
              showCursorWhenSelecting: true,
              autoCloseBrackets: true,
              styleSelectedText: true,
              lineWrapping: true
            }}
          />
          <div className="buttonContainer">
            <button className="test button">Test </button>
            <button className="submit button">Reset </button>

            <button className="save button" onClick={props.handleInputChange}>
              Show Solution{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeBox;
