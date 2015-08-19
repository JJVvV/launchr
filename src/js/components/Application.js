/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes } from 'react/addons.js';
import classnames from 'classnames';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux'
import * as launchrAction from '../actions/launchr.js';

import GlobalPanel from './GlobalPanel.js'
import actionContainer from '../services/actionContainer.js';
//const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import Slider from './Slider.js';
import EventDetail from './EventDetail.js';

@connect((state, prop) => ({
  chatData: state.chat,
  transitionKey: prop.location.pathname
}))

export default class Application extends React.Component{

  constructor(props, context){
    super(props, context);
  }

  render(){
    const { dispatch, chatData, children} = this.props;
    const actions = bindActionCreators(launchrAction, dispatch);
      actionContainer.set(actions);
    //const loading = this.props.blog.loading;
    //const loadingChild = loading ? <Loading /> : null;
    //const props = this.props;
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
        <Slider onCloseStart={::this.closeSliderStart} onCloseEnd={::this.closeSliderEnd}><EventDetail /></Slider>

      </div>
    );
  }

  closeSliderStart(){
    alert('close start');
  }

  closeSliderEnd(){
    alert('closed');
  }
}
//<Header isLogin={props.blog.user.isLogin} action={actions} />
//className={classnames({'loading-hidden': loading, 'loading-transition': !loading})}
//<ReactCSSTransitionGroup transitionName="page" transitionLeave={false} component="div">
//
//</ReactCSSTransitionGroup>