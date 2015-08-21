/**
 * Created by Administrator on 2015/7/10.
 */

import React, {PropTypes} from 'react';
import ChatMessage from './ChatMessage.js';


export default class ChatMessages extends React.Component{

  render(){
    const {messages} = this.props;

    return (
        <ul className="chat-messages">
          {this.renderItems(messages)}
        </ul>
    );
  }


  renderItems(messages){

    return messages.map(message =>(
        <ChatMessage message={message} key={message.id} />
    ));
  }
}



