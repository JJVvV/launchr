/**
 * Created by Administrator on 2015/7/10.
 */

import React, {PropTypes} from 'react';
import WorkItem from './WorkItem.js';


export default class WorkList extends React.Component{

  render(){
    const {items} = this.props;
    
    return (
        <div className="work-list">
          {this.renderItems(items)}
        </div>
    );
  }


  renderItems(items){
    return items.map(item =>(
        <WorkItem clickItem={this.props.clickItem} item={item} key={item.id} />
    ));
  }
}



