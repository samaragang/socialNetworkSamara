const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Dima Samara', avatar: 'https://sun9-79.userapi.com/impg/lfbGVybhnyChfeNvRfF_88m9zXjtZtWYC1B7FA/qczpRjSADsE.jpg?size=1080x1080&quality=95&sign=5cf977a07895b740cbfd374f4f955e90&type=album' },
        { id: 2, name: 'Nikita Kabarishka', avatar: 'https://sun9-1.userapi.com/impg/-ReXoQUlhc4Fd7AN36RWP_cqExygTjMYWyRMmw/GQ4Gq2wKjv8.jpg?size=640x640&quality=96&sign=bc31d145a388a92bc69ac966cedd06e8&type=album' },
        { id: 3, name: 'Egor Krychevka', avatar: 'https://sun9-52.userapi.com/impg/c855024/v855024718/2195a2/8uSYPYSqtFg.jpg?size=460x350&quality=96&sign=4a9e5eda7a8c72efa093b36c201a0f45&type=album' },
        { id: 4, name: 'Leha Zighail', avatar: 'https://sun9-29.userapi.com/impf/c844521/v844521640/1d2f8f/d5NqDFoZVY0.jpg?size=720x687&quality=96&sign=d4effeb18ef93e0063e92eb2050a404d&type=album' },
        { id: 5, name: 'Sasha Money', avatar: 'https://sun9-52.userapi.com/impg/c855632/v855632450/1acf01/m0YCPOKCdP4.jpg?size=720x846&quality=96&sign=6563b7e0cc0d61eccc33727317ea4ba2&type=album' }
    ],
    messagesData: [
        { id: 1, message: 'message 1' },
        { id: 2, message: 'message 2' },
        { id: 3, message: 'message 3' },
        { id: 4, message: 'message 4' },
        { id: 5, message: 'samara 5' }
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        default:
            return state;
    }
};

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});

export default dialogsReducer;