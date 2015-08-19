/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes } from 'react'
import classnames  from 'classnames';





let html = '';

export default class ContentEditable {

  componentDidMount(){
    this.focus();
  }
  componentDidUpdate(){
    this.focus();
  }
  focus(){
    React.findDOMNode(this.refs.contentEditable).focus();
  }
  render(){
    const {right, info} = this.props;
    return(
        <pre {...this.props} contentEditable={true} onFocus={::this._focus} onBlur={::this._blur} onKeyUp={::this._keyDown} ref="contentEditable">
          {this.props.children}
        </pre>
    );

  }

  _focus(e){

  }

  _blur(e){
    e.target.innerHTML.length !== 0 && typeof this.props.onChange === 'function' && this.props.onChange(e.target.innerHTML);

  }

  _keyDown(e){
    e.preventDefault();
    typeof this.props.onKeyDown === 'function' && this.props.onKeyDown(e);
  }
}