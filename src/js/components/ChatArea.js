/**
 * Created by Administrator on 2015/7/10.
 */

import React, {PropTypes} from 'react';
import ChatMessages from './ChatMessages.js';
import ChatMessage from './ChatMessage.js';
import ChatTitleWrapper from './ChatTitleWrapper.js';
import actionContainer from '../services/actionContainer.js';
import ContentEditable from './ContentEditable.js';
import Emotion from './Emotion.js';

export default class ChatArea extends React.Component{

  constructor(){
      super();
      this.state= {
          content: ''
      }
  }
  render() {
      const {messages, name} = this.props.chat;
      const hasPerson = name && name.length;

      return (
          <div className="chat-area global-detail-area">
              <div className="chat-area-inner">
                  {hasPerson && <ChatTitleWrapper name={name}/>}


                  <div className="chat-content">
                      <ChatMessages messages={messages}/>
                  </div>
                  {hasPerson && <div className="chat-send">
                      <div className="chat-send-toolbar">
                        <span className="toolbar chat-send-toolbar-records">
                          <i className="icon-glyph-101"></i><span>聊天记录</span>
                        </span>
                          <i className="toolbar icon-glyph-10 active"></i>
                          <i className=" toolbar icon-glyph-118"></i>
                          <i className=" toolbar icon-glyph-207"></i>
                          <i className=" toolbar icon-app"></i>
                      </div>
                      <ContentEditable className="chat-send-content" onChange={::this.change}>{this.state.content}</ContentEditable>

                      <div className="chat-send-action clearfix">
                        <span className="chat-send-action-tip">
                        按Enter键发送消息
                        </span>
                          <span className="btn btn-default" onClick={::this.sendMessage}>发送</span>

                      </div>
                     <Emotion />
                  </div>}
              </div>
          </div>
      );
  }

  sendMessage(){
      let message = {avator:"/public/img/zhangqiuyan.jpg", id:2, name:"听说", info:'', timer: "17:02", me: true};
      message.info = this.state.content;
      actionContainer.get().sendMessage(message);

      this.setState({
          content:' '
      });
  }

  change(value){
      this.state.content = value;
  }

}



