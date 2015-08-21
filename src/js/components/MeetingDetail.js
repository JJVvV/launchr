/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes , Component} from 'react/addons.js';
import classnames  from 'classnames';
import PubSub from 'pubsub-js';
import request from 'reqwest';
import {postNewEvent} from '../services/event.js';
import {REFRESH_EVENT, CHANGE_SLIDER, S} from '../constants/launchr.js';



export default class MeetingDetail extends Component{

  constructor(props){
    super(props);

    this.state =  {
      title:'与那些花儿',
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
      content:'我爱你再见'

    }
  }

  componentDidMount(){
   this._requestDetail(this.props.meeting);
  }
  render() {
    let mustMemberList = this._geMemberList(this.state.must, 'must');
    let optionalList = this._geMemberList(this.state.optional, 'optional');
    const {title, content} = this.state;
    return (
        <div className="new-meeting-box">
          <div className="meeting-detail-header">
            <span>会议详情</span>
            <i className="icon-glyph-167 pull-right" onClick={::this.props.onClose}></i>
          </div>

          <div className="meeting-box-body">
            <p className="meeting-detail-title">{title}<span className="pull-right">重要</span><span className="circle pull-right"></span></p>

            <div className="meeting-place-detail-line">
              <div className="meeting-detail-group" >
                <div className="meeting-detail-line" >
                  <i className=" toolbar icon-glyph-89"></i>
                  <span>8月10日（周三） 9:00 ~ 10:00</span>
                  <span className="time">&nbsp;1小时</span>
                </div>
                <div className="repeat-line">
                </div>
                <div className="meeting-detail-line" >
                  <i className=" toolbar icon-glyph-207"></i>
                  <span>三楼大会议室     </span>
                </div>
              </div>



            </div>
            <div className="attend-person-group">
              <div className="attend-person-line">
                <span className="attend-title">必须出席人员</span>
                <div className="attend-meeting-avator">
                  <div className="chat-room-member"><img src="./public/img/jinmuyan.jpg" alt="" width="40" height="40"/></div>
                  <div className="chat-room-member"><img src="./public/img/zhangqiuyan.jpg" alt="" width="40" height="40"/></div>
                  <div className="chat-room-member "><img src="./public/img/jinmuyan.jpg" alt="" width="40" height="40"/></div>
                  <div className="chat-room-member "><img src="./public/img/zhangqiuyan.jpg" alt="" width="40" height="40"/></div>
                </div>
              </div>
              <div className="attend-person-line">
                <span className="attend-title">非必须出席人员</span>
                <div className="attend-meeting-avator">
                  <div className="chat-room-member"><img src="./public/img/jinmuyan.jpg" alt="" width="40" height="40"/></div>
                  <div className="chat-room-member"><img src="./public/img/zhangqiuyan.jpg" alt="" width="40" height="40"/></div>
                  <div className="chat-room-member "><img src="./public/img/jinmuyan.jpg" alt="" width="40" height="40"/></div>
                  <div className="chat-room-member "><img src="./public/img/zhangqiuyan.jpg" alt="" width="40" height="40"/></div>
                </div>
              </div>
            </div>

            <p className="meeting-detail-topic">{content}</p>

            <div className="attend-person-group">
              <div className="attend-meeting-btn-group">
                <a className="btn btn-default btn-info" onClick={::this._takePartIn}>参加</a>
                <a className="btn btn-default btn-warning" onClick={::this._reject}>拒绝</a>
              </div>
            </div>

            <div className="meeting-chat-group">
              <div className="meeting-chat-line">
                <div className="meeting-chat-menber" >
                  <span>Jerry Luob:</span>
                </div>
                <div className="meeting-chat-detail" >
                  <span>看似轻松的路，往往很拥挤，而花了一些力气，却能更快到达目的地。</span>
                </div>
                <div className="meeting-chat-time" >3分钟前</div>
              </div>
              <div className="meeting-chat-line">
                <div className="meeting-chat-menber" >
                  <span>Jerry Luo:</span>
                </div>
                <div className="meeting-chat-detail" >
                  <i className=" toolbar icon-glyph-118"></i>
                  <span>项目产品管理.txt</span>
                </div>
                <div className="meeting-chat-time" >3分钟前</div>
              </div>
            </div>

            <div className="meeting-group-wrapper">
              <div className="input-group">
                <div className="input-group-addon">
                  <i className=" toolbar icon-glyph-118"></i>
                </div>
                <input className="form-c comment-input" type="text" />
                <div className="input-submit-btm">
                  <span>评论</span>
                </div>
              </div>
            </div>

          </div>

          <div className="meeting-detail-footer-btn">
            <a><i className=" toolbar icon-glyph-71"></i></a>
            <a><i className=" toolbar icon-glyph-77"></i></a>
            <a><i className=" demo-icon icon-trash-empty"></i></a>
          </div>



        </div>

    )
  }

