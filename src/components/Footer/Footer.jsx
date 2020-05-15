import React from 'react';
import './Footer.css';

function Footer({ children }) {
  return (
      <footer className="Footer" data-testid="Footer">
        © {new Date().getFullYear()}, Built with
        <a href="https://github.com/facebook/create-react-app">create-react-app</a>
      </footer>
  );
}

export default Footer;
