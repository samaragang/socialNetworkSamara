import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <div className="app-wrapper">
        <Navbar friends={props.state.navBar} />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile/*' element={<Profile
             profilePage={props.state.profilePage}
             addPost={props.addPost}
             updateNewPostText={props.updateNewPostText}
            
             />} />
            <Route path='/dialogs/*' element={<Dialogs
             dialogsPage={props.state.dialogsPage}
             addMessage={props.addMessage}
             updateNewMessageText={props.updateNewMessageText} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
