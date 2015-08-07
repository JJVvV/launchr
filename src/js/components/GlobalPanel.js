/**
 * Created by Administrator on 2015/7/10.
 */

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ArticleItem from './ArticleItem.js';
import shallowEqualScalar from 'redux/lib/utils/shallowEqualScalar'

export default class GlobalPanel extends React.Component{
  //componentWillMount(){
  //  const {params} = this.props;
  //  this.props.action.loadArticle(params.id);
  //}
  //
  //componentDidUpdate(preProps){
  //  this.getDetail(preProps);
  //}
  //
  //getDetail(preProps){
  //  const {params} = this.props;
  //  const preParams = preProps.params;
  //  if(!shallowEqualScalar(params, preParams)){
  //    this.props.action.loadArticle(params.id);
  //  }
  //}


  render(){
    //const {article, user} = this.props.blog;

    return (
        <div className="global-panel">
          <div className="global-panel-logo">logo</div>
          <div className="global-panel-item active icon-chat"><i className="circle">2</i></div>
          <div className="global-panel-item icon-contacts"></div>
          <div className="global-panel-item icon-app"></div>
        </div>
    );
  }
}



