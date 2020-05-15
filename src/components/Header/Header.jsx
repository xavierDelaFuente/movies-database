import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

function Header({ children }) {
	return (
		<header className="header" data-testid="header">
			<img src={logo} className="header-logo" alt="logo" data-testid="app-logo" />
			<div>{children}</div>
			<a className="header-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
				Home
			</a>
		</header>
	);
}

export default Header;
