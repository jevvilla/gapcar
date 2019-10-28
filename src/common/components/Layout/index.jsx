import React from 'react';

import Nav from '../Nav';
import './styles.css';

const Layout = ({ children }) => (
  <div className="layout">
    <Nav />
    <section className="container">{children}</section>
  </div>
);

export default Layout;
