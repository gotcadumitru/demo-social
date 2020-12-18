import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../validators/validators';
import FormCreator from '../../FormControls/FormControls';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const maxLength10 = maxLengthCreator(10);
const Textarea = FormCreator('textarea');

const MyPostsComponent = React.memo((props)=> {
  let posts = props.postsArray.map( post => {
    return <Post 
      likeCounter={post.likeCounter} 
      message={post.message} 
      name={post.name} />
  } );
  return (
    <div className={s.posts}>
      <div>
        <h3>
          My Posts
        </h3>
        <h4>
          Add Post
        </h4>
        <div >
          
          <div>
            <form  onSubmit={props.handleSubmit}>

            <Field name={"post"} 
              component={Textarea}
              validate={[required,maxLength10]}
              cols="50" 
              rows="3" />
          
          <button >ClickMe</button>
              </form>
          </div>
        </div>
      </div>

      {posts}

    </div>
  );
})
const AddPostForm = reduxForm({
  form: "post"
})(MyPostsComponent)

function MyPosts(props){
  const onSubmit = (post)=>{
    props.addPost(post.post)
  }
  return (
    <AddPostForm {...props}  onSubmit={onSubmit}/>
  )
}
export default MyPosts;