/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes } from 'react/addons.js';
import classnames from 'classnames';
import { connect } from 'redux/react'
import { bindActionCreators } from 'redux'
import * as articlesAction from '../actions/article1.js';

import GlobalPanel from './GlobalPanel.js'

//const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

@connect((state, prop) => ({
  blog: state.article,
  transitionKey: prop.location.pathname
}))
export default class Application extends React.Component{

  constructor(props, context){
    super(props, context);
  }

  render(){
    const { dispatch } = this.props;
    const actions = bindActionCreators(articlesAction, dispatch);

    //const loading = this.props.blog.loading;
    //const loadingChild = loading ? <Loading /> : null;
    const props = this.props;
    return (
      <div id="layout">
          <div className="container">
            <GlobalPanel />
            {React.cloneElement(
                this.props.children,
                {
                  action: actions,
                  ...props
                }
            )}


          </div>


      </div>
    );
  }
}
//<Header isLogin={props.blog.user.isLogin} action={actions} />
//className={classnames({'loading-hidden': loading, 'loading-transition': !loading})}
//<ReactCSSTransitionGroup transitionName="page" transitionLeave={false} component="div">
//
//</ReactCSSTransitionGroup>