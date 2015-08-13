/**
 * Created by Administrator on 2015/7/10.
 */

import React from 'react';

import ArticleList from '../ArticleList.js';


export default class Index {


  render(){

    return (
      <section className="page-container">
        <div className="sub-panel">
          <header className="sub-panel-header">
            <span className="btn-add icon-glyph-102"></span>

            <div className="form-feedback work-search left">
              <input type="search" className="form-c" placeholder="搜索" />
              <span className="feedback  icon-glyph-115"></span>
            </div>
          </header>

          <div className="sub-panel-content">
            <div className="work-list">
              <div className="work-item">
                <time className="work-item-time">17:02</time>
                <div className="work-item-avator">
                  <img src="./public/img/jinmuyan.jpg" alt="" width="40" height="40" />
                </div>
                <div className="work-item-info">
                  <h4>公告</h4>
                  <p>我爱你再见</p>
                </div>

              </div>
              <div className="work-item active">
                <time className="work-item-time">17:02</time>
                <div className="work-item-avator">
                  <img src="./public/img/jinmuyan.jpg" alt="" width="40" height="40" />
                </div>
                <div className="work-item-info">
                  <h4>SkyeFeng</h4>
                  <p>我爱你再见</p>
                </div>

              </div>
              <div className="work-item">
                <time className="work-item-time">17:02</time>
                <div className="work-item-avator">
                  <img src="./public/img/jinmuyan.jpg" alt="" width="40" height="40" />
                </div>
                <div className="work-item-info">
                  <h4>Zeus组</h4>
                  <p>我爱你再见</p>
                </div>

              </div>
              <div className="work-item">
                <time className="work-item-time">17:02</time>
                <div className="work-item-avator">
                  <img src="./public/img/jinmuyan.jpg" alt="" width="40" height="40" />
                </div>
                <div className="work-item-info">
                  <h4>Zeus组</h4>
                  <p>我爱你再见</p>
                </div>

              </div>
              <div className="work-item">
                <time className="work-item-time">17:02</time>
                <div className="work-item-avator">
                  <img src="./public/img/jinmuyan.jpg" alt="" width="40" height="40" />
                </div>
                <div className="work-item-info">
                  <h4>Zeus组</h4>
                  <p>我爱你再见</p>
                </div>

              </div>



            </div>
          </div>

        </div>
        <div className="chat-area">
          <div className="chat-area-inner">
            <div className="chat-title">
              <span className="chat-title-name">Alex Liu</span>
            </div>
            <div className="chat-room" style={{display:'none'}}>
              <div className="chat-room-inner">
                <div className="chat-room-search">
                  <label for="chat-room-search"></label>
                  <input type="search" id="chat-room-search" />
                </div>
                <div className="chat-room-members clearfix">
                  <div className="chat-room-members-add"></div>
                  <div className="chat-room-members-minus"></div>
                  <div className="chat-room-member">
                    <img src="./public/img/jinmuyan.jpg" alt="" width="47" height="47" />
                  </div>
                  <div className="chat-room-member">
                    <img src="./public/img/jinmuyan.jpg" alt="" width="47" height="47" />
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-content">
              <div className="chat-messages">
                <div className="chat-message you">
                  <p className="chat-message-time">
                    <time>7/29 10:30</time>
                  </p>
                  <img src="./public/img/zhangqiuyan.jpg" alt="" className="chat-message-avator" width="40" height="40" />
                  <div className="chat-message-content">
                    <h4 className="chat-message-name">
                      听说
                    </h4>
                    <div className="bubble left">
                      <pre>我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见</pre>
                      <img src="" alt="" className="message-loading" />
                      <i className="icon-star"></i>
                      <i className="icon-fail"></i>
                    </div>
                  </div>
                </div>


                <div className="chat-message me">
                  <p className="chat-message-time">
                    <time>10:30</time>
                  </p>
                  <img src="./public/img/zhangqiuyan.jpg" alt="" className="chat-message-avator" width="40" height="40" />
                  <div className="chat-message-content">
                    <div className="bubble right">
                      <pre>我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见我爱你再见</pre>
                      <i src="" alt="" className="icon-reload animate-rotate"></i>
                      <i className="icon-fail"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-send">
              <div className="chat-send-toolbar">
                <span className="toolbar chat-send-toolbar-records">
                  <i className="icon-glyph-101"></i><span>聊天记录</span>
                </span>
                <i className="toolbar icon-glyph-10 active"></i>
                <i className=" toolbar icon-glyph-118"></i>
                <i className=" toolbar icon-glyph-207"></i>
                <i className=" toolbar icon-app"></i>
              </div>
              <div className="chat-send-content" contenteditable="true">

              </div>
              <div className="chat-send-action clearfix">
                <span className="chat-send-action-tip">
                  按Enter键发送消息
                </span>
                <span  className="btn btn-default">发送</span>

              </div>
              <div className="emotion">
                <div className="emotion-header">
                  <div className="emotion-header-inner">
                    <span className="emotion-header-item"></span>
                    <span className="emotion-header-item"></span>
                    <span className="emotion-header-item"></span>
                  </div>
                </div>
                <div className="emotion-bd">
                  <div className="emotion-bd-item">

                  </div>
                  <div className="emotion-bd-item"></div>
                  <div className="emotion-bd-item">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
