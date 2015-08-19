/**
 * Created by Administrator on 2015/7/10.
 */




import fetch from 'isomorphic-fetch';
import RouterContainer from '../services/routerContainer.js';
import ReduxContainer from '../services/reduxContainer.js';
import testJSON from '../test/json_test.js';
import request from 'reqwest';
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

              method: 'get',
              contentType: 'application/json',
              crossOrigin: true,
              data:{
                  "appName": "launchr",
                  "appToken": "verify-code",
                  "userName": "bellliu",
                  "start": 0,
                  "end":10
              }
          })
                  .then(res => {

                  let threadList = testJSON.threadList;
                  return dispatch({
                      type: LOAD_THREADLIST,
                      threadList: threadList || res.threadList
                  })
              })

              .catch(err => {
                  console.error('load worklist failed');

              });

  }
}

//load chatMessages

export function loadChatMessages(threadID, name){

  return dispatch => {

      return fetch(`${MAIN_URL}/api/chatMessages`)
              .then(res => {

                  let messages = testJSON.messages;

                  dispatch({
                      threadID,
                      type: ADD_CHATMESSAGES,
                      messages: messages || res.messages,
                      chatRoomName: name
                  })
              })


              .catch(err => {
                  console.log(err);
                  console.error('load chat Messages failed');

              });

      }
}


//addMessage

export function sendMessage(text){

  return (dispatch, getState) => {

      return fetch(`${MAIN_URL}/api/articles`)

            .then(res => {

                  let message = {
                      info:text,
                      timer: new Date().toLocaleTimeString(),
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


