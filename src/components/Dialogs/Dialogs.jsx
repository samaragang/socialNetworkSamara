import React from "react";
import style from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch({ type:'ADD-MESSAGE'})
        // props.addMessage();
    };
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newText: text})
        // props.updateNewMessageText(text);
    };


    let dialogsElements = props.dialogsPage.dialogsData.map(d => <Dialog name={d.name} id={d.id} avatar={d.avatar} />)
    let messagesElements = props.dialogsPage.messagesData.map(m => <Message message={m.message} id={m.id} />)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.inputArea}>
                    <textarea onChange={ onMessageChange } ref={newMessageElement} value={props.dialogsPage.newMessageText} />
                    <button onClick={ sendMessage }>send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;