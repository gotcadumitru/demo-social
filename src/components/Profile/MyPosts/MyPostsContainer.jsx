import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    postsArray: state.profilePage.postsArray
  }
}

let PostsContainer = connect(mapStateToProps,{
  addPost,
})(MyPosts);

export default PostsContainer;