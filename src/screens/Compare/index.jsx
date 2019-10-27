import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as carActions from '../../actions/cars';

const Compare = props => {
  const { carList } = props.cars;
  const [carsToCompare, setCarsToCompare] = useState([]);
  useEffect(() => {
    const result = carList.filter(item => item.compare === true);
    setCarsToCompare(result);
  }, []);

  return (
    <div className="card-deck">
      {carsToCompare.map(car => {
        return (
          <div key={car.id} className="card">
            <img src={car.image} className="card-img-top" alt={car.model} />
            <div className="card-body">
              <h5 className="card-title">{car.model}</h5>
              <p className="card-text">{car.description}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{car.brand}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cars: state.cars,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(carActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Compare);
