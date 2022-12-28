import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let myPostsElements = props.profilePage.myPostsData.map(m => <Post key={m.id} message={m.message} likesCount={m.likesCount} url={m.url} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPostActionCreator();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostTextActionCreator(text);
    };

    return (
        <div>
            my posts
            <div>
                new post
                <div>
                    <textarea 
                    onChange={ onPostChange }
                    ref={newPostElement}
                    value={props.profilePage.newPostText} />
                </div>
                <div>
                    <button onClick={ onAddPost }>add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {myPostsElements}
            </div>
        </div>
    )
};

export default MyPosts;