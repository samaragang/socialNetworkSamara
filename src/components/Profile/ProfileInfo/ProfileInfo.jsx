import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={style.profileBg}>
                <img src='bg.jpg'/>
            </div>
            <div>
                ava + descr
            </div>
            main contant
        </div>
    )
}

export default ProfileInfo;