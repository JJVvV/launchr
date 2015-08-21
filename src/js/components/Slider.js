/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes } from 'react/addons.js'
import classnames  from 'classnames';
import PubSub from 'pubsub-js';
import {SLIDER_ACTIVE} from '../constants/launchr.js';




export default class Slider extends React.Component{

  constructor(){
    super();
    this.state = {
      active:false,
      closed:true
    }
  }

  componentDidMount(){
    this.activeSlider = PubSub.subscribe(SLIDER_ACTIVE, () => {
      this.setState({
        active:true,
        closed: false
      });
    });

    React.findDOMNode(this.refs.slider).addEventListener('transitionend', ::this.onEnd);
  }
  componentWillUnMount(){
    PubSub.unsubscribe(this.activeSlider);
    React.findDOMNode(this.refs.slider).removeEventListener('transitionend', ::this.onEnd);

  }
  onEnd(){
    if(!this.state.active){
      typeof this.props.onCloseEnd === 'function' && this.props.onCloseEnd();
      this.setState({
        closed: true
      });
    }

  }
  render(){

    const {active, closed} = this.state;
    let width = active ? this.props.width || '700px' : '0px';


    return(
        <div className="slider" style={{transition:'width .3s cubic-bezier(0.69, 0.05, 0.53, 1.03)', width:width}} ref="slider">
          {closed ||
            React.addons.cloneWithProps(
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
