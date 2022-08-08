import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Movies from './Movies/Movies';
import MovieInformation from './MovieInformation/MovieInformation';
import Actors from './Actors/Actors';
import Profile from './Profile/Profile';
import NavBar from './NavBar/NavBar';
const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
