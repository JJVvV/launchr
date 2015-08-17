/**
 * Created by Administrator on 2015/7/10.
 */
/*
* application list item or people list item used in .sub-panel
 */

import React, {PropTypes} from 'react';
import classnames  from 'classnames';
import Bubble from './Bubble.js';

export default class ChatMessage extends React.Component{


  render(){
    const {timer, avator, name, info, me} = this.props.message;
    return (
        <li className={classnames({'chat-message': true, me: me, you:!me})}>
          <p className="chat-message-time">
            <time>{timer}</time>
          </p>
          <img src={avator} alt="" className="chat-message-avator" width="40" height="40" />
          <div className="chat-message-content">
            {me ||
            <h4 className="chat-message-name">
              {name}
            </h4>}

            <Bubble right={me} info={info} />
          </div>
        </li>
    );
  }

}



