import * as types from './types';

export const getAllCars = () => ({ type: types.GET_ALL_CARS });
export const getOneCar = () => ({ type: types.GET_ONE_CAR });
export const addCarToCompare = carId => ({ type: types.ADD_CAR_TO_COMPARE, payload: carId });
export const removeCarFromCompare = carId => ({
  type: types.REMOVE_CAR_FROM_COMPARE,
  payload: carId,
});
