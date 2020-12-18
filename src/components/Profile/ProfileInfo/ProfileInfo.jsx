import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

function ProfileInformation(props){
  
  return (
    <div className={s.profileInfo}>
        <img src={props.topImage} alt="1" />
      <div className={s.profile__person}>
        <img src={props.ava} alt="kot" />
        <div>
          <div>{props.name}</div>
          <div>{props.info}</div>
          <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>
        </div>
      </div>
    </div>
  );
}
export default ProfileInformation;