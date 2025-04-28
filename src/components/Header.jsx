import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" end style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Home</NavLink>
        <NavLink to="/museum" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Digital Museum</NavLink>
        <NavLink to="/heritage-guide" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>AI Heritage Guide</NavLink>
        <NavLink to="/quiz-game" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Gamified Learning</NavLink>
        <NavLink to="/language-learning" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Language Learning</NavLink>
        <NavLink to="/cultural-map" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Cultural Map</NavLink>
      </nav>
    </header>
  );
};

export default Header;
