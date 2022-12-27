import React from "react";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {    
    let state = props.store.getState();
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    };
    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };
    
    return (
       <Dialogs
        updateNewMessageTextActionCreator={ onMessageChange }
        sendMessageActionCreator={ sendMessage }
        dialogsData={state.dialogsPage.dialogsData}
        messagesData={state.dialogsPage.messagesData}
        newMessageText={state.dialogsPage.newMessageText}
        />
    )
}

export default DialogsContainer;