import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/state';




const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App
            state={state}
            dispatch={store.dispatch.bind(store)}
             />
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState());

store.callbackRerender(rerenderEntireTree);












reportWebVitals();