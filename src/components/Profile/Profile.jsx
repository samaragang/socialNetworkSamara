import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from './Profile.module.css';

const Profile = (props) => {
    return ( 
        <div className={style.profile}>
            <ProfileInfo />
            <MyPosts
            myPostsData = {props.profilePage.myPostsData}
            addPost={props.addPost}
            newPostText={props.profilePage.newPostText} 
            updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;