/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes } from 'react/addons.js';
import classnames from 'classnames';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux'
import PubSub from 'pubsub-js';
import * as launchrAction from '../actions/launchr.js';
import GlobalPanel from './GlobalPanel.js'
import actionContainer from '../services/actionContainer.js';
//const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import Slider from './Slider.js';
import EventDetail from './EventDetail.js';
import getSliderContent from '../services/sliderContent.js';


import $ from 'jquery';

import {CHANGE_SLIDER, S} from '../constants/launchr.js';

@connect((state, prop) => ({
  chatData: state.chat,
  transitionKey: prop.location.pathname
}))



export default class Application extends React.Component{

  constructor(props, context){
    super(props, context);
    this.state = {
      child: ''
    }

  }
  componentWillMount(){
    const { dispatch, chatData, children} = this.props;
    const actions = bindActionCreators(launchrAction, dispatch);
    actionContainer.set(actions);

    actions.loadThreadList().then(res=>{actions.loadLongPoll();});
  }
  componentDidMount(){
    this.unbindChangeSlide = PubSub.subscribe(CHANGE_SLIDER, ::this.changeSlide);
    actionContainer.get().loadThreadList().then((aa) => {

    });
  }
  componentWillUnMount(){
    PubSub.unsubscribe(this.unbindChangeSlide);
  }
  changeSlide(eventName, data){
    this.setState({
      child: data
    });
  }
  render(){
    const { dispatch, chatData, children} = this.props;
    const actions = bindActionCreators(launchrAction, dispatch);
    let sideChild = this.getChild(this.state.child);

    actionContainer.set(actions);


    return (
      <div className="container">
          <GlobalPanel />
          {React.cloneElement(
            children,
            {
              action: actions,
              chatData
            }
          )}
        <Slider width="520px" onCloseStart={::this.closeSliderStart} onCloseEnd={::this.closeSliderEnd}>{sideChild}</Slider>

      </div>
    );
  }

  closeSliderStart(){
    console.log('close start');
  }

  closeSliderEnd(){
    console.log('closed');
  }

  getChild(data){ //通过data 将数据传入子元素进行初始化
    return getSliderContent(data);
  }
}
