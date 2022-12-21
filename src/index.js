import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, { callbackRerender, addPost, updateNewPostText, addMessage, updateNewMessageText } from './redux/state';




const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            addMessage={addMessage}
            updateNewMessageText={updateNewMessageText}
             />
        </React.StrictMode>
    );
}
rerenderEntireTree();

callbackRerender(rerenderEntireTree);

reportWebVitals();