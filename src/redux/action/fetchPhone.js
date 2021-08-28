import axios from 'axios';
import { SET_PHONE } from '../types';

export const fetchPhone = () => (dispatch) => {
  axios.get('http://localhost:3000/db.json').then(({ data }) => {
    dispatch(setPhone(data.phone));
  });
};

export const setPhone = (items) => ({
  type: SET_PHONE,
  payload: items,
});
