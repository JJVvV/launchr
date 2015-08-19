/**
 * Created by Administrator on 2015/7/10.
 */

import React, {PropTypes} from 'react';
import ThreadItem from './ThreadItem.js';


export default class ThreadList extends React.Component{

  render(){
    const {items} = this.props;
    
    return (
        <ul className="thread-list">
          {this.renderItems(items)}
        </ul>
    );
  }


  renderItems(items){
    return items.map(item =>(
        <ThreadItem clickItem={this.props.clickItem.bind(this, item)} item={item} key={item.id} />
    ));
  }

    clickItem(threadID, name){
        let action = actionContainer.get();
        //action.changeThreadID(threadID);
        //action.loadChatMessages(threadID, name);
        //action.loadThreadList().then(()=>{
        //
        //});
        console.log('thread-item\'s threadID:', threadID);
    }
}



