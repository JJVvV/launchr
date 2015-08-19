/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes } from 'react'
import classnames  from 'classnames';
import PubSub from 'pubsub-js';





export default class Slider extends React.Component{

  constructor(){
    super();
    this.state = {
      active:false,
      closed:true
    }
  }

  componentDidMount(){
    this.activeSlider = PubSub.subscribe('haha', function(){
      this.setState({
        active:true,
        closed: false
      });
    }.bind(this));

    React.findDOMNode(this.refs.slider).addEventListener('transitionend', ::this.onEnd);
  }
  componentWillUnMount(){
    PubSub.unsubscribe(this.activeSlider);
    React.findDOMNode(this.refs.slider).removeEventListener('transitionend', ::this.onEnd);

  }
  onEnd(){
    if(!this.state.active){
      typeof this.props.onCloseEnd === 'function' && this.props.onCloseEnd()
      this.setState({
        closed: true
      });
    }

  }
  render(){
    debugger;
    const {active, closed} = this.state;
    let width = active ? '700px' : '0px';

    return(
        <div className="slider" style={{transition:'width .5s ease-in-out', width:width}} ref="slider">
          {active &&
            React.cloneElement(
                this.props.children,
                  {
                    onClose: this.onClose.bind(this)
                  }
            )
          }
        </div>
    );
  }

  onClose(){
    this.setState({
      active:false,
    });
    typeof this.props.onCloseStart === 'function' && this.props.onCloseStart();
  }

}