const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    myPostsData: [
        { id: 1, message: 'Dima message', likesCount: 12, url: 'https://sun9-84.userapi.com/impf/c845416/v845416949/1fbf3c/g4Zi5xvfh5E.jpg?size=320x268&quality=96&sign=b7a6e33d2663a190d4336dccbe685483&type=album' },
        { id: 2, message: 'Nikita messagfefefeef', likesCount: 15, url: 'https://sun9-23.userapi.com/impg/p6anyzHnDqvQoZCavap_buZuJiIyB4w8wLbw1Q/X-tY8CLV8rI.jpg?size=832x1080&quality=95&sign=ddc8d79933912c96f139ce5d7add6243&type=album' },
        { id: 3, message: 'Egoиваиаr' },
        { id: 4, message: 'Lrgrgrgrgr e  reha' },
        { id: 5, message: 'Safef sha' }
    ],
    newPostText: 'it samara'
}



const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            state.myPostsData.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }

};

export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;