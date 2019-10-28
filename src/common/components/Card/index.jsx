import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import strings from '../../strings';
import * as paths from '../../../routes/paths';
import './styles.css';

const Card = props => {
  const { image, model, brand, price, id, onCompareChecked, checked, isDisabled } = props;

  return (
    <div className="card">
      <div className="card-body">
        <img src={image} alt={model} className="car-image" />
        <h5 className="card-title pt-3">{model}</h5>
        <h5 className="card-title">{brand}</h5>
        <p className="card-text">{`${strings.PRICE}: ${price}`}</p>
        <Link to={`/${paths.DETAILS}/${id}`}>
          <button type="button" className="btn btn-primary btn-sm">
            {strings.DETAILS}
          </button>
        </Link>
        <div className="form-group form-check pt-3">
          <input
            type="checkbox"
            className="form-check-input"
            id={id}
            onChange={onCompareChecked}
            defaultChecked={checked}
            disabled={isDisabled(id)}
          />
          <label className="form-check-label" htmlFor={id}>
            {strings.COMPARE}
          </label>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onCompareChecked: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  isDisabled: PropTypes.func.isRequired,
};

Card.defaultProps = {
  checked: false,
};

export default Card;
