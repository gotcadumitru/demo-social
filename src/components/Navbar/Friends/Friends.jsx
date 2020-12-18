import React from 'react';
import Friend from './Friend/Friend';
import style from './Friends.module.css';

function Friends(props){

    let allFriends = props.friends.map(friend => {
      return  <Friend img={friend.img} name={friend.name}/>
    });    

    return (
        <div>
            <h2 className={style.friendsHeader} >Friends</h2>
            <div className={style.friends}>
                {allFriends}
            </div>
        </div>

    );
}
export default Friends;