/**
 * Created by Administrator on 2015/7/10.
 */

import React from 'react';

import ArticleList from '../ArticleList.js';


import ChatArea from '../ChatArea.js';
import SubPanelHeader from '../SubPanelHeader.js';
import ThreadList from '../ThreadList.js';
import actionContainer from '../../services/actionContainer.js';


export default class Chat {


  componentDidMount(){
    actionContainer.get().loadThreadList();
  }

  render(){
    //const items = [{avator:"/public/img/zhangqiuyan.jpg", id:0, title:"公告", info:"我爱你再见", timer: "17:02"},
    //  {avator:"/public/img/zhangqiuyan.jpg", id:1, title:"公告", info:"我爱你再见", timer: "17:03"}];
    //


    const {threadList, chatMessages, chatRoomName} = this.props.chatData;
    return (
      <section className="page-container">
        <div className="sub-panel">
          <SubPanelHeader />
          <div className="sub-panel-content">
            <ThreadList items={threadList} clickItem={::this.clickItem} />
          </div>
        </div>
        <ChatArea chat={{messages: chatMessages, name:chatRoomName}} />
      </section>
    );
  }

  clickItem(id){
    actionContainer.get().loadChatMessages(id);
    console.log('thread-item\'s id:', id);
  }
}
