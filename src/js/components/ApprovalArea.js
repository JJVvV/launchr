/**
 * Created by Administrator on 2015/7/10.
 */

import React, {PropTypes} from 'react';

import CalendarBody from './CalendarBody.js';
import CalendarTitle from './CalendarTitle.js';

export default class CalendarArea extends React.Component{





  render() {
      debugger;
      return (
          <div className="calendar-area">
            <div className="calendar">
                <CalendarTitle />
                <CalendarBody />
            </div>
          </div>
      );
  }

}



