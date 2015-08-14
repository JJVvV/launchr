/**
 * Created by Administrator on 2015/7/10.
 */
/*
* application list item or people list item used in .sub-panel
 */

import React, {PropTypes} from 'react';
import classnames  from 'classnames';


export default class WorkItem extends React.Component{


  render(){
    const {timer, avator, title, active, id} = this.props.item;
    var info = null;

    let titleContent = info ? <h4>{title}</h4> : <h3>{title}</h3>; // 通过info判断是哪种显示
    let infoContent = info && <p>{info}</p>;
    let timerContent = info &&  <time className="work-item-time">{timer}</time>;

    return (
        <div className={classnames({'work-item': true, 'active': active})} onClick={this.props.clickItem.bind(null, id)}>
          {timerContent}
          <div className="work-item-avator">
            <img src={avator} alt="" width="40" height="40" />
          </div>
          <div className="work-item-info">
            {titleContent}
            {info}
          </div>
        </div>
    );
  }

}



