/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes } from 'react/addons.js';
import classnames  from 'classnames';
import ToggleBtn from './ToggleBtn.js';
import Pikaday from 'pikaday';


export default class NewEvent extends React.Component {

  constructor(){
    super();

    this.state = {
      title:'',
      address:'',
      important: false,
      allDay: false,
      standbyTimerList: [{start:'', end: ''}],
      repeatCycle:1,
      remindTimer:2,
      note: ''
    }
    this.pikadayList = [];
  }

  componentDidMount(){
    this.pikadayList.push(this.initPikaday('eventTimer0', 0));
  }

  componentDidUpdate(){


  }

  componentWillUnmount(){

    this.pikadayList.forEach((pikaday) => {
      this.destroyPikaday(pikaday);
    });
  }

  render(){

    let standbyTimerList = this._getStandbyTimerList(this.state.standbyTimerList);
    return(
        <div className="new-meeting-box">
          <div className="meeting-box-header">
            <span>新建事件</span>
            <a href="javascript:void(0)" onClick={::this.props.onClose}><i className="icon-glyph-167"></i></a>
          </div>

          <div className="meeting-box-body">
            <div><input className="form-c" type="text" placeholder="填写事件标题" valueLink={this.linkState('title')} /></div>

            <div className="new-event-place pull-left">
              <div className="event-input-group">
                <input className="form-c event-input" type="text" placeholder="事件地址"  valueLink={this.linkState('address')} />

                <div className="input-group-event-addon">
                  <i className=" toolbar icon-glyph-207 "></i>
                </div>
              </div>
            </div>
            <div className="new-event-switch pull-left">
              <span>重要</span>
              <ToggleBtn on={false} style={{float:"right"}} className="demo-icon" onToggleBtnChange={::this._onToggleImportant} />
            </div>

            <p className="new-event-choose-time"><span>时间选择</span></p>

            <div className="attend-person-group">
              <div className="attend-person-group">
                <div className="new-event-time-title"><span>全天</span></div>
                <div className="new-event-time-group">

                  {standbyTimerList}
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
                );

  }

  _onToggleImportant(important){
    this.setState({
      important
    });
  }

  _onToggleAllDay(allDay){
    this.setState({
      allDay
    });
  }
  _getStandbyTimerList(list){
    return list.map((standby, index) => {
      if(index === 0){
        return  <div className="new-event-time-line" key={index}>
                    <ToggleBtn className="demo-icon new-event-time-line-header" on={false} onToggleBtnChange={::this._onToggleAllDay} />
                    <div className="input-group-wrapper">
                      <div className="input-group">
                        <div className="input-group-addon">
                          <i className=" toolbar icon-glyph-89 "></i>
                        </div>
                        <input className="form-c place-input" type="text" ref={'eventTimer' + index} value={standby} onChange={this._standbyTimerChange.bind(this, index)}  />
                        <i className="icon-glyph-102 btn-add" onClick={::this._addEventTimer}></i>
                      </div>
                    </div>
                  </div>
      }
      return <div className="new-event-time-line" key={index}>
                <span className="new-event-time-line-header">候补时间</span>
                <div className="input-group-wrapper">
                  <div className="input-group">
                    <div className="input-group-addon">
                      <i className="icon-glyph-89 "></i>
                    </div>
                    <input className="form-c place-input" type="text" ref={'eventTimer' + index} value={standby} onChange={this._standbyTimerChange.bind(this, index)} />
                    <i className="icon-glyph-120 btn-del" onClick={this._removeStandby.bind(this, index)}></i>
                  </div>
                </div>

              </div>


    });
  }
  _addEventTimer(){
    this.state.standbyTimerList.push('');
    let standbyTimerList = this.state.standbyTimerList;
        this.setState({
          standbyTimerList
    }, () => {
          let index = this.state.standbyTimerList.length - 1;
          this.pikadayList.push(this.initPikaday(`eventTimer${index}`, index));
        });


  }

  _removeStandby(index){
    let standbyTimerList = this.state.standbyTimerList;
    let destroyStandby = this.pikadayList.splice(index, 1)[0];
    standbyTimerList.splice(index, 1);
    this.destroyPikaday(destroyStandby);

    this.setState({
      standbyTimerList
    });


  }
  //closeSlide(){
  //  typeof this.props.onClose === 'function' && this.props.onClose();
  //}

  _standbyTimerChange(index, e){
    this.state.standbyTimerList[index] = e.target.value;
    let standbyTimerList = this.state.standbyTimerList;
    this.setState({
      standbyTimerList
    });
  }

  initPikaday(ref, index){
    return new Pikaday({
      field: React.findDOMNode(this.refs[ref]),
      onSelect: () => {

        let standbyTimerList = this.state.standbyTimerList;
        standbyTimerList[index] = React.findDOMNode(this.refs[ref]).value;
        this.setState({
          standbyTimerList
        });
        console.log(ref, index);
      }
    })
  }

  destroyPikaday(pikaday){
    pikaday.destroy();
  }

  _onConfirm(){

  }
}

Object.assign(NewEvent.prototype, React.addons.LinkedStateMixin);