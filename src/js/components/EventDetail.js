/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes } from 'react'
import classnames  from 'classnames';
import PubSub from 'pubsub-js';





export default class Slider extends React.Component{

  constructor(){
    super();
  }

  render(){
    debugger;
    return(
        <div>
          <button onClick={::this.onClose}>x</button>
        </div>
    );
  }

  onClose(){

    typeof this.props.onClose === 'function' && this.props.onClose();
  }

}