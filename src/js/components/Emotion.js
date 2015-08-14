/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes } from 'react'
import classnames  from 'classnames';






export default class Emotion {



  render(){
    const {right, info} = this.props;
    return(
      <div className="emotion">
        <div className="emotion-header">
          <div className="emotion-header-inner">
            <span className="emotion-header-item"></span>
            <span className="emotion-header-item"></span>
            <span className="emotion-header-item"></span>
          </div>
        </div>
        <div className="emotion-bd">
          <div className="emotion-bd-item normal clearfix">
            <a title="Smile" type="qq" class="face">Smile</a><a title="Grimace" type="qq" class="face">Grimace</a><a title="Love" type="qq" class="face">Love</a><a title="Scowl" type="qq" class="face">Scowl</a><a title="Chill" type="qq" class="face">Chill</a><a title="Sob" type="qq" class="face">Sob</a><a title="Shy" type="qq" class="face">Shy</a><a title="Silent" type="qq" class="face">Silent</a><a title="Sleep" type="qq" class="face">Sleep</a><a title="Cry" type="qq" class="face">Cry</a><a title="Awkward" type="qq" class="face">Awkward</a><a title="Angry" type="qq" class="face">Angry</a><a title="Tongue" type="qq" class="face">Tongue</a><a title="Grin" type="qq" class="face">Grin</a><a title="Surprise" type="qq" class="face">Surprise</a><a title="Frown" type="qq" class="face">Frown</a><a title="Ruthless" type="qq" class="face">Ruthless</a><a title="Blush" type="qq" class="face">Blush</a><a title="Crazy" type="qq" class="face">Crazy</a><a title="Puke" type="qq" class="face">Puke</a><a title="Chuckle" type="qq" class="face">Chuckle</a><a title="Joyful" type="qq" class="face">Joyful</a><a title="Slight" type="qq" class="face">Slight</a><a title="Smug" type="qq" class="face">Smug</a><a title="Hungry" type="qq" class="face">Hungry</a><a title="Drowsy" type="qq" class="face">Drowsy</a><a title="Panic" type="qq" class="face">Panic</a><a title="Sweat" type="qq" class="face">Sweat</a><a title="Laugh" type="qq" class="face">Laugh</a><a title="Commando" type="qq" class="face">Commando</a><a title="Determined" type="qq" class="face">Determined</a><a title="Scold" type="qq" class="face">Scold</a><a title="Shocked" type="qq" class="face">Shocked</a><a title="Shhh" type="qq" class="face">Shhh</a><a title="Dead" type="qq" class="face">Dead</a><a title="Tormented" type="qq" class="face">Tormented</a><a title="Toasted" type="qq" class="face">Toasted</a><a title="Skull" type="qq" class="face">Skull</a><a title="Hammer" type="qq" class="face">Hammer</a><a title="Wave" type="qq" class="face">Wave</a><a title="Speechless" type="qq" class="face">Speechless</a><a title="NosePick" type="qq" class="face">NosePick</a><a title="Clap" type="qq" class="face">Clap</a><a title="Shame" type="qq" class="face">Shame</a><a title="Trick" type="qq" class="face">Trick</a><a title="Bah！L" type="qq" class="face">Bah！L</a><a title="Bah！R" type="qq" class="face">Bah！R</a><a title="Yawn" type="qq" class="face">Yawn</a><a title="Pooh-pooh" type="qq" class="face">Pooh-pooh</a><a title="Shrunken" type="qq" class="face">Shrunken</a><a title="TearingUp" type="qq" class="face">TearingUp</a><a title="Sly" type="qq" class="face">Sly</a><a title="Kiss" type="qq" class="face">Kiss</a><a title="Wrath" type="qq" class="face">Wrath</a><a title="Whimper" type="qq" class="face">Whimper</a><a title="Cleaver" type="qq" class="face">Cleaver</a><a title="Watermelon" type="qq" class="face">Watermelon</a><a title="Beer" type="qq" class="face">Beer</a><a title="Basketball" type="qq" class="face">Basketball</a><a title="PingPong" type="qq" class="face">PingPong</a><a title="Coffee" type="qq" class="face">Coffee</a><a title="Rice" type="qq" class="face">Rice</a><a title="Pig" type="qq" class="face">Pig</a><a title="Rose" type="qq" class="face">Rose</a><a title="Wilt" type="qq" class="face">Wilt</a><a title="Lip" type="qq" class="face">Lip</a><a title="Heart" type="qq" class="face">Heart</a><a title="BrokenHeart" type="qq" class="face">BrokenHeart</a><a title="Cake" type="qq" class="face">Cake</a><a title="Lightning" type="qq" class="face">Lightning</a><a title="Bomb" type="qq" class="face">Bomb</a><a title="Dagger" type="qq" class="face">Dagger</a><a title="Soccer" type="qq" class="face">Soccer</a><a title="Ladybug" type="qq" class="face">Ladybug</a><a title="Poop" type="qq" class="face">Poop</a><a title="Moon" type="qq" class="face">Moon</a><a title="Sun" type="qq" class="face">Sun</a><a title="Gift" type="qq" class="face">Gift</a><a title="Hug" type="qq" class="face">Hug</a><a title="ThumbsUp" type="qq" class="face">ThumbsUp</a><a title="ThumbsDown" type="qq" class="face">ThumbsDown</a><a title="Shake" type="qq" class="face">Shake</a><a title="Peace" type="qq" class="face">Peace</a><a title="Fight" type="qq" class="face">Fight</a><a title="Beckon" type="qq" class="face">Beckon</a><a title="Fist" type="qq" class="face">Fist</a><a title="Pinky" type="qq" class="face">Pinky</a><a title="RockOn" type="qq" class="face">RockOn</a><a title="Nuh-uh" type="qq" class="face">Nuh-uh</a><a title="OK" type="qq" class="face">OK</a><a title="InLove" type="qq" class="face">InLove</a><a title="Blowkiss" type="qq" class="face">Blowkiss</a><a title="Waddle" type="qq" class="face">Waddle</a><a title="Tremble" type="qq" class="face">Tremble</a><a title="Aaagh!" type="qq" class="face">Aaagh!</a><a title="Twirl" type="qq" class="face">Twirl</a><a title="Kotow" type="qq" class="face">Kotow</a><a title="Dramatic" type="qq" class="face">Dramatic</a><a title="JumpRope" type="qq" class="face">JumpRope</a><a title="Surrender" type="qq" class="face">Surrender</a><a title="Hooray" type="qq" class="face">Hooray</a><a title="Meditate" type="qq" class="face">Meditate</a><a title="Smooch" type="qq" class="face">Smooch</a><a title="TaiChi L" type="qq" class="face">TaiChi L</a><a title="TaiChi R" type="qq" class="face">TaiChi R</a>
          </div>
          <div className="emotion-bd-item"></div>
          <div className="emotion-bd-item">

          </div>
        </div>
      </div>
    );

  }


}