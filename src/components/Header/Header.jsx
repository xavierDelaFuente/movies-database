import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

function Header({ children }) {
  return (
    <div className="Header" data-testid="Header">
      <header className="Header-header">
        <img src={logo} className="Header-logo" alt="logo" data-testid="app-logo" />
        <div>{children}</div>
        <a
          className="Header-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
      </header>
    </div>
  );
}

export default Header;
