/**
 * Created by Administrator on 2015/7/10.
 */

/*
*chat
 */
export const LOAD_THREADLIST = 'LOAD_THREADLIST'; //加载聊天列表

export const REMOVE_WORKITEM = 'REMOVE_WORKITEM'; //删除某个聊天人
export const ADD_CHATMESSAGES = 'ADD_CHATMESSAGES'; // 添加聊天记录
export const LOAD_CHATMESSAGES = 'LOAD_CHATMESSAGES'; // 加载具体聊天记录
export const SEND_CHATMESSAGE = 'ADD_CHATMESSAGE'; //发送消息
export const CHANGE_THREADID = 'CHANGE_THREADID' // 修改threadID
export const CHANGE_THREAD = 'CHANGE_THREAD' //切换聊天室
export const LOAD_ARTICLE = 'LOAD_ARTICLE';
export const SAVE_ARTICLE = 'SAVE_ARTICLE';
export const USER = 'USER';
export const LOGOUT = 'LOGOUT';

export const CHAT_URL =  'http://totoro:10000/chat';
export const CHAT_URL_UNREADSESSION = `${CHAT_URL}/unreadsession`;

export const ENTER = 13;

// event
export const REFRESH_EVENT = 'REFRESH_EVENT';

// PubSub
export const CHANGE_SLIDER = 'change-slider';
export const SLIDER_ACTIVE = 'slider-active';

//Slider 部分
export const S = {
    MEETING: 'MEETING',
    MEETING_FILTER: 'MEETING_FILTER',
    EVENT: 'EVENT',
    MEETING_DETAIL: 'MEETING_DETAIL',
    EVENT_DETAIL: 'EVENT_DETAIL'
};