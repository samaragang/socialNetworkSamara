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
              dispatch={props.dispatch}
              profilePage={props.state.profilePage} />} />
            <Route path='/dialogs/*' element={<Dialogs
              dispatch={props.dispatch}
              dialogsPage={props.state.dialogsPage} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
