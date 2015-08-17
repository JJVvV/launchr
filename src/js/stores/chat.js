import assign from 'object-assign'
import * as constant from '../constants/launchr.js';

const initialState = {
  threadList: [], //聊天列表 on .sub-panel
  me:{ //关于我的信息
    //this is not available
  },
  chatRoomName: '', // 聊天室名字或者某人的名字
  chatRoom: [], //聊天室人物
  chatMessages: [ //所有聊天汇总

  ], // 当前状态下所有聊天记录
  currentThreadID: '', //当前聊天室ID
  timer: '' //记录聊天时间
};

let _threads = {};
let currentThreadID;


const actionsMap = {
  //加载 .threadList
  [constant.LOAD_THREADLIST]: (state, action) => {
    let threadList = action.threadList.map((thread) => {
      return {...thread, active: thread.threadID === currentThreadID}
    });
    return {threadList}
  },
  // 删除某个 .thread-item
  [constant.REMOVE_WORKITEM]: (state, action) => ({threadList: state.threadList.filter(item =>
      item.id !== action.id
  )}),
  //点击某个 .thread-item 时加载相应的聊天内容
  [constant.ADD_CHATMESSAGES]: (state, action) => {
    let chatMessages = state.chatMessages.concat(action.messages);
    return {
      chatMessages: chatMessages, chatRoomName: action.chatRoomName, timer: action.timer
    }
  },

  //// 添加消息
  //[constant.ADD_CHATMESSAGE]: (state, action) => {
  //  let chatMessages =[...state.chatMessages, action.message];
  //  //消息改变的同时改变threadList
  //
  //  let threadList = chatMessages.map(function(message){
  //    let threadID = message.threadID;
  //    let thread = _threads[threadID];
  //    if(thread && thread.timestamp > message.timestamp){
  //      return;
  //    }
  //    _threads[threadID] = {
  //
  //    }
  //
  //  });
  //  return {chatMessages, threadList}
  //},

  // 发送消息
  [constant.SEND_CHATMESSAGE]: (state, action) => (
    {chatMessages: [...state.chatMessages, action.message]}
  ),

  [constant.LOGOUT]: (state, action) => (
    {user:action.user}
  ),

  // 修改currentThreadID
  [constant.CHANGE_THREADID]: (state, action) => {
    currentThreadID = action.threadID;

    return {currentThreadID}
  }

}

export default function article(state = initialState, action){
  const reduceFn  = actionsMap[action.type];
  if(!reduceFn) return state;

  return Object.assign({}, state, reduceFn(state, action));
}
