import { SET_PHONE } from '../types';

const initialState = {
  items: [],
};

const phone = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHONE:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default phone;
