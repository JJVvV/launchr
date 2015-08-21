/**
 * Created by Administrator on 2015/7/10.
 */




import fetch from 'isomorphic-fetch';
import RouterContainer from '../services/routerContainer.js';
import ReduxContainer from '../services/reduxContainer.js';
import testJSON from '../test/json_test.js';
import request from 'reqwest';
import moment from 'moment';
import $ from 'jquery';

import longPollService from '../services/longPollService.js';

const MAIN_URL = '';
import {CHAT_URL,
    LOAD_THREADLIST,
    ADD_CHATMESSAGES,
    SEND_CHATMESSAGE,
    CHANGE_THREADID,
    CHANGE_THREAD} from '../constants/launchr.js';


export function loadThreadList(){

  return dispatch => {

      return request({
              url: '/chat/unreadsession',
              method: 'post',
              type: 'json',
              contentType: 'application/json',
              data:JSON.stringify({
                  "start": 0,
                  "end":10
              })
          })
                  .then(res => {

                  //let threadList = testJSON.threadList;
                  let threadList=[];

                  res.sessions.map(function(item,index){
                      threadList.push({
                          avator:"/redux-launchr/public/img/zhangqiuyan.jpg",
                          threadID:item.sessionName,
                          title:item.lastMsg==null || item.lastMsg.info==null?item.sessionName:JSON.parse(item.lastMsg.info).nickName,
                          info:item.lastMsg==null?"":item.lastMsg.content,
                          timer:moment(item.createDate).format('HH:mm'),
                          count: item.count
                      });
                  });

                  return dispatch({
                      type: LOAD_THREADLIST,
                      threadList: threadList,
                      currentMsgId:res.msgId
                  })
              })
              .catch(err => {
                  console.error(err);
                  console.error('load worklist failed');

              });

  }
}

//load chatMessages

export function loadChatMessages(threadID, name,count){

  return dispatch => {
          return request({
              url: '/chat/historymessage',
              method: 'post',
              type: 'json',
              contentType: 'application/json',
              data:JSON.stringify({
                  "to": threadID,
                  "limit":8,
                  "endTimestamp": +new Date()
              })
          }).then(res => {

              //let messages = testJSON.messages;
              let messages =[];

              res.msg.sort(function(a,b){
                    return a.createDate-b.createDate;
              });

              let currentMessageIds=[];

              messages = res.msg.map(function(item,index){
                  if(index<=count-1){
                      currentMessageIds.push(item.clientMsgId);
                  }
                  return {
                      avator:'/redux-launchr/public/img/zhangqiuyan.jpg',
                      threadID:threadID,
                      me:item.from!=threadID,
                      name:JSON.parse(item.info).nickName,
                      info:item.content,
                      id:item.msgId,
                      timer:moment(item.createDate).format('HH:mm'),
                  }
              });

              request({
                  url: '/chat/readsession',
                  method: 'post',
                  type: 'json',
                  contentType: 'application/json',
                  data:JSON.stringify({
                      "sessionName":threadID,
                      "msgIds":currentMessageIds
                  })
              });

              dispatch({
                  threadID,
                  type: ADD_CHATMESSAGES,
                  messages: messages,
                  chatRoomName: name
              })
          })
          .catch(err => {
              console.log(err);
              console.error('load chat Messages failed');

          });

      }
}


export function loadLongPoll(){

    return (dispatch,getState)=>{
        longPollService(dispatch,getState);
    }
}
//addMessage

export function sendMessage(text){

  return (dispatch, getState) => {
     let chatState=getState().chat;
     let currentDate=new Date();
     return request({
         url: '/chat/sendmsg',
         method: 'post',
         type: 'json',
         contentType: 'application/json',
         data:JSON.stringify({
             "to": [ chatState.currentThreadID],
             "content": text,
             "type": "Text",
             "info": "{\"nickName\":\"王道斌\"}",
             "clientMsgId":+currentDate
         })
     }).then(res => {
         let message = {
             info:text,
             timer: currentDate.toLocaleTimeString(),
             me: true
         }
         return dispatch({
             type: SEND_CHATMESSAGE,
             message,

         })
     })

         .catch(err => {
             console.log(err);
             console.error('add Message failed');

         });

     }
}

// change ThreadID
export function changeThreadID(threadID){

    return dispatch => {

        return dispatch({
            type: CHANGE_THREADID,
            threadID
        })
    }
}

// change Thread 切换聊天室
export function changeThread(threadID, name){

    return dispatch => {

        return dispatch(getNowThread(threadID, name))
    }
}


function getNowThread(threadID, chatRoomName){
    return {
        type: CHANGE_THREAD,
        threadID,
        chatRoomName
    }
}





////轮询
//function loopRequest(){
//    request({
//
//    }).then((req) => {
//        if(!req.success) throw error;
//        dispatch({})
//        loopRequest();
//    }).catch((err) => {
//        console.log(err);
//    });
//}































//// user login
//export function login(username, password){
//
//  return dispatch => {
//
//    Promise.resolve( reqwest({
//      url: `${MAIN_URL}/admin/login`,
//      method:'POST',
//
//      type: 'json',
//
//      headers:{
//        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
//      },
//      data:{
//        username,
//        password
//      }
//    }))
//
//      //.then(res => JSON.parse)
//      .then(res => {
//
//        if(res.result){
//          dispatch({
//            type: constant.USER,
//            user: {
//              username:'alex',
//              jwt: res.id_token
//            }
//          });
//          RouterContainer.get().transitionTo('index');
//        }
//
//        //dispatch({
//        //  type: constant.USER,
//        //  user: {
//        //    username: 'alex'
//        //  }
//        //})
//        //RouterContainer.get().transitionTo('index');
//
//      })
//
//      .catch(err => {
//
//        const res = {
//          result: true,
//          user:{
//            username: 'alex',
//            jwt: 'alexjwt'
//          }
//        }
//        dispatch({
//          type: constant.USER,
//          user: res
//        });
//      });
//  }
//}
//
////user logout
//export function logout(){
//  localStorage.clear('jwt');
//  return dispatch => {
//    dispatch({
//      type: constant.LOGOUT,
//      user: {
//        jwt: ''
//      }
//    });
//    RouterContainer.get().transitionTo('index');
//  }
//}


