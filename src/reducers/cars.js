/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import * as types from '../actions/types';

const initialState = {
  carList: [
    {
      id: '5db49e46fc13ae12c900000a',
      image: 'https://static.carroya.com/vehiculos/1928109/1928109_1_m.jpg',
      model: 'Mazda 3 Touring',
      year: '2018',
      brand: 'Mazda',
      price: '$41,000,000',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt non nisl auctor facilisis. Donec blandit nulla at turpis finibus, in sagittis ex tincidunt. Vestibulum aliquam libero eget nisi congue, vel ultrices augue viverra. Nulla vestibulum lobortis turpis. Quisque feugiat tincidunt velit, cursus porttitor est fermentum eu. Morbi ut arcu lorem. Aliquam ac blandit ex. Etiam et ullamcorper purus. Pellentesque ac leo ut tellus porttitor aliquet non id lorem. Phasellus id augue at ex fermentum viverra a sed est.',
    },
    {
      id: '5db49e462c94762384-000004765',
      image: 'https://static.carroya.com/vehiculos/1899601/1899601_20_m.jpg',
      model: 'Mazda CX-5',
      year: '2018',
      brand: 'Mazda',
      price: '$60,000,000',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt non nisl auctor facilisis. Donec blandit nulla at turpis finibus, in sagittis ex tincidunt. Vestibulum aliquam libero eget nisi congue, vel ultrices augue viverra. Nulla vestibulum lobortis turpis. Quisque feugiat tincidunt velit, cursus porttitor est fermentum eu. Morbi ut arcu lorem. Aliquam ac blandit ex. Etiam et ullamcorper purus. Pellentesque ac leo ut tellus porttitor aliquet non id lorem. Phasellus id augue at ex fermentum viverra a sed est.',
    },
    {
      id: '5db49e46fc13ae12c900000-364p',
      image: 'https://static.carroya.com/vehiculos/1921879/1921879_1_m.jpg',
      model: 'Mazda 3 Sedan Prime',
      year: '2017',
      brand: 'Mazda',
      price: '$45,600,000',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt non nisl auctor facilisis. Donec blandit nulla at turpis finibus, in sagittis ex tincidunt. Vestibulum aliquam libero eget nisi congue, vel ultrices augue viverra. Nulla vestibulum lobortis turpis. Quisque feugiat tincidunt velit, cursus porttitor est fermentum eu. Morbi ut arcu lorem. Aliquam ac blandit ex. Etiam et ullamcorper purus. Pellentesque ac leo ut tellus porttitor aliquet non id lorem. Phasellus id augue at ex fermentum viverra a sed est.',
    },
    {
      id: '5db49e41928694-19286940-364p',
      image: 'https://static.carroya.com/vehiculos/1928694/1928694_1_m.jpg',
      model: 'Ford Edge Limited',
      year: '2014',
      brand: 'Ford',
      price: '$38,700,000',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt non nisl auctor facilisis. Donec blandit nulla at turpis finibus, in sagittis ex tincidunt. Vestibulum aliquam libero eget nisi congue, vel ultrices augue viverra. Nulla vestibulum lobortis turpis. Quisque feugiat tincidunt velit, cursus porttitor est fermentum eu. Morbi ut arcu lorem. Aliquam ac blandit ex. Etiam et ullamcorper purus. Pellentesque ac leo ut tellus porttitor aliquet non id lorem. Phasellus id augue at ex fermentum viverra a sed est.',
    },
    {
      id: '5db49e4-19154946940-0099888',
      image: 'https://static.carroya.com/vehiculos/1915494/1915494_11_m.jpg',
      model: 'Ford Explorer',
      year: '2014',
      brand: 'Ford',
      price: '$22,000,000',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt non nisl auctor facilisis. Donec blandit nulla at turpis finibus, in sagittis ex tincidunt. Vestibulum aliquam libero eget nisi congue, vel ultrices augue viverra. Nulla vestibulum lobortis turpis. Quisque feugiat tincidunt velit, cursus porttitor est fermentum eu. Morbi ut arcu lorem. Aliquam ac blandit ex. Etiam et ullamcorper purus. Pellentesque ac leo ut tellus porttitor aliquet non id lorem. Phasellus id augue at ex fermentum viverra a sed est.',
    },
    {
      id: '5db4wwebsmj91873314_15_m99888',
      image: 'https://static.carroya.com/vehiculos/1873314/1873314_15_m.jpg',
      model: 'Ford Mustang GT Premium',
      year: '2019',
      brand: 'Ford',
      price: '$230,000,000',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt non nisl auctor facilisis. Donec blandit nulla at turpis finibus, in sagittis ex tincidunt. Vestibulum aliquam libero eget nisi congue, vel ultrices augue viverra. Nulla vestibulum lobortis turpis. Quisque feugiat tincidunt velit, cursus porttitor est fermentum eu. Morbi ut arcu lorem. Aliquam ac blandit ex. Etiam et ullamcorper purus. Pellentesque ac leo ut tellus porttitor aliquet non id lorem. Phasellus id augue at ex fermentum viverra a sed est.',
    },
    {
      id: '5db4wwebsmj91871919-1919972_2_m9',
      image: 'https://static.carroya.com/vehiculos/1919972/1919972_2_m.jpg',
      model: 'Toyota Land Cruiser',
      year: '1997',
      brand: 'Toyota',
      price: '$140,000,000',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt non nisl auctor facilisis. Donec blandit nulla at turpis finibus, in sagittis ex tincidunt. Vestibulum aliquam libero eget nisi congue, vel ultrices augue viverra. Nulla vestibulum lobortis turpis. Quisque feugiat tincidunt velit, cursus porttitor est fermentum eu. Morbi ut arcu lorem. Aliquam ac blandit ex. Etiam et ullamcorper purus. Pellentesque ac leo ut tellus porttitor aliquet non id lorem. Phasellus id augue at ex fermentum viverra a sed est.',
    },
  ],
};

const getNewListToCompare = (state, carId, compare) =>
  state.carList.map(car => {
    if (car.id === carId) {
      return { ...car, compare };
    }
    return car;
  });

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_CARS:
      return state;
    case types.ADD_CAR_TO_COMPARE:
      return { ...state, carList: getNewListToCompare(state, action.payload, true) };
    case types.REMOVE_CAR_FROM_COMPARE:
      return { ...state, carList: getNewListToCompare(state, action.payload, false) };
    default:
      return state;
  }
};

export default carsReducer;
