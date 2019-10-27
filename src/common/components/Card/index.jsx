import React from 'react';

import strings from '../../strings';
import './styles.css';

const Card = props => {
  const { image, model, brand, price, id, onCompareChecked, checked } = props;

  return (
    <div className="card">
      <img src={image} alt={model} className="car-image" />
      <div className="card-body">
        <h5 className="card-title">{model}</h5>
        <p className="card-text">{brand}</p>
        <span>{`${strings.PRICE}: ${price}`}</span>
        <div className="row padding pt-3">
          <div className="col-4">
            <button type="button" className="btn btn-primary btn-sm">
              {strings.DETAILS}
            </button>
          </div>
          <div className="col-7">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={id}
                onChange={onCompareChecked}
                checked={checked}
              />
              <label className="form-check-label" htmlFor={id}>
                {strings.COMPARE}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;