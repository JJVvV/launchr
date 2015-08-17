/**
 * Created by Administrator on 2015/7/10.
 */

import {Promise} from 'es6-promise';
import * as constant from '../constants/launchr.js';
import reqwest from 'reqwest';
import RouterContainer from '../services/routerContainer.js';
import ReduxContainer from '../services/reduxContainer.js';
import testJSON from '../test/json_test.js';

const MAIN_URL = '';


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
    if(ReduxContainer.get().getState().chat.threadList.length){
        return dispatch({
            type: constant.LOAD_THREADLIST,
            threadList: ReduxContainer.get().getState().chat.threadList
        })
    }
    Promise.resolve( reqwest(`${MAIN_URL}/api/articles`))
      //.then(res => JSON.parse)
        .then(res => {
            let threadList = testJSON.threadList;
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

          let messages = testJSON.messages;

          return dispatch({
            type: constant.ADD_CHATMESSAGES,
            messages: messages || res.messages,
            chatRoomName: 'darling',
            timer: Date.now()
          })
        })


        .catch(err => {
            console.log(err);
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

// change ThreadID
export function changeThreadID(threadID){

    return dispatch => {

        return dispatch({
            type: constant.CHANGE_THREADID,
            threadID
        })
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


