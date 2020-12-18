import React from 'react';
import s from './Post.module.css';

function Post(props) {
  return (
    <div className={s.item}>
      <img src="https://pickaface.net/gallery/avatar/unr_avatarka_170523_2232_2pzbwox.png" alt="1" />
      <div className={s.name}>
        {props.name}
      </div>
      <div>
        {props.message}
      </div>
      <div>
        <button>Like - {props.likesCounter}</button>
      </div>

    </div>

  );
}
export default Post;