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
                    <a href="javascript:;" className="approval-title-item active">
                        审批<i className="circle-tip">2</i>
                    </a>
                    <a href="javascript:;" className="approval-title-item">
                        抄送<i className="circle-tip">3</i>
                    </a>

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
                    <div className="approval-list approval-list">
                        <div className="approval-item">
                            <div className="approval-item-func">
                                <div className="tip is-important">今天19:00截止</div>
                            </div>
                            <div className="approval-item-avator avator">
                                <img src="/public/img/zhangqiuyan.jpg" alt="" width="40" height="40" />
                            </div>
                            <div className="approval-item-info">
                                <h4>Join</h4>
                                <p>我爱你再见</p>
                            </div>
                        </div>
                        <div className="approval-item">
                            <div className="approval-item-func">
                                <div className="tip">今天19:00截止</div>
                            </div>
                            <div className="approval-item-avator avator">
                                <img src="/public/img/zhangqiuyan.jpg" alt="" width="40" height="40" />
                            </div>
                            <div className="approval-item-info">
                                <h4>Join</h4>
                                <p>我爱你再见</p>
                            </div>
                        </div>
                        <div className="approval-item">
                            <div className="approval-item-func">
                                <div className="tip">今天19:00截止</div>
                                <div>
                                    <span>11:20</span>
                                    <span className="icon-glyph-118"></span>
                                    <span className="approval-item-comment icon-glyph-29 comment-tip"></span>
                                </div>
                            </div>
                            <div className="approval-item-avator avator">
                                <img src="/public/img/zhangqiuyan.jpg" alt="" width="40" height="40" />
                            </div>
                            <div className="approval-item-info">
                                <h4>Join</h4>
                                <p>我爱你再见</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="approval-footer">
                    <a href="javascript:;" className="approval-footer-item active"><i className="icon-glyph-103"></i>接收</a>
                    <a href="javascript:;" className="approval-footer-item"><i className="icon-glyph-104"></i>发出</a>
                    <a href="javascript:;" className="approval-footer-item"><i className="icon-glyph-166"></i>新增</a>
                </div>
            </div>
          </div>
      );
  }

}



