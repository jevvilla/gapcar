import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import strings from '../../strings';
import * as paths from '../../../routes/paths';

const Nav = props => {
  const { carList } = props.cars;

  const getCarsToCompare = () => carList.filter(item => item.compare === true);

  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link to={paths.ROOT}>
          <span className="nav-link">{strings.HOME}</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to={`/${paths.COMPARE}`}>
          <div className="row">
            <span className="nav-link">
              {strings.COMPARE}&nbsp;&nbsp;
              {getCarsToCompare().length !== 0 && (
                <span className="badge badge-pill badge-danger">{getCarsToCompare().length}</span>
              )}
            </span>
          </div>
        </Link>
      </li>
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    cars: state.cars,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Nav);
