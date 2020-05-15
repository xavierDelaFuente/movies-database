import React from 'react';
import './Footer.css';

function Footer({ children }) {
  const currentYear = new Date().getFullYear()
  return (
		<footer className="footer" data-testid="footer">
			{`Built with`}
			<a href="https://github.com/facebook/create-react-app" className="footer-ling">create-react-app</a>
      {`, on ${currentYear} ©`}
    </footer>
	);
}

export default Footer;
