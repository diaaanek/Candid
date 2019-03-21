import React, { Component } from 'react';

import './Sidebar.css';

function Sidebar(props) {
    return (
      <React.Fragment>

      <div className='Sidebar'>
  <div className="ProblemList">

  {props.problemIndex.map((item) => {
    const key = Object.keys(item)[0];
    const value = item[key]
    return <button className="problemBtn"   key={value.split('.')[0]} value={value}>
      {key}
        </button>
      })}
      </div>
    </div>
      </React.Fragment>
    )
  }
export default Sidebar;
