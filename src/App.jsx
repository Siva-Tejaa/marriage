import React from 'react';
import "./App.css";
import Body from './components/Body/Body'
import Header from './components/Header/Header';

import { Routes, Route, Navigate } from 'react-router-dom';
import Events from './components/Events/Events';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import Venue from './components/Venue/Venue';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/home" element={<Navigate to="/"/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/venue" element={<Venue/>}/>
      </Routes>
    </div>
  )
}

export default App