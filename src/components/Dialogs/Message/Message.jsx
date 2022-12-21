import React from "react";
import style from './Message.module.css';

const Message = (props) => {
    return (
        <div className={style.Message}>
            <div className={style.messageArea}>
                <div className={style.message}>
                    {props.message}
                </div>
            </div>
            
        </div>

    )
}

export default Message;