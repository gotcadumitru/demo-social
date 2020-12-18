import React from 'react';
import style from './Message.module.css';

function Message(props) {
    if(props.message.send===1) {
        return (
            <div className={`${style.message} ${style.sendMe}`}>
                <div>
                {props.message.content}
                <img src={props.userImage} alt="Image"/>
                </div>
            </div>
        );
    }
    return (
        <div className={`${style.message} ${style.sendFriend}`}>
            <div className={style.messageContent}>
            <img src={props.userImage} alt="Image"/>
            {props.message.content}
            </div>

        </div>
    );
}
export default Message;