import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/LoginForm';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        {isLoggedIn && <Navbar onLogout={handleLogout} />}
        <Routes>
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/movies" element={<PrivateRoute><MovieList /></PrivateRoute>} />
          <Route path="/add-movie" element={<PrivateRoute requiredRole="admin"><AddMovieForm /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
