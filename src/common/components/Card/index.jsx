import React from 'react';

import strings from '../../strings';
import './styles.css';

const Card = props => {
  const { image, model, brand, price } = props;

  return (
    <div className="card col-3">
      <img src={image} alt={model} className="car-image" />
      <div className="card-body">
        <h5 className="card-title">{model}</h5>
        <p className="card-text">{brand}</p>
        <span>{`${strings.PRICE}: ${price}`}</span>
      </div>
    </div>
  );
};

export default Card;
