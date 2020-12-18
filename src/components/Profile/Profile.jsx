import React from 'react';
import Preloader from '../common/Preloader';
import PostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInformation from './ProfileInfo/ProfileInfo';

function Profile(props) {
  if(!props.profile){
    return (
      <Preloader/>
    )
  }  
  return (
    <div className={s.profile}>

      <ProfileInformation 
        name= {props.profile.fullName} 
        info= {props.profile.aboutMe} 
        ava= {props.profile.photos.small}
        topImage= {props.profile.photos.large}
        status = {props.status}
        updateStatus={props.updateStatus}
        />
      
      <PostsContainer />
   
    </div>
  );
}
export default Profile;