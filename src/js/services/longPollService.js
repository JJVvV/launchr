/**
 * Created by BennetWang on 2015/8/20.
 */
import request from 'reqwest';
import moment from 'moment';
import {CHAT_URL,
    LOAD_THREADLIST,
    ADD_CHATMESSAGES,
    SEND_CHATMESSAGE,
    CHANGE_THREADID,
    CHANGE_THREAD} from '../constants/launchr.js';


Array.prototype.in_ObjectArray=function(property,value){
    for(var i=0;i<this.length;i++) {
        if(this[i][property] == value)
            return this[i];
    }
    return null;
}

Array.prototype.deepClone=function(){
    for(var i=0;i<this.length;i++) {
        if(this[i][property] == value)
            return this[i];
    }
}

export default function getRequest(dispatch,getState){
    var chatState=getState().chat;
    console.log(chatState);
    request({
        url: '/chat/subscribemessage',
        method: 'post',
        type: 'json',
        contentType: 'application/json',
        data:JSON.stringify({
            "msgId": chatState.currentMsgId,
            "milliseconds":5000
        })
    }).then(res=>{

        chatState=getState().chat;

        let threadList=[];
        chatState.threadList.map(function(item,index){
            threadList.push({
                avator:item.avator,
                threadID:item.threadID,
                title:item.title,
                info:item.info,
                timer:item.timer,
                count: item.count
            });
        });
        let messages=[];

        let maxMsgId=chatState.currentMsgId;

        res.msg.map(function(item,index){
            if(item.msgId>maxMsgId){
                maxMsgId=item.msgId;
            }
            if(threadList.in_ObjectArray("threadID",item.from)==null && (item.type=="Text" || item.type=="Audio" || item.type=="Image")){
                threadList.push({
                    avator:"/redux-launchr/public/img/zhangqiuyan.jpg",
                    threadID:item.from,
                    title:item.info==null?item.from:JSON.parse(item.info).nickName,
                    info:item.content,
                    timer:moment(item.createDate).format('HH:mm'),
                    count:1
                })
            }
            else{
                var thread=threadList.in_ObjectArray("threadID",item.from);
                thread!=null?thread.timer=moment(item.createDate).format('HH:mm'):'';
                thread!=null?thread.info=item.content:'';
                if(item.from!=chatState.currentThreadID){
                    thread!=null?thread.count=thread.count+1:'';
                }
                else{

                    messages.push({
                        avator:'/redux-launchr/public/img/zhangqiuyan.jpg',
                        threadID:chatState.currentThreadID,
                        me:item.from!=chatState.currentThreadID,
                        name:JSON.parse(item.info).nickName,
                        info:item.content,
                        id:item.clientMsgId,
                        timer:moment(item.createDate).format('HH:mm'),
                    });
                }
            }
        });

        dispatch({
            type: LOAD_THREADLIST,
            threadList: threadList,
            currentMsgId:maxMsgId
        });

        var currentThread=threadList.in_ObjectArray("threadID",chatState.currentThreadID);
        var currentchatRoomName=currentThread==null?"":currentThread.title;
        currentThread!=null && messages.length>0? dispatch({
            threadID:chatState.currentThreadID,
            type: ADD_CHATMESSAGES,
            messages: messages,
            chatRoomName: currentchatRoomName
        }):'';
        getRequest(dispatch,getState);
    }).catch(err => {
        console.log(err);
        console.error('load chat Messages failed');

    });
}