let initialState = {
    friendsData: [
        { name: 'Jenya', avatar: 'https://sun9-34.userapi.com/impg/yQEfyJdUJqDD1e9Fw5p021SVev3RlLqS1jIw2Q/0lWHB2VvRlo.jpg?size=1170x1140&quality=96&sign=83a9bbd299bc4e14645191b4b66acc7d&type=album' },
        { name: 'Oleg', avatar: 'https://sun9-28.userapi.com/impg/S08Ib6o3bpPihqxMwq_nSzoyAn28-wlsm-4CAQ/I6_DVvqxgyk.jpg?size=1920x1442&quality=96&sign=b8708812a2548533a08cac96e2b8c7fd&type=album' },
        { name: 'Maksim', avatar: 'https://sun9-25.userapi.com/impg/A-GDs2370zB2lHQQZDkTtxO_YsdRk_SZqaf7Kg/xMv8Zvp37l8.jpg?size=1060x1600&quality=95&sign=63005c3f8fb6e2c3d8e9415d3cc386d9&type=album' },
    ]
}

const navBarReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default navBarReducer;