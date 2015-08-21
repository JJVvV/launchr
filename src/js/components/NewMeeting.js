/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes , Component} from 'react/addons.js';
import classnames  from 'classnames';
import PubSub from 'pubsub-js';

import {postNewEvent} from '../services/event.js';
import {REFRESH_EVENT, CHANGE_SLIDER, S} from '../constants/launchr.js';



export default class NewMeeting extends Component{

  constructor(props){
    super();

    this.state = props.meeting || {
      title:'title',
      must:[
        {
          avator:'./public/img/jinmuyan.jpg',
          id:0
        }
      ],
      optional:[
        {
          avator:'./public/img/jinmuyan.jpg',
          id:0
        },
        {
          avator:'./public/img/zhangqiuyan.jpg',
          id:1
        }
      ],
      meetingRoom:'',
      chosenTimer:'',

      repeatCycle:1,
      remindTimer:2,
      note: ''
    }
  }

  render() {

    let mustMemberList = this._geMemberList(this.state.must, 'must');
    let optionalList = this._geMemberList(this.state.optional, 'optional');
    return (
        <div className="new-meeting-box">
          <div className="meeting-box-header">
            <span>新建会议</span>
            <a href="javascript:void(0)" onClick={::this.props.onClose}><i className="icon-glyph-167"></i></a>
          </div>

          <div className="meeting-box-body">
            <div><input className="form-c " type="text" placeholder="填写会议标题"  valueLink={this.linkState('title')} /></div>
            <div className="attend-person-group">
              <div className="attend-person-line">
                <span className="attend-title">必须出席人员</span>

                <div className="attend-meeting-avator">
                  {mustMemberList}
                  <div className="chat-room-members-add icon-glyph-1"></div>
                </div>
              </div>
                  <div className="attend-person-line">
                    <span className="attend-title">非必须出席人员</span>

                    <div className="attend-meeting-avator" >
                      {optionalList}
                          <div className="chat-room-members-add icon-glyph-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="attend-person-group">
                      <div className="attend-person-line meeting-line">
                        <span className="meeting-title">会议时间以及地点</span>
                        <a className="btn btn-default btn-info" onClick={::this._openMeetingFilter}>进入筛选</a>
                      </div>
                    </div>
                    <div className="attend-person-group">
                      <div className="meeting-line">
                        <div className="attend-title pull-left"><span>会议时间以及地点</span>

                          <div className="attend-detail" onClick={::this._openMeetingFilter}>重新选择</div>
                        </div>
                        <div className="attend-meeting-detail">
                          <div className="meeting-detail-line">
                            <i className=" toolbar icon-glyph-89"></i>
                            <span>8月10日（周三） 9:00 ~ 10:00</span>
                            <span className="time">&nbsp;1小时</span>
                          </div>
                          <div className="meeting-detail-line">
                            <i className=" toolbar icon-glyph-207 "></i>
                            <span>三楼大会议室</span>
                          </div>
                        </div>
                      </div>
                    </div>


                      <select className="form-c" name="" defaultValue={this.state.repeatCycle} valueLink={this.linkState('repeatCycle')}>
                        <option value="0">重复周期</option>
                        <option value="1">重复周期1</option>
                        <option value="2">重复周期2</option>
                      </select>
                      <select className="form-c pull-right" name="" defaultValue={this.state.remindTimer} valueLink={this.linkState('remindTimer')}>
                        <option value="0">提醒时间</option>
                        <option value="1">提醒时间1</option>
                        <option value="2">提醒时间2</option>
                      </select>
                      <textarea className="form-c" name="" cols="30" rows="2" placeholder="备注" valueLink={this.linkState('note')}></textarea>

                  </div>


          <div className="meeting-box-footer">
            <span className="btn-comfirm" onClick={::this._onConfirm}>确认</span>
            <span className="btn-cancle" onClick={::this.props.onClose}>取消</span>
          </div>
                </div>
    )
  }

  _geMemberList(memberList, type){
    return memberList.map((member) => {
      return (
          <div className="chat-room-member">
            <img src={member.avator} alt="" width="40" height="40" />
            <i className="icon-glyph-192 circle" onClick={this._removeMember.bind(this, member.id, type)}></i>
          </div>
      );
    });
  }

  _removeMember(id, type){ //type为出席人员类型：必须出席或者非必须出席
    let memberList = this.state[type];
    if(!memberList) return;

    memberList = memberList.filter((member) =>(
      member.id !== id
    ));
    this.setState({
      [type]: memberList
    });
  }


  _onConfirm(){
    this.props.onClose();
    postNewEvent(this.state).then((res) => {
      PubSub.publish(REFRESH_EVENT, res.data);
    });
  }

  _openMeetingFilter(){
    PubSub.publish(CHANGE_SLIDER, {type: S.MEETING_FILTER, meeting:this.state});
  }
}


Object.assign(NewMeeting.prototype, React.addons.LinkedStateMixin);