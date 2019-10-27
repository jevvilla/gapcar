import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as carActions from '../../actions/cars';
import Card from '../../common/components/Card';
import strings from '../../common/strings';

import './styles.css';

const Home = props => {
  const { carList } = props.cars;
  const [list, setList] = useState(carList);
  const [searchByBrand, setSearchByBrand] = useState(null);

  const handleOnChange = e => {
    const { value } = e.target;

    if (value.length === 0) {
      setList(carList);
    }

    setSearchByBrand(value);
  };

  const enterPressed = e => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      onSearchClicked();
    }
  };

  const onSearchClicked = () => {
    if (searchByBrand !== '') {
      const listResult = carList.filter(
        item => item.brand.toLowerCase() === searchByBrand.toLowerCase(),
      );
      return setList(listResult);
    }
    return setList(carList);
  };

  const onCompareChecked = e => {
    const { addCarToCompare, removeCarFromCompare } = props.actions;
    const { id, checked } = e.target;

    if (checked) {
      return addCarToCompare(id);
    }
    return removeCarFromCompare(id);
  };

  const renderCards = () => {
    if (list.length === 0) {
      return <span>{strings.NO_RESULTS_FOUND}</span>;
    }
    return list.map(item => (
      <Card
        key={item.id}
        image={item.image}
        brand={item.brand}
        model={item.model}
        year={item.year}
        price={item.price}
        id={item.id}
        checked={item.compare}
        onCompareChecked={onCompareChecked}
      />
    ));
  };

  return (
    <>
      <div className="row">
        <div className="input-group col-3 no-padding">
          <input
            type="text"
            className="form-control"
            placeholder={strings.SEARCH_PLACEHOLDER}
            onChange={handleOnChange}
            onKeyPress={enterPressed}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-primary" type="button" onClick={onSearchClicked}>
              {strings.SEARCH_BUTTON_TITLE}
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-md-left cars-container ">{renderCards()}</div>
    </>
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
)(Home);
