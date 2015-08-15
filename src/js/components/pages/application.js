/**
 * Created by Administrator on 2015/7/10.
 */

import React from 'react';

import ArticleList from '../ArticleList.js';




import ApplicationList from '../ApplicationList.js';

import actionContainer from '../../services/actionContainer.js';


export default class ApplicationPage {


  componentDidMount(){
    //actionContainer.get().loadWorkList();
  }

  render(){
    const items = [{avator:"/public/img/jinmuyan.jpg", id:0, title:"审批", link: '/application/approval'},
      {avator:"/public/img/jinmuyan.jpg", id:1, title:"日程", link: '/application/calendar'}];



    //const {chatMessages, chatRoomName} = this.props.chatData;


    return (
        <section className="page-container">
          <div className="sub-panel">
            <div className="sub-panel-content">
              <ApplicationList items={items} />
            </div>
          </div>
          {this.props.children}
        </section>
    );
  }

  clickItem(id){
    //actionContainer.get().loadChatMessages(id);
    console.log('work-item\'s id:', id);
  }
}
