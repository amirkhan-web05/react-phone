import { SET_PHONE } from '../types';

const initialState = {
  items: [],
  isLoaded: false,
};

const phone = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHONE: {
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    }

    case 'SET_LOADED': {
      return {
        ...state,
        isLoaded: action.payload,
      };
    }

    default:
      return state;
  }
};

export default phone;
