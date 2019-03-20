import React, { Component } from 'react';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
// import { sortObjects } from './utils';
import './Tags.css';

import InfoPanel from './InfoPanel'

class Tags extends Component {
  // handleClickTag(tag) {
  //   this.props.onClickTag(tag);
  // }

  renderTags() {
    const { tags } = this.props;

    if (tags == null) {
      return (
        <div className='Tags-loading'>

        </div>
      );
    }



    return (
      <List selectable ripple>
        <ListSubHeader caption='Tags' />

          <ListItem

          />
        )}
      </List>
    );
  }

  render() {
    return (
      <div className='Tags'>

      </div>
    );
  }
}

export default Tags;
