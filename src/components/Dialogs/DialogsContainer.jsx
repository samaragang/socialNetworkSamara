import React from "react";
import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
//         let sendMessage = () => {
//           store.dispatch(sendMessageActionCreator());
//         };
//         let onMessageChange = (text) => {
//           store.dispatch(updateNewMessageTextActionCreator(text));
//         };

//         return (
//           <Dialogs
//             updateNewMessageTextActionCreator={onMessageChange}
//             sendMessageActionCreator={sendMessage}
//             // dialogsData={state.dialogsPage.dialogsData}
//             // messagesData={state.dialogsPage.messagesData}
//             // newMessageText={state.dialogsPage.newMessageText}
//             dialogsPage={state.dialogsPage}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessageActionCreator: () => {
      dispatch(sendMessageActionCreator());
    },
    updateNewMessageTextActionCreator: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
