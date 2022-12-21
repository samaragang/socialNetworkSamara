import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src={props.url} alt="" />
            {props.message}
            <div>
                <span>like:  {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;