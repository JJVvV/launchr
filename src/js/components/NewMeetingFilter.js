/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes , Component} from 'react/addons.js';
import classnames  from 'classnames';
import PubSub from 'pubsub-js';

import {postNewEvent} from '../services/event.js';
import {REFRESH_EVENT, CHANGE_SLIDER, S} from '../constants/launchr.js';

let meeting;

export default class NewMeetingFilter extends Component{

  constructor(props){
    super();
    meeting = props.meeting;
  }


  render() {

    return (
        <div className="new-meeting-box">
          <div className="meeting-box-header">
            <span>新建会议</span>
          </div>

          <div className="meeting-box-body ">
            <div className=" attend-person-group">
              <div className="attend-title pull-left"><span>已选择</span>
              </div>
              <div className="attend-meeting-detail">
                <div className="meeting-detail-line">
                  <i className=" toolbar icon-glyph-89"></i>
                  <span>8月6日（周三） 9:00 ~ 12:00</span>
                  <span className="time">&nbsp;3小时</span>
                </div>
              </div>
            </div>


            <div className="meeting-place-nav new-meeting-place-nav">
            <span className="nav-box-active pull-left">
                会议室
            </span>
            <span className="nav-box-inactive">
                地址
            </span>
            </div>


              <div className="meeting-room-group">
                <div className="meeting-room-line">
                  <div className="meeting-room-box default"><span>2楼会议室A</span></div>
                  <div className="meeting-room-box default"><span>2楼会议室B</span></div>
                  <div className="meeting-room-box active"><span>3楼大会议室</span></div>
                  <div className="meeting-room-box inactive"><span>4楼会议室</span></div>
                </div>
                <div className="meeting-room-line">
                  <div className="meeting-room-box inactive"><span>5楼会议室A</span></div>
                  <div className="meeting-room-box inactive"><span>5楼会议室B</span></div>
                  <div className="meeting-room-box default"><span>5楼会议室C</span></div>
                  <div className="meeting-room-box default"><span>5楼会议室D</span></div>
                </div>
              </div>

            </div>


            <div className="meeting-box-footer">
              <span className="btn-comfirm" onClick={::this._onConfirm}>确认</span>
              <span className="btn-cancle" onClick={::this._onClose}>取消</span>
            </div>
          </div>
    )
  }

  _onClose(){

  }


  _onConfirm(){
    PubSub.publish(CHANGE_SLIDER, {type: S.MEETING, meeting});
    //postNewEvent(this.state).then((res) => {
    //  PubSub.publish('REFRESH_EVENT', res.data);
    //});
  }

  _onClose(){
    PubSub.publish(CHANGE_SLIDER, {type: S.MEETING});

  }
}


Object.assign(NewMeetingFilter.prototype, React.addons.LinkedStateMixin);