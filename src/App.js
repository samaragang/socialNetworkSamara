import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
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
              store={props.store}
            />} />
            <Route path='/dialogs/*' element={<DialogsContainer
              store={props.store}
               />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
