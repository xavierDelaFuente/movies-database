import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.css';

function Layout({ haeaderElements, children }) {
  return (
    <div data-testid="layout" className="Layout">
      <Header className="Layout-header">
        {haeaderElements}
      </Header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
