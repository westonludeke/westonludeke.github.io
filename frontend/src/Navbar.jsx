import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">Weston Ludeke</div>
      <div className={`navbar-hamburger ${isOpen ? 'is-active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      <div className={`navbar-links ${isOpen ? 'is-open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
