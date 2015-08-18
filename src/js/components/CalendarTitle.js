/**
 * Created by Administrator on 2015/7/10.
 */
/*
* application list item or people list item used in .sub-panel
 */

import React, {PropTypes} from 'react';
import classnames  from 'classnames';
import ChatRoom from './ChatRoom.js';
import fullcalendarContainer from '../services/fullcalendarContainer.js';
import reduxContainer from '../services/reduxContainer.js';

export default class ChatTitle extends React.Component{

  constructor(){
    super();
    this.state = this.getTimer(new Date());
  }
  componentDidMount(){

  }

  componentWillUnMount(){

  }
  render(){
    const {name, toggle, show} = this.props;
    return (
        <div className="calendar-title clearfix" onClick={toggle}>
          <div className="calendar-user">
            <div className="calendar-user-avator avator"><img src="/public/img/zhangqiuyan.jpg" alt="" width="40" height="40" /></div>
            <span className="calendar-user-name">Jerry Luo</span>
            <a className="calendar-user-change" href="javascrit:;" onClick={::this.toggleUser}>更换</a>
          </div>
          <div className="calendar-action">
            <div className="btn-group ">
              <button className="btn btn-default" onClick={this.toggleView.bind(this, 'month')}>月</button>
              <button className="btn btn-default" onClick={this.toggleView.bind(this, 'basicWeek')}>周</button>
            </div>
            <button className="btn btn-default calendar-action-add"><i className="icon-glyph-166"></i>新增</button>
            <span className="icon-glyph-115 calendar-action-search"></span>
          </div>
          <div className="calendar-change-time">
            <div className="inner">
              <span className="prev icon-glyph-143" onClick={this.toggleMonth.bind(this, 'prev')}></span>
              <time>{this.state.year}年{this.state.month}月</time>
              <span className="next icon-glyph-144" onClick={this.toggleMonth.bind(this, 'next')}></span>
            </div>
          </div>

        </div>

    );
  }

  toggleMonth(handler){
    let $calendar = fullcalendarContainer.get();
    $calendar.fullCalendar(handler);
    let viewTimer = $calendar.fullCalendar( 'getDate' );
    this.setState(this.getTimer(viewTimer._d));
  }

  getTimer(timer){
    return {
      year: timer.getFullYear(),
      month: timer.getMonth() + 1
    }
  }
  toggleTitle(){

  }

  toggleUser(){

  }

  toggleView(viewName){
    fullcalendarContainer.get().fullCalendar( 'changeView', viewName);
  }
}



