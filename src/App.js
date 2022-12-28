import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Profile from './components/Profile/Profile';

function App(props) {
  return (
    <BrowserRouter>      
      <Header />
      <div className="app-wrapper">
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile/*' element={<Profile />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
