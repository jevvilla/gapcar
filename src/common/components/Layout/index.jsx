import React from 'react';

import Nav from '../Nav';

const Layout = ({ children }) => (
  <div>
    <Nav />
    <section className="container">{children}</section>
  </div>
);

export default Layout;
