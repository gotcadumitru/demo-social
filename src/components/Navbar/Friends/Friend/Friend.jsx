import React from 'react';
import style from './Friend.module.css'
function Friend(props) {
    return (
        <div className={style.friendItem}>
            <img className={style.friendIMG} src={props.img} alt="1" />
            <div className={style.Friendinfo}>
                <span>{props.name}</span>
            </div>
        </div>
    );
}
export default Friend;