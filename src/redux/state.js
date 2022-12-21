let state = {
    profilePage: {
        myPostsData: [
            { id: 1, message: 'Dima message', likesCount: 12, url: 'https://sun9-84.userapi.com/impf/c845416/v845416949/1fbf3c/g4Zi5xvfh5E.jpg?size=320x268&quality=96&sign=b7a6e33d2663a190d4336dccbe685483&type=album' },
            { id: 2, message: 'Nikita messagfefefeef', likesCount: 15, url: 'https://sun9-23.userapi.com/impg/p6anyzHnDqvQoZCavap_buZuJiIyB4w8wLbw1Q/X-tY8CLV8rI.jpg?size=832x1080&quality=95&sign=ddc8d79933912c96f139ce5d7add6243&type=album' },
            { id: 3, message: 'Egoиваиаr' },
            { id: 4, message: 'Lrgrgrgrgr e  reha' },
            { id: 5, message: 'Safef sha' }
        ],
        newPostText: 'it'
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Dima Samara', avatar:'https://sun9-79.userapi.com/impg/lfbGVybhnyChfeNvRfF_88m9zXjtZtWYC1B7FA/qczpRjSADsE.jpg?size=1080x1080&quality=95&sign=5cf977a07895b740cbfd374f4f955e90&type=album' },
            { id: 2, name: 'Nikita Kabarishka', avatar:'https://sun9-1.userapi.com/impg/-ReXoQUlhc4Fd7AN36RWP_cqExygTjMYWyRMmw/GQ4Gq2wKjv8.jpg?size=640x640&quality=96&sign=bc31d145a388a92bc69ac966cedd06e8&type=album' },
            { id: 3, name: 'Egor Krychevka', avatar:'https://sun9-52.userapi.com/impg/c855024/v855024718/2195a2/8uSYPYSqtFg.jpg?size=460x350&quality=96&sign=4a9e5eda7a8c72efa093b36c201a0f45&type=album' },
            { id: 4, name: 'Leha Zighail', avatar:'https://sun9-29.userapi.com/impf/c844521/v844521640/1d2f8f/d5NqDFoZVY0.jpg?size=720x687&quality=96&sign=d4effeb18ef93e0063e92eb2050a404d&type=album' },
            { id: 5, name: 'Sasha Money', avatar:'https://sun9-52.userapi.com/impg/c855632/v855632450/1acf01/m0YCPOKCdP4.jpg?size=720x846&quality=96&sign=6563b7e0cc0d61eccc33727317ea4ba2&type=album' }
        ],
        messagesData: [
            { id: 1, message: 'message 1' },
            { id: 2, message: 'message 2' },
            { id: 3, message: 'message 3' },
            { id: 4, message: 'message 4' },
            { id: 5, message: 'message 5' }
        ],
        newMessageText: 'new Message'
    },
    navBar: {
        friendsData: [
            {name:'Jenya', avatar:'https://sun9-34.userapi.com/impg/yQEfyJdUJqDD1e9Fw5p021SVev3RlLqS1jIw2Q/0lWHB2VvRlo.jpg?size=1170x1140&quality=96&sign=83a9bbd299bc4e14645191b4b66acc7d&type=album'},
            {name:'Oleg', avatar:'https://sun9-28.userapi.com/impg/S08Ib6o3bpPihqxMwq_nSzoyAn28-wlsm-4CAQ/I6_DVvqxgyk.jpg?size=1920x1442&quality=96&sign=b8708812a2548533a08cac96e2b8c7fd&type=album'},
            {name:'Maksim', avatar:'https://sun9-25.userapi.com/impg/A-GDs2370zB2lHQQZDkTtxO_YsdRk_SZqaf7Kg/xMv8Zvp37l8.jpg?size=1060x1600&quality=95&sign=63005c3f8fb6e2c3d8e9415d3cc386d9&type=album'},
        ]
    }
};

export const addPost = () => {
     let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.myPostsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
};
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
};


// new message double code bleat
export const addMessage = () => {
     let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree();
};
export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree();
};




let rerenderEntireTree
export const callbackRerender = (observer) => {
    rerenderEntireTree = observer;
}
export default state;