import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let myPostsElements = props.myPostsData.map(m =>  <Post     message={m.message} likesCount={m.likesCount} url={m.url} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            my posts
            <div>
                new post
                <div>
                    <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>add post</button>
                </div>
            </div>
            <div className={style.posts}>
              {myPostsElements}
            </div>
        </div>
    )
};

export default MyPosts;