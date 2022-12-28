import React from "react";
import style from "./Friends.module.css";
import { NavLink } from "react-router-dom";
const Friends = (props) => {
  return (
    <NavLink to="" className={style.friend}>
      <div className={style.avatar}>
        <img src={props.avatar} alt="" />
      </div>
      <div className={style.name}>{props.name}</div>
    </NavLink>
  );
};

export default Friends;
