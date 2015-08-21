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
import PubSub from 'pubsub-js';
import CalendarDropdown from './CalendarDropdown.js';

import {SLIEDER_ACTIVE, S} from '../constants/launchr.js';
import {sliderShow} from '../services/slider.js';

export default class ChatTitle extends React.Component{

  constructor(){
    super();
    this.state = this.getState();
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
            <div className="calendar-user-avator avator"><img src="/redux-launchr/public/img/zhangqiuyan.jpg" alt="" width="40" height="40" /></div>
            <span className="calendar-user-name">Jerry Luo</span>
            <a className="calendar-user-change" href="javascrit:;" onClick={::this.toggleUser} style={{marginRight: '20px'}}>更换</a>
            <a className="calendar-user-change" href="javascrit:;" onClick={::this._meetingDetail} style={{marginRight: '20px'}}>会议详情</a>
            <a className="calendar-user-change" href="javascrit:;" onClick={::this._eventDetail}>事件详情</a>
          </div>
          <div className="calendar-action">
            <div className="btn-group ">
              <button className={classnames({'btn': true, 'btn-default': true, 'active': this.state.showMonth})} onClick={this.toggleView.bind(this, 'month')}>月</button>
              <button className={classnames({'btn': true, 'btn-default': true, 'active': !this.state.showMonth})} onClick={this.toggleView.bind(this, 'basicWeek')}>周</button>
            </div>
           <CalendarDropdown />

            <span className="icon-glyph-115 calendar-action-search"  onClick={::this.showSlider}></span>
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
  toggleDropdown(){

    this.setState({
      showDropdown:!this.state.showDropdown
    });
  }
  toggleMonth(handler){
    let $calendar = fullcalendarContainer.get();
    $calendar.fullCalendar(handler);
    let viewTimer = $calendar.fullCalendar( 'getDate' );
    this.setState(this.getTimer(viewTimer._d));
  }
  showMonth(show){
    return {
      showMonth: show
    }
  }
  getTimer(timer){
    return {
      year: timer.getFullYear(),
      month: timer.getMonth() + 1
    }
  }
  getState(){
    var timer = this.getTimer(new Date());
    let showMonth = this.showMonth(true);
    return {...timer, ...showMonth, showDropdown: false};
  }
  toggleTitle(){

  }

  toggleUser(){

  }

  toggleView(viewName){
    let showMonth = !this.state.showMonth;
    this.setState(this.showMonth(showMonth));
    fullcalendarContainer.get().fullCalendar( 'changeView', viewName);
  }
  showEventDetail(eventType, data){
  }
  showSlider(){
    PubSub.publish(SLIEDER_ACTIVE);
  }

  _meetingDetail(){
    sliderShow({type:S.MEETING_DETAIL, meeting:{id:'haha'}});
  }
  _eventDetail(){
    sliderShow({type:S.EVENT_DETAIL, event:{id:'haha'}});
  }

}



