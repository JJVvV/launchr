/**
 * Created by Administrator on 2015/7/24.
 */

export function getMessagesByThreadID(chatMessages, currentThreadID){
  return chatMessages.filter(message => (message.threadID === currentThreadID));
}