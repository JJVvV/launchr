/**
 * Created by Administrator on 2015/7/10.
 */

import React, {PropTypes} from 'react';

import CalendarBody from './CalendarBody.js';
import CalendarTitle from './CalendarTitle.js';

export default class CalendarArea extends React.Component{





  render() {

      return (
          <div className="approval-area global-detail-area">
            <div className="approval">
                <nav className="approval-title">
                    <span className="approval-search icon-glyph-115 calendar-action-search"></span>
                    <div className="approval-title-item active">
                        审批<i className="circle-tip">2</i>
                    </div>
                    <div className="approval-title-item">
                        抄送<i className="circle-tip">3</i>
                    </div>

                </nav>
                <div className="approval-body">
                    <div className="approval-handle-title clearfix">
                        <div className="approval-handle-title-item active">
                            待处理
                        </div>
                        <div className="approval-handle-title-item">
                            已处理
                        </div>
                    </div>
                    <div className="approval-list work-list">
                        <div className="work-item">
                            <div className="work-item-time">
                                <time>今天19:00截止</time>
                            </div>
                            <div className="work-item-avator">
                                <img src="/public/img/zhangqiuyan.jpg" alt="" width="40" height="40" />
                            </div>
                            <div className="work-item-info">
                                <h4>Join</h4>
                                <p>我爱你再见</p>
                            </div>
                        </div>
                        <div className="work-item">
                            <div className="work-item-time">
                                <time>今天19:00截止</time>
                            </div>
                            <div className="work-item-avator">
                                <img src="/public/img/zhangqiuyan.jpg" alt="" width="40" height="40" />
                            </div>
                            <div className="work-item-info">
                                <h4>Join</h4>
                                <p>我爱你再见</p>
                            </div>
                        </div>
                        <div className="work-item">
                            <div className="work-item-time">
                                <time>今天19:00截止</time>
                            </div>
                            <div className="work-item-avator">
                                <img src="/public/img/zhangqiuyan.jpg" alt="" width="40" height="40" />
                            </div>
                            <div className="work-item-info">
                                <h4>Join</h4>
                                <p>我爱你再见</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      );
  }

}



