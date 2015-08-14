/**
 * Created by Administrator on 2015/7/10.
 */

import React, {PropTypes} from 'react';
import fullcalendar from 'fullcalendar';
import $ from 'jquery';

export default class ChatArea{



  componentDidMount(){
      let calendar = React.findDOMNode(this.refs.calendar);
      $(calendar).fullCalendar({
          header: false
      });
  }


  render() {
      return (
          <div className="calendar-body" ref="calendar"></div>
      );
  }


}



