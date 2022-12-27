import React from "react";
import style from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {    
    let dialogsElements = props.dialogsData.map(d => <Dialog name={d.name} id={d.id} avatar={d.avatar} />)
    let messagesElements = props.messagesData.map(m => <Message message={m.message} id={m.id} />)

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessageActionCreator()
    };
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageTextActionCreator(text)
    };
    
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.inputArea}>
                    <textarea placeholder="enter your message"    
                    onChange={ onMessageChange } 
                    ref={newMessageElement}
                    value={props.newMessageText} />
                    <button onClick={ onSendMessageClick }>send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;