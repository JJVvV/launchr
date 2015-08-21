/**
 * Created by Administrator on 2015/7/10.
 */
/*
* application list item or people list item used in .sub-panel
 */

import React, {PropTypes} from 'react';
import classnames  from 'classnames';


export default class ChatRoom extends React.Component{



  render(){
    const {name, show} = this.props;
    return (
        show &&
        <div className="chat-room">
          <div className="chat-room-inner">
            <div className="chat-room-search">
              <label for="chat-room-search"></label>
              <input type="search" id="chat-room-search" />
            </div>
            <div className="chat-room-members clearfix">
              <div className="chat-room-members-add icon-glyph-1"></div>

              <div className="chat-room-member">
                <img src="./redux-launchr/public/img/zhangqiuyan.jpg" alt="" width="47" height="47" />
                <i className="icon-glyph-192 circle"></i>
              </div>
              <div className="chat-room-member">
                <img src="./redux-launchr/public/img/zhangqiuyan.jpg" alt="" width="47" height="47" />
                <i className="icon-glyph-192 circle"></i>
              </div>
            </div>
          </div>
        </div>

    );
  }

  toggleTitle(){

  }
}



