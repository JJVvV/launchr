/**
 * Created by Administrator on 2015/7/10.
 */
/*
* application list item or people list item used in .sub-panel
 */

import React, {PropTypes} from 'react';
import classnames  from 'classnames';
import ChatRoom from './ChatRoom.js';
import ChatTitle from './ChatTitle.js';

export default class ChatTitleWrapper extends React.Component{

  constructor(){
    super();
    this.state = {
      show:false
    }
  }

  render(){
    const {name} = this.props;
    return (
        <div>
          <ChatTitle name={name} toggle={::this.toggleTitle} show={this.state.show} />
          <ChatRoom show={this.state.show} />
        </div>

    );
  }

  toggleTitle(){
    const show = this.state.show;
    this.setState({
      show: !show
    });
  }
}



