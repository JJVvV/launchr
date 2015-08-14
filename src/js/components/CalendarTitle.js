/**
 * Created by Administrator on 2015/7/10.
 */
/*
* application list item or people list item used in .sub-panel
 */

import React, {PropTypes} from 'react';
import classnames  from 'classnames';
import ChatRoom from './ChatRoom.js';

export default class ChatTitle extends React.Component{

  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    const {name, toggle, show} = this.props;
    return (
        <div className="calendar-title clearfix" onClick={toggle}>
          <div className="calendar-user">
            <div className="calendar-user-avator"><img src="/public/img/jinmuyan.jpg" alt="" width="40" height="40" /></div>
            <span className="calendar-user-name">Jerry Luo</span>
            <a className="calendar-user-change" href="#">更换</a>
          </div>
          <div className="calendar-action">
            <div className="btn-group ">
              <button className="btn btn-default">月</button>
              <button className="btn btn-default">周</button>
            </div>
            <button className="btn btn-default calendar-action-add"><i className="icon-glyph-166"></i>新增</button>
            <span className="icon-glyph-115 calendar-action-search"></span>
          </div>
          <div className="calendar-change-time">
            <div className="inner">
              <span className="prev icon-glyph-143"></span>
              <time>2015年8月</time>
              <span className="next icon-glyph-144"></span>
            </div>
          </div>

        </div>

    );
  }

  toggleTitle(){

  }
}



