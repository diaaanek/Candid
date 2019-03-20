import React, { Component } from 'react';
import Tags from './Tags'
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className='Sidebar'>
        <Tags
          tags={this.props.tags}

        />
      </div>
    );
  }
}

export default Sidebar;
