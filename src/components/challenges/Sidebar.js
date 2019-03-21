import React, { Component } from "react";

import "./Sidebar.css";

//Conditionally render problems based on list

function Sidebar(props) {
  return (
    <div className="Sidebar">
      <div className="ProblemList">
        {props.problemIndex.map(item => {
          const key = Object.keys(item)[0];
          const value = item[key];
          return (
            <button
              className="problemBtn"
              key={value.split(".")[0]}
              value={value}
              onClick={props.handleSelectionChange}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Sidebar;
