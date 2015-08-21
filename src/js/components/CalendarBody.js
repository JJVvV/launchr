/**
 * Created by Administrator on 2015/7/10.
 */

import React, {PropTypes} from 'react';
import fullcalendar from 'fullcalendar';
import $ from 'jquery';
import PubSub from 'pubsub-js';
import fullcalendarContainer from "../services/fullcalendarContainer.js";
import {REFRESH_EVENT} from '../constants/launchr.js';


export default class ChatArea{



  componentDidMount(){
      let calendar = React.findDOMNode(this.refs.calendar);
      let $calendar = fullcalendarContainer.set($(calendar));
      PubSub.subscribe(REFRESH_EVENT, (eventName, data) => {
          console.log('event update');
      });
      $calendar.fullCalendar({
          header: false
      });
  }


  render() {
      return (
          <div className="calendar-body" ref="calendar"></div>
      );
  }


}



