/**
 * Created by Administrator on 2015/7/10.
 */

import {Promise} from 'es6-promise';
import * as constant from '../constants/launchr.js';
import reqwest from 'reqwest';
import RouterContainer from '../services/routerContainer.js';
import ReduxContainer from '../services/reduxContainer.js';
const MAIN_URL = '';
var messageID=0;


// load worklist

export function loadThreadList(){

  return dispatch => {
    //cache

    //let articles = ReduxContainer.state().articles;
    //if(articles.length){
    //  debugger;
    //  dispatch({
    //    type: constant.LOAD_ARTICLES,
    //    articles: articles
    //  });
    //  return;
    //}

    Promise.resolve( reqwest(`${MAIN_URL}/api/articles`))
      //.then(res => JSON.parse)
        .then(res => {
          let threadList = [{avator:"/public/img/zhangqiuyan.jpg", id:0, title:"审批", info:"我爱你再见", timer: "17:02"},
            {avator:"/public/img/zhangqiuyan.jpg", id:1, title:"日程", info:"我爱你再见", timer: "17:03"}];

          return dispatch({
            type: constant.LOAD_THREADLIST,
            threadList: threadList || res.threadList
          })
        })

        .catch(err => {
          console.error('load worklist failed');

        });
  }
}

//load chatMessages

export function loadChatMessages(id){

  return dispatch => {
    //cache

    //let articles = ReduxContainer.state().articles;
    //if(articles.length){
    //  debugger;
    //  dispatch({
    //    type: constant.LOAD_ARTICLES,
    //    articles: articles
    //  });
    //  return;
    //}

    Promise.resolve( reqwest(`${MAIN_URL}/api/articles`))
      //.then(res => JSON.parse)
      //  .then(res => dispatch({
      //    type: constant.LOAD_CHATMESSAGES,
      //    chatMessages: res.chatMessages
      //  }))

        .then(res => {

          const messages = [{avator:"/public/img/zhangqiuyan.jpg", id:messageID++, name:"听说", info:"我爱你再见", timer: "17:02", me: true},
            {avator:"/public/img/zhangqiuyan.jpg", id:messageID++, name:"听说", info:"我爱你再见", timer: "17:02", me: false}];
            debugger;
          return dispatch({
            type: constant.ADD_CHATMESSAGES,
            messages: messages || res.messages,
            chatRoomName: 'darling',
            timer: Date.now()
          })
        })


        .catch(err => {
          console.error('load chat Messages failed');

        });
  }
}


//addMessage

export function sendMessage(message){

  return dispatch => {
    //cache

    //let articles = ReduxContainer.state().articles;
    //if(articles.length){
    //  debugger;
    //  dispatch({
    //    type: constant.LOAD_ARTICLES,
    //    articles: articles
    //  });
    //  return;
    //}

    Promise.resolve( reqwest(`${MAIN_URL}/api/articles`))
      //.then(res => JSON.parse)
      //  .then(res => dispatch({
      //    type: constant.LOAD_CHATMESSAGES,
      //    chatMessages: res.chatMessages
      //  }))
        .then(res => {

          return dispatch({
            type: constant.SEND_CHATMESSAGE,
            message: message
          })
        })

        .catch(err => {
          console.error('add Message failed');

        });
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


