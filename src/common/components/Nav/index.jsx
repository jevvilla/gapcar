import React from 'react';
import { Link } from 'react-router-dom';

import strings from '../../strings';
import * as paths from '../../../routes/paths';

const Nav = () => (
  <ul className="nav justify-content-center">
    <li className="nav-item">
      <Link to={paths.ROOT}>
        <span className="nav-link">{strings.HOME}</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to={`/${paths.DETAILS}`}>
        <span className="nav-link">{strings.DETAILS}</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to={`/${paths.COMPARE}`}>
        <span className="nav-link">{strings.COMPARE}</span>
      </Link>
    </li>
  </ul>
);

export default Nav;
