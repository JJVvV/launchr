/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes } from 'react'
import classnames  from 'classnames';





let html = '';

export default class ContentEditable {



  render(){
    const {right, info} = this.props;
    return(
        <pre {...this.props} contentEditable={true} onFocus={::this.focus} onBlur={::this.blur}>
          {this.props.children}
        </pre>
    );

  }

  focus(e){

  }

  blur(e){
    e.target.innerHTML.length !== 0 && typeof this.props.onChange === 'function' && this.props.onChange(e.target.innerHTML);

  }
}