  _requestDetail(meeting){
    console.log(this.props.meeting);
    request({
      url:''
    });
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

  _takePartIn(){
    console.log('take part in');
  }

  _reject(){
    console.log('reject');
  }


}
function aa(){
  return (aa
    //<div className="new-meeting-box">
    //  <div className="meeting-detail-header">
    //    <span>会议详情</span>
    //
    //    <i className="icon-glyph-167 pull-right" onClick={::this.props.onClose}></i>
    //
    //  </div>
    //
    //  <div className="meeting-box-body">
    //    <p className="meeting-detail-title">与王先生在公司楼下星爸爸见面</p>
    //
    //    <div className="meeting-detail-group" >
    //      <div className="meeting-detail-line" >
    //        <i className=" toolbar icon-glyph-89"></i>
    //        <span>8月10日（周三） 9:00 ~ 10:00</span>
    //        <span className="time">&nbsp;1小时</span>
    //      </div>
    //      <div className="repeat-line">
    //        <i className=" toolbar icon-glyph-123 "></i>
    //        <span>每周重复</span>
    //      </div>
    //    </div>
    //  </div>
    //
    //  <img src="public/img/img-map.png" width="100%" />
    //
    //  <div className="meeting-box-body">
    //    <div className="meeting-place-detail-line">
    //      <span>浙江省杭州市西湖区凤起路238号</span>
    //      <i className=" toolbar icon-glyph-207 pull-right"></i>
    //    </div>
    //    <div className="attend-person-group">
    //      <div className="attend-person-line">
    //        <span className="attend-title">必须出席人员</span>
    //        <div className="attend-meeting-avator">
    //          <div className="chat-room-member"><img src="./public/img/jinmuyan.jpg" alt="" width="40" height="40"/><i className="demo-icon icon-glyph-195"></i></div>
    //          <div className="chat-room-member"><img src="./public/img/zhangqiuyan.jpg" alt="" width="40" height="40"/><i className="demo-icon icon-glyph-195"></i></div>
    //          <div className="chat-room-member inactive"><img src="./public/img/jinmuyan.jpg" alt="" width="40" height="40"/></div>
    //          <div className="chat-room-member inactive"><img src="./public/img/zhangqiuyan.jpg" alt="" width="40" height="40"/></div>
    //        </div>
    //      </div>
    //      <div className="attend-person-line">
    //        <span className="attend-title">非必须出席人员</span>
    //        <div className="attend-meeting-avator">
    //          <div className="chat-room-member"><img src="./public/img/jinmuyan.jpg" alt="" width="40" height="40"/><i className="demo-icon icon-glyph-195"></i></div>
    //          <div className="chat-room-member"><img src="./public/img/zhangqiuyan.jpg" alt="" width="40" height="40"/><i className="demo-icon icon-glyph-195"></i></div>
    //          <div className="chat-room-member inactive"><img src="./public/img/jinmuyan.jpg" alt="" width="40" height="40"/></div>
    //          <div className="chat-room-member inactive"><img src="./public/img/zhangqiuyan.jpg" alt="" width="40" height="40"/></div>
    //        </div>
    //      </div>
    //    </div>
    //
    //    <p className="meeting-detail-topic">在如今这个开发布会，拿着 PPT 画大饼，巧舌如簧骗投资屡见不鲜的年代，如果有哪家初创公司五年来一直在拒绝融资，那他一定是疯了。</p>
    //
    //    <div className="attend-meeting-btn-group">
    //      <a className="btn btn-default btn-info">参加</a>
    //      <a className="btn btn-default btn-warning">拒绝</a>
    //    </div>
    //  </div>
    //
    //  <div className="meeting-detail-footer-btn">
    //    <a><i className=" toolbar icon-glyph-71"></i></a>
    //    <a><i className=" toolbar icon-glyph-77"></i></a>
    //    <a><i className=" demo-icon icon-trash-empty"></i></a>
    //  </div>
    //
    //
    //</div>

  );
}

Object.assign(MeetingDetail.prototype, React.addons.LinkedStateMixin);