import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.css';

function Layout({ haeaderElements, children }) {
  return (
    <div data-testid="layout" className="Layout">
      <Header className="layout-header">
        {haeaderElements}
      </Header>
      <main className="layout-content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
