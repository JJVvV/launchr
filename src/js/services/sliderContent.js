/**
 * Created by AlexLiu on 2015/8/21.
 */

import React from 'react';
import NewEvent from '../components/NewEvent.js';
import NewMeeting from '../components/NewMeeting.js';
import NewMeetingFilter from '../components/NewMeetingFilter.js';
import MeetingDetail from '../components/MeetingDetail.js';
import EventDetail from '../components/EventDetail.js';
import {S} from '../constants/launchr.js';

export default function getSliderContent(data){

    let sliderChild;


    switch(data.type){
        case S.EVENT:
            sliderChild = <NewEvent />;
            break;
        case S.MEETING:
            sliderChild = <NewMeeting meeting={data.meeting} />;
            break;
        case S.MEETING_FILTER:
            sliderChild = <NewMeetingFilter meeting={data.meeting} />;
            break;
        case S.MEETING_DETAIL:
            sliderChild = <MeetingDetail meeting={data.meeting} />;
            break;
            case S.EVENT_DETAIL:
            sliderChild = <EventDetail event={data.event} />;
            break;
        default :
            sliderChild = <div></div>;
    }
    return sliderChild;
}