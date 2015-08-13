/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes } from 'react'






export default class SubPanelHeader {

  render(){
    return(
        <header className="sub-panel-header">
          <span className="btn-add icon-glyph-102"></span>

          <div className="form-feedback work-search left">
            <input type="search" className="form-c" placeholder="搜索" />
            <span className="feedback  icon-glyph-115"></span>
          </div>
        </header>
    );

  }


}