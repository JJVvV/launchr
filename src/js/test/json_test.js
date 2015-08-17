/**
 * Created by AlexLiu on 2015/8/17.
 */

//数据格式
let messageID = 0;

let threadList = [{avator:"/public/img/zhangqiuyan.jpg", id:0, title:"审批", info:"我爱你再见", timer: "17:02", threadID:'t_1'},
    {avator:"/public/img/zhangqiuyan.jpg", id:1, title:"日程", info:"我爱你再见", timer: "17:03", threadID: 't_2'}];


let messages = [{avator:"/public/img/zhangqiuyan.jpg", id:messageID++, name:"听说", info:"我爱你再见", timer: "17:02", me: true, threadID:'t_1'},
    {avator:"/public/img/zhangqiuyan.jpg", id:messageID++, name:"听说", info:"我爱你再见", timer: "17:02", me: false, threadID:'t_1'}];

export default {threadList, messages}