import assign from 'object-assign'
import * as constant from '../constants/launchr.js';

const initialState = {
  workList: [], //聊天列表 on .sub-panel
  me:{ //关于我的信息

  },
  chatRoomName: '', // 聊天室名字或者某人的名字
  chatRoom: [], //聊天室人物
  chatMessages: [], // 具体聊天信息
  timer: '' //记录聊天时间
};


const actionsMap = {
  //加载 .worklist
  [constant.LOAD_WORKLIST]: (state, action) => ({workList: action.workList}),
  // 删除某个 .work-item
  [constant.REMOVE_WORKITEM]: (state, action) => ({workList: state.workList.filter(item =>
      item.id !== action.id
  )}),
  //点击某个 .work-item 时加载相应的聊天内容
  [constant.LOAD_CHATMESSAGES]: (state, action) => ({chatMessages: action.chatMessages, chatRoomName: action.chatRoomName, timer: action.timer}),
  // 发送消息
  [constant.SEND_CHATMESSAGE]: (state, action) => {
    var aa = {chatMessages: [...state.chatMessages, action.message]};
    return aa;
  },
  [constant.LOGOUT]: (state, action) => {
    return {user:action.user};

  }
}

export default function article(state = initialState, action){
  const reduceFn  = actionsMap[action.type];
  if(!reduceFn) return state;

  return Object.assign({}, state, reduceFn(state, action));
}
