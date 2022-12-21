import React from "react";
import style from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
const Navbar = (props) => {

    let friendsElements = props.friends.friendsData.map(f => <Friends name={f.name} avatar={f.avatar} />)

    return (
        <nav className={style.nav}>
            <div className={style.navBarMenu}>


                <div className={style.navItem}>
                    <NavLink to='/profile' className={navData => navData.isActive ? style.active : style.item}>
                        <img src="./icon-Profilee.ico" alt="" />
                        Profile
                    </NavLink>
                </div>
                <div className={style.navItem}>

                    <NavLink className={navData => navData.isActive ? style.active : style.item} to='/dialogs'>
                        <img src="./icon-Messages.ico" alt="" />
                        Messages
                    </NavLink>
                </div>
                <div className={style.navItem}>
                    <NavLink className={navData => navData.isActive ? style.active : style.item} to='/news'>
                        <img src="./icon-News.ico" alt="" />
                        News
                    </NavLink>
                </div>
                <div className={style.navItem}>
                    <NavLink className={navData => navData.isActive ? style.active : style.item} to='/music'>
                        <img src="./icon-Music.ico" alt="" />
                        Music
                    </NavLink>
                </div>
            </div>
            <div className={style.navBarFriends}>


                <div className={style.navItem}>
                    Friends
                    <div className={style.friendsList}>
                        {friendsElements}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;