/**
 * Created by Administrator on 2015/7/10.
 */
/*
* application list item or people list item used in .sub-panel
 */

import React, {PropTypes} from 'react';
import classnames  from 'classnames';


export default class ThreadItem extends React.Component{


  render(){
    const {timer, avator, title, active, id, info} = this.props.item;

    return (
        <div className={classnames({'thread-item': true, 'active': active})} onClick={this.props.clickItem.bind(null, id)}>
          <div className="thread-item-func">
            <div className="tip">{timer}</div>
          </div>
          <div className="thread-item-avator">
            <img src={avator} alt="" width="40" height="40" />
          </div>
          <div className="thread-item-info">
            <h4>{title}</h4>
            <p>{info}</p>
          </div>
        </div>
    );
  }

}



