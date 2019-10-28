import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import strings from '../../common/strings';

const Details = props => {
  const { id } = useParams();
  const { carList } = props.cars;
  const car = carList.find(item => item.id === id);

  if (!car) {
    return (
      <div>
        <span>{strings.CAR_NOT_FOUND}</span>
      </div>
    );
  }

  return (
    <div className="row justify-content-md-center pt-5">
      <div className="card col-7">
        <img className="card-img-top" src={car.image} alt={car.model} />
        <div className="card-body">
          <h5 className="card-title">{car.model}</h5>
          <h5 className="card-title">{car.year}</h5>
          <p className="card-text">{car.description}</p>
          <p className="card-text">
            <small className="text-muted">{car.brand}</small>
          </p>
        </div>
      </div>
    </div>
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
)(Details);